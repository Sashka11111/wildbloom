import React from 'react'
import styles from './AuthFooter.module.css'

const AuthFooter = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>
        Ще не зареєстровані? <a href="/">Створити акаунт</a>
      </p>
    </div>
  )
}

export default AuthFooter
