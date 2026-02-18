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
import { useProducts } from '../../../../hooks' //

const productImages = {
  1: mugImg,
  2: plateFlatImg,
  3: mugMinimalImg,
  4: candleHolderImg,
  5: bowlTerracottaImg,
  6: vaseTallImg,
  7: sculptureOrganicImg,
  8: mugsStackedImg,
}

const ProductGrid = () => {
  const { data: products, isLoading, isError } = useProducts()

  if (isLoading) return <p>Завантаження...</p>
  if (isError) return <p>Помилка завантаження продуктів</p>

  return (
    <section className={styles.section}>
      <SectionTitle>КАТАЛОГ ВИРОБІВ</SectionTitle>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              img: productImages[product.id],
            }}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <SectionLink text="ПЕРЕГЛЯНУТИ ІНШІ" />
      </div>
    </section>
  )
}

export default ProductGrid
