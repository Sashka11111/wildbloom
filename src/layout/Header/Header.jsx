import React from 'react'
import styles from './Header.module.css'
import Logo from '../../components/Logo/Logo'
import NavLinks from '../../features/header/NavLinks/NavLinks'
import UserActions from '../../features/header/UserActions/UserActions'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <nav className={styles.navigation}>
          <NavLinks />
        </nav>

        <div className={styles.actions}>
          <UserActions />
        </div>
      </div>
    </header>
  )
}

export default Header
