import React from 'react'
import styles from './BannerTitle.module.css'

const BannerTitle = ({ children }) => <h1 className={styles.title}>{children}</h1>

export default BannerTitle
