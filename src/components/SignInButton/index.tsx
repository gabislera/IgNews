import { GithubLogo, X } from "@phosphor-icons/react"
import styles from  './styles.module.scss'

export function SignInBUtton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <GithubLogo color="#04d361"/>
      Gabi Carniel
      <X color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
    <GithubLogo color="#eba417"  />
    Sign in with Github
  </button>
  )
}