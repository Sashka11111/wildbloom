import React from 'react'
import styles from './AboutPage.module.css'
import BannerText from '../../components/banner/BannerText/BannerText'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'
import AboutGallery from '../../features/about/AboutGallery/AboutGallery'

const AboutPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.introSection}>
          <BannerText
            title="Лямцева Олександра"
            description="Олександра Лямцева — засновниця та майстриня WildBLOOM. “Для мене кераміка — це спосіб зупинити час. Коли я працюю з глиною, я відчуваю зв'язок із корінням. Моя мета — щоб ваша улюблена чашка щоранку нагадувала вам про те, як важливо помічати красу в дрібницях”."
            align="center"
          />
        </div>
        <AboutGallery />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
