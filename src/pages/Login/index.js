import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'

export default function Login() {
  const onExtraClick = () => {
    console.log('send')
  }

  return (
    <div className={styles.root}>
      <NavBar>Login</NavBar>
      <div className="content">
        <h3>Sign in</h3>
        <form>
          <div className="input-item">
            <Input placeholder="Phone Number" />
            {/* <div className="validate">phone number validation</div> */}
          </div>
          <div className="input-item">
            <Input
              placeholder="Code"
              extra="Send"
              onExtraClick={onExtraClick}
            />
            {/* <div className="validate">code validation</div> */}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
