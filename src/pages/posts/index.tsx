import Head from 'next/head'
import styles from './styles.module.scss'
// import { prismic } from '../../services/prismic';
// import { GetStaticProps } from 'next';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>15 de Junho de 2023</time>
            <strong>NOTAS DA ATUALIZAÇÃO 13.11</strong>
            <p>Você vai ganhar uma Centelha de Efeito! VOCÊ também vai ganhar uma Centelha de Efeito! TODO MUNDO VAI GANHAR UMA CENTELHA DE EFEITO!</p>
          </a>
          <a href='#'>
            <time>15 de Junho de 2023</time>
            <strong>NOTAS DA ATUALIZAÇÃO 13.11</strong>
            <p>Você vai ganhar uma Centelha de Efeito! VOCÊ também vai ganhar uma Centelha de Efeito! TODO MUNDO VAI GANHAR UMA CENTELHA DE EFEITO!</p>
          </a>
          <a href='#'>
            <time>15 de Junho de 2023</time>
            <strong>NOTAS DA ATUALIZAÇÃO 13.11</strong>
            <p>Você vai ganhar uma Centelha de Efeito! VOCÊ também vai ganhar uma Centelha de Efeito! TODO MUNDO VAI GANHAR UMA CENTELHA DE EFEITO!</p>
          </a>
        </div>
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   // const response = await prismic.getAllByType("post", {
//   //   fetch: ["post.title", "post.content"],
//   //   pageSize: 100,
//   // });

//   const response = await prismic.getAllByType('post')

//   console.log(response)

//   return {
//     props: { response }
//   }
// }