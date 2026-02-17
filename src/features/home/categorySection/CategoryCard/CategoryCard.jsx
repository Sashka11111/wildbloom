import React from 'react'
import styles from './CategoryCard.module.css'
import ProductImage from '../../productSection/ProductImage/ProductImage'
import ProductInfo from '../../productSection/ProductInfo/ProductInfo'
import { MoveRight } from 'lucide-react'

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.card}>
      <ProductImage src={category.img} alt={category.name} />
      <ProductInfo name={category.name} />

      <button className={styles.link}>
        Переглянути більше <MoveRight size={16} strokeWidth={1} />
      </button>
    </div>
  )
}

export default CategoryCard
