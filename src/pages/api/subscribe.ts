import { NextApiRequest, NextApiResponse } from "next/types";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { query as q } from 'faunadb'

type User = {
  ref: {
    id: String
  }
  data: {
    stripe_customer_id: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const session = await getSession({ req })
    console.log(session)

    const user = await fauna.query<User>( // Executa uma consulta no FaunaDB para obter informações do usuário
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )
    console.log(user)

    let customerId = user.data.stripe_customer_id // Obtém o ID do cliente do Stripe associado ao usuário

    if(!customerId) { // Se o ID do cliente do Stripe não estiver definido para o usuário
      const stripeCustomer = await stripe.customers.create({  // Cria um novo cliente no Stripe
        email: session.user.email
      })

      await fauna.query( // Atualiza os dados do usuário no FaunaDB com o ID do cliente do Stripe
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: {
              stripe_customer_id: stripeCustomer.id
            }
          }
        )
      )

      customerId = stripeCustomer.id // Atribui o ID do cliente do Stripe ao customerId
    }



    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1NIGfMBqOfrVmcQx7sCSeaa4', quantity: 1 },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    res.setHeader('Allow', "POST")
    res.status(405).end('Method not allowed')
  }
}