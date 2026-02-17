import React from 'react'
import BannerTitle from '../BannerTitle/BannerTitle'
import BannerDescription from '../BannerDescription/BannerDescription'
import PrimaryButton from '../../PrimaryButton/PrimaryButton'
import styles from './BannerText.module.css'

const BannerText = ({ title, description, buttonText, onButtonClick, align = 'left' }) => {
  const containerClassName = `${styles.container} ${styles[align] || styles.left}`

  return (
    <div className={containerClassName}>
      <BannerTitle>{title}</BannerTitle>

      <BannerDescription>{description}</BannerDescription>

      {buttonText && (
        <div className={styles.buttonWrapper}>
          <PrimaryButton text={buttonText} onClick={onButtonClick} />
        </div>
      )}
    </div>
  )
}

export default BannerText
