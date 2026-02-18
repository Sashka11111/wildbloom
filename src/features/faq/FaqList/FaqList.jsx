import React from 'react'
import FaqItem from '../FaqItem/FaqItem'
import styles from './FaqList.module.css'
import BannerText from '../../../components/banner/BannerText/BannerText'
import { useFaqs } from '../../../hooks/useFaqs'

const FaqList = () => {
  const { data: faqData, isLoading, isError } = useFaqs()

  if (isLoading) return <p>Завантаження питань...</p>
  if (isError) return <p>Не вдалося отримати FAQ</p>

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <BannerText title="FAQs" align="center" />
        <div className={styles.list}>
          {faqData?.map((item, index) => (
            <FaqItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqList
