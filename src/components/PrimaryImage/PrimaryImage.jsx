import React from 'react'
import styles from './PrimaryImage.module.css'

const PrimaryImage = ({ src, alt, objectFit = 'cover', className = '' }) => {
  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      <img src={src} alt={alt} style={{ objectFit }} className={styles.image} />
    </div>
  )
}

export default PrimaryImage
