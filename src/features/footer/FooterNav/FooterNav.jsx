import React from 'react'
import styles from './FooterNav.module.css'

const FooterNav = () => {
  return (
    <div className={styles.navGroup}>
      <ul className={styles.list}>
        <li>
          <a href="/">ПРО МАЙСТЕРНЮ</a>
        </li>
        <li>
          <a href="/">КОНТАКТИ</a>
        </li>
        <li>
          <a href="/">ВІДГУКИ</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
      </ul>
      <ul className={`${styles.list} ${styles.rightList}`}>
        <li>
          <a href="/">ПОЛІТИКА ДОСТАВКИ</a>
        </li>
        <li>
          <a href="/">ПОЛІТИКА ПОВЕРНЕННЯ</a>
        </li>
        <li>
          <a href="/">МАТЕРІАЛ & ДОГЛЯД</a>
        </li>
        <li>
          <a href="/">ПОЛІТИКА САЙТУ</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterNav
