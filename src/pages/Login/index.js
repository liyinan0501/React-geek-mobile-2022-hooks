import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

export default function Login() {
  const onExtraClick = () => {
    console.log('send')
  }
  const formik = useFormik({
    initialValues: {
      mobile: '',
      code: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('Can not be empty')
        .matches(/^1[3-9]\d{9}$/, 'Not correct mobile number'),
      code: Yup.string()
        .required('Can not be empty')
        .matches(/^\d{6}$/, 'Not correct code'),
    }),

    onSubmit(values) {
      console.log(values)
    },
  })
  const {
    values: { mobile, code },
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isValid,
  } = formik

  return (
    <div className={styles.root}>
      <NavBar>Login</NavBar>
      <div className="content">
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-item">
            <Input
              name="mobile"
              placeholder="Mobile Number"
              value={mobile}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            {touched.mobile && errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
          </div>
          <div className="input-item">
            <Input
              name="code"
              placeholder="Code"
              extra="Send"
              onExtraClick={onExtraClick}
              value={code}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            {touched.code && errors.code ? (
              <div className="validate">{errors.code}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className={classNames('login-btn', { disabled: !isValid })}
            disabled={!isValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
