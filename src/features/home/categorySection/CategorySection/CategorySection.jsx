import React from 'react'
import styles from './CategorySection.module.css'
import SectionLink from '../../../../components/SectionLink/SectionLink'
import cupsCatImg from '../../../../assets/images/categories/tableware.png'
import bowlsCatImg from '../../../../assets/images/categories/plates.png'
import decorCatImg from '../../../../assets/images/categories/vases.png'
import masterclassCatImg from '../../../../assets/images/categories/decor.png'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import CategoryCard from '../CategoryCard/CategoryCard'

const categories = [
  { id: 1, name: 'ЧАШКИ', img: cupsCatImg },
  { id: 2, name: 'МИСКИ ТА ТАРІЛКИ', img: bowlsCatImg },
  { id: 3, name: 'ДЕКОР ДЛЯ ДОМУ', img: decorCatImg },
  { id: 4, name: 'МАЙСТЕРКЛАС', img: masterclassCatImg },
]

const CategorySection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SectionTitle>КУПУВАТИ ЗА КАТЕГОРІЯМИ</SectionTitle>

        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className={styles.footer}>
          <SectionLink text="ПЕРЕГЛЯНУТИ ІНШІ" />
        </div>
      </div>
    </section>
  )
}

export default CategorySection
