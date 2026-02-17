import React from 'react'
import styles from './ContactInfo.module.css'

const ContactInfo = () => {
  return (
    <div className={styles.contacts}>
      <p>м. Ужгород, Українська 1, 88000</p>
      <a href="tel:0968893566">(096) 889-3566</a>
      <a href="mailto:contact@wildbloom.com" className={styles.email}>
        contact@wildbloom.com
      </a>
    </div>
  )
}

export default ContactInfo
