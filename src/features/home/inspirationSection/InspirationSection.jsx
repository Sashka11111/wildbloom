import React from 'react'
import styles from './InspirationSection.module.css'

import shelfImg from '../../../assets/images/inspiration/shelf.png'
import inspo1 from '../../../assets/images/inspiration/mug-detail.png'
import inspo2 from '../../../assets/images/inspiration/texture-cup.png'
import inspo3 from '../../../assets/images/inspiration/two-cups.png'

import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'
import PrimaryImage from '../../../components/PrimaryImage/PrimaryImage'
import BannerText from '../../../components/banner/BannerText/BannerText'

const InspirationalSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <PrimaryImage src={shelfImg} alt="Стелаж з керамікою" />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.contentGroup}>
            <PhotoGallery images={[inspo1, inspo2, inspo3]} />

            <BannerText
              title="Ваше натхнення"
              description="Ми перетворюємо шматок глини на маніфест справжності у світі масового виробництва. Кожна чашка чи тарілка — це застигла мить натхнення, створена для ваших ранкових ритуалів. Шукайте магію в деталях, адже саме з них складається гармонія простору."
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InspirationalSection
