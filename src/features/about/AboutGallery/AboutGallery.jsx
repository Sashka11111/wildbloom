import React from 'react'
import BannerText from '../../../components/banner/BannerText/BannerText'
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'
import styles from './AboutGallery.module.css'

import primaryImg from '../../../assets/images/about/white-cups.png'
import PrimaryImage from '../../../components/PrimaryImage/PrimaryImage'

import aboutImg1 from '../../../assets/images/about/action-hands.png'
import aboutImg2 from '../../../assets/images/about/studio-vibe.png'

const AboutGallery = () => {
  const images = [aboutImg1, aboutImg2]
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <BannerText
            title="Про нас"
            description="Наша історія почалася з любові до дикої природи та бажання створити щось справжнє. У світі, де все поспішає, ми обрали шлях терпіння — шлях ручної ліпки та вогняного гартування. Назва WildBLOOM (Дике цвітіння) — це символ краси, яка не підпорядковується правилам. Кожен відбиток пальця на глині — це історія моменту, яку ми зберігаємо для вас у кераміці."
            align="left"
          />
          <PhotoGallery images={images} />
        </div>

        <div className={styles.rightColumn}>
          <PrimaryImage src={primaryImg} alt="Стелаж з білою керамікою" />
        </div>
      </div>
    </section>
  )
}

export default AboutGallery
