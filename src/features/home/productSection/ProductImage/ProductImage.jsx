import React from 'react'
import styles from './ProductImage.module.css'

const ProductImage = ({ src, alt }) => (
  <div className={styles.wrapper}>
    <img src={src} alt={alt} className={styles.image} />
  </div>
)

export default ProductImage
