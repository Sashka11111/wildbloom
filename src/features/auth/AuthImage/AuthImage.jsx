import React from 'react'
import styles from './AuthImage.module.css'
import authImg from '../../../assets/images/ui/auth-sidebar-pots.png'

const AuthImage = () => (
  <div className={styles.imageContainer}>
    <img src={authImg} alt="Ceramic cups" className={styles.image} />
  </div>
)

export default AuthImage
