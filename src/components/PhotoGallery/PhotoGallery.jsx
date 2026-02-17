import React from 'react'
import styles from './PhotoGallery.module.css'

const PhotoGallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map((img, index) => (
      <div key={index} className={styles.thumbWrapper}>
        <img src={img} alt={`Gallery ${index}`} className={styles.thumb} />
      </div>
    ))}
  </div>
)

export default PhotoGallery
