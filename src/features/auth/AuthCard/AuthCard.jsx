import React from 'react'
import AuthImage from '../AuthImage/AuthImage'
import InputField from '../../../components/InputField/InputField'
import Checkbox from '../../../components/Checkbox/Checkbox'
import AuthFooter from '../AuthFooter/AuthFooter'
import styles from './AuthCard.module.css'

const AuthCard = () => (
  <div className={styles.card}>
    <div className={styles.imageSection}>
      <AuthImage />
    </div>
    <div className={styles.formSection}>
      <h2 className={styles.title}>Авторизація</h2>
      <form className={styles.form}>
        <InputField label="Email" type="email" placeholder="mail@gmail.com" />
        <InputField label="Пароль" type="password" placeholder="••••••••••••••" />

        <div className={styles.actions}>
          <Checkbox label="Запам'ятати" />
          <a href="/" className={styles.forgot}>
            Забули пароль?
          </a>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Вхід
        </button>
      </form>
      <AuthFooter />
    </div>
  </div>
)

export default AuthCard
