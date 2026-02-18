import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'
import SectionLink from '../../../../components/SectionLink/SectionLink'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'

import { useProducts } from '../../../../hooks/useProducts'

const ProductGrid = () => {
  const { data: products, isLoading, isError } = useProducts()

  if (isLoading) return <div className={styles.loading}>Завантаження каталогу...</div>
  if (isError) return <div className={styles.error}>Помилка завантаження товарів</div>

  return (
    <section className={styles.section}>
      <SectionTitle>КАТАЛОГ ВИРОБІВ</SectionTitle>
      <div className={styles.grid}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.footer}>
        <SectionLink text="ПЕРЕГЛЯНУТИ ІНШІ" />
      </div>
    </section>
  )
}

export default ProductGrid
