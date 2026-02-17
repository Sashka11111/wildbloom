import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import FaqList from '../../features/faq/FaqList/FaqList'
import styles from './FaqPage.module.css'

const FaqPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <FaqList />
      <Footer />
    </div>
  )
}

export default FaqPage
