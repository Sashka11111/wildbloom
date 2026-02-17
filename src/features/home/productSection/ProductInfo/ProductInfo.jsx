import React from 'react'
import styles from './ProductInfo.module.css'

const ProductInfo = ({ name, price }) => (
  <div className={styles.info}>
    <h3 className={styles.name}>{name}</h3>
    {price !== undefined && price !== null && <p className={styles.price}>{price.toFixed(2)} ГРН</p>}
  </div>
)

export default ProductInfo
