import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductInfo from '../ProductInfo/ProductInfo'
import styles from './ProductCard.module.css'
import AddToCartButton from '../../../../components/AddToCartButton/AddToCartButton'

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <ProductImage src={product.img} alt={product.name} />
      <ProductInfo name={product.name} price={product.price} />
      <AddToCartButton />
    </div>
  )
}

export default ProductCard
