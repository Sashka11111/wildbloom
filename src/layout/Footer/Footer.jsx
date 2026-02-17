import React from 'react'
import styles from './Footer.module.css'
import FooterNav from '../../features/footer/FooterNav/FooterNav'
import ContactInfo from '../../features/footer/ContactInfo/ContactInfo'
import Copyright from '../../features/footer/Copyright/Copyright'
import Logo from '../../components/Logo/Logo'
import SocialLinks from '../../features/footer/SocialLinks/SocialLinks'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.brandColumn}>
            <Logo />
            <SocialLinks />
          </div>
          <FooterNav />
          <ContactInfo />
        </div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
