import NavBar from '@/components/NavBar'
import styles from './index.module.scss'

export default function Login() {
  return (
    <div className={styles.root}>
      <NavBar>Login</NavBar>
      <div className="content">
        <h3>Sign in</h3>
        <form>
          <input type="text" />
          <input type="text" />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
