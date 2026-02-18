import React from 'react'
import styles from './FooterNav.module.css'
import { NavLink } from 'react-router-dom'

const FooterNav = () => {
  return (
    <div className={styles.navGroup}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" end>
            ГОЛОВНА
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ПРО МАЙСТЕРНЮ</NavLink>
        </li>
        <li>
          <NavLink to="/">ВІДГУКИ</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </ul>
      <ul className={`${styles.list} ${styles.rightList}`}>
        <li>
          <NavLink to="/">ПОЛІТИКА ДОСТАВКИ</NavLink>
        </li>
        <li>
          <NavLink to="/">ПОЛІТИКА ПОВЕРНЕННЯ</NavLink>
        </li>
        <li>
          <NavLink to="/">МАТЕРІАЛ & ДОГЛЯД</NavLink>
        </li>
        <li>
          <NavLink to="/">ПОЛІТИКА САЙТУ</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default FooterNav
