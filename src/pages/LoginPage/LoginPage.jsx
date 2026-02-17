import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import AuthCard from '../../features/auth/AuthCard/AuthCard'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.blob} />
        <div className={styles.container}>
          <AuthCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage
