import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

import mugImg from '../../../../assets/images/products/mug.png'
import mugMinimalImg from '../../../../assets/images/products/mug-minimal.png'
import plateFlatImg from '../../../../assets/images/products/plate-flat.png'
import bowlTerracottaImg from '../../../../assets/images/products/bowl-terracotta.png'
import mugsStackedImg from '../../../../assets/images/products/mugs-stacked.png'
import vaseTallImg from '../../../../assets/images/products/vase-tall.png'
import candleHolderImg from '../../../../assets/images/products/candle-holder.png'
import sculptureOrganicImg from '../../../../assets/images/products/sculpture-organic.png'
import SectionLink from '../../../../components/SectionLink/SectionLink'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'

const products = [
  { id: 1, name: 'ЧАШКА «ДЮНА»', price: 90.0, img: mugImg },
  { id: 2, name: 'ТАРІЛКА «РАННЄ ЛІТО»', price: 78.0, img: plateFlatImg },
  { id: 3, name: 'ЧАШКА «ПУСТЕЛЯ»', price: 235.0, img: mugMinimalImg },
  { id: 4, name: 'ТРИМАЧ ОРБІТИ', price: 175.0, img: candleHolderImg },
  { id: 5, name: 'ГАЛА-ЧАШКА', price: 90.0, img: bowlTerracottaImg },
  { id: 6, name: 'ВЕЛИКА ПЛАСТИНА ДЛЯ ҐРУНТУ', price: 112.0, img: vaseTallImg },
  { id: 7, name: 'СВІЧНИК «ВСЕСВІТ» (КОМПЛЕКТ)', price: 200.0, img: sculptureOrganicImg },
  { id: 8, name: 'SPACE HOLDER', price: 200.0, img: mugsStackedImg },
]

const ProductGrid = () => {
  return (
    <section className={styles.section}>
      <SectionTitle>КАТАЛОГ ВИРОБІВ</SectionTitle>
      <div className={styles.grid}>
        {products.map((product) => (
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
