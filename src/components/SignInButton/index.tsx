import { GithubLogo, X } from "@phosphor-icons/react"
import styles from  './styles.module.scss'
import { signIn, signOut, useSession } from "next-auth/react"

export function SignInBUtton() {
  const { data: session } = useSession()

  console.log(session)

  return session ? (
    <button 
      className={styles.signInButton} 
      type="button"
      onClick={() => signOut()}
    >
      <GithubLogo color="#04d361"/>
      {session.user.name}
      <X color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      className={styles.signInButton} 
      type="button"
      onClick={() => signIn('github')}
    >
    <GithubLogo color="#eba417"  />
    Sign in with Github
  </button>
  )
}