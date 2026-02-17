import React from 'react'
import styles from './CollectionSection.module.css'

import mainImg from '../../../assets/images/ui/citrus-bowl.png'
import thumb1 from '../../../assets/images/ui/citrus-bowl-first.png'
import thumb2 from '../../../assets/images/ui/citrus-bowl-second.png'
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'
import PrimaryImage from '../../../components/PrimaryImage/PrimaryImage'
import BannerText from '../../../components/banner/BannerText/BannerText'

const CollectionSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <BannerText
            title="Sunrise"
            description="“Sunrise” передає тепло і яскравість ранкового світла, а форми випромінюють енергію і оновлення. Пориньте у освіжаючу красу лімітованої колекції “Sunrise”."
            buttonText="ВІДКРИЙТЕ ДЛЯ СЕБЕ КОЛЕКЦІЮ SUNRISE"
          />
          <PhotoGallery images={[thumb1, thumb2]} />
        </div>
        <div className={styles.rightColumn}>
          <PrimaryImage src={mainImg} alt="Колекція Sunrise" />
        </div>
      </div>
    </section>
  )
}

export default CollectionSection
