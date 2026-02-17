import React from 'react'
import styles from './Copyright.module.css'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className={styles.copyright}>
      <p>© {year} WILDBLOOM. ВСІ ПРАВА ЗАХИЩЕНІ.</p>
    </div>
  )
}

export default Copyright
