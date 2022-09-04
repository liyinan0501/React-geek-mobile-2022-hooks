import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { sendValidationCode } from '@/store/actions/login'
import { Toast } from 'antd-mobile'
import { useState } from 'react'

export default function Login() {
  const dispatch = useDispatch()
  const [time, setTime] = useState(0)
  const onExtraClick = async () => {
    if (time > 0) return
    if (!/^1[3-9]\d{9}$/.test(mobile)) {
      formik.setTouched({
        mobile: true,
      })
      return
    }
    try {
      await dispatch(sendValidationCode(mobile))
      Toast.show({
        icon: 'success',
        content: 'Sent',
        maskClickable: false,
      })
      setTime(60)
      let timeId = setInterval(() => {
        // Get newest time from state using setTime((time)=>{})
        setTime((time) => {
          if (time === 1) {
            clearInterval(timeId)
          }
          return time - 1
        })
      }, 1000)
    } catch (err) {
      Toast.show({
        icon: 'fail',
        content: err.response ? err.response.data.message : 'Server Busy',
        maskClickable: false,
      })
    }
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
              maxLength={11}
            />
            {touched.mobile && errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
          </div>
          <div className="input-item">
            <Input
              name="code"
              placeholder="Code"
              extra={time === 0 ? 'Send' : time + 's'}
              onExtraClick={onExtraClick}
              value={code}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
              maxLength={6}
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
