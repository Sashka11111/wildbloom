import React, { useState } from 'react'
import AuthImage from '../AuthImage/AuthImage'
import InputField from '../../../components/InputField/InputField'
import Checkbox from '../../../components/Checkbox/Checkbox'
import AuthFooter from '../AuthFooter/AuthFooter'
import styles from './AuthCard.module.css'

import { useAuth } from '../../../hooks/useAuth'

const AuthCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate: login, isPending } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <AuthImage />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Авторизація</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <InputField
            label="Email"
            type="email"
            placeholder="mail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Пароль"
            type="password"
            placeholder="••••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.actions}>
            <Checkbox label="Запам'ятати" />
            <a href="/" className={styles.forgot}>
              Забули пароль?
            </a>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isPending}>
            {isPending ? 'Вхід...' : 'Вхід'}
          </button>
        </form>
        <AuthFooter />
      </div>
    </div>
  )
}

export default AuthCard
