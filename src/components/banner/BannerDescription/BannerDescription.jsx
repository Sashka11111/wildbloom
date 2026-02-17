import React from 'react'
import styles from './BannerDescription.module.css'

const BannerDescription = ({ children }) => <p className={styles.description}>{children}</p>

export default BannerDescription
