import React from 'react'
import styles from './SocialLinks.module.css'
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const SocialLinks = () => {
  return (
    <div className={styles.socials}>
      <a href="/" className={styles.circle}>
        <FaLinkedinIn />
      </a>
      <a href="/" className={styles.circle}>
        <FaFacebookF />
      </a>
      <a href="/" className={styles.circle}>
        <FaXTwitter />
      </a>
    </div>
  )
}

export default SocialLinks
