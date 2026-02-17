import styles from './NavLinks.module.css'

const NavLinks = () => (
  <ul className={styles.list}>
    <li>
      <a href="/">ГОЛОВНА</a>
    </li>
    <li>
      <a href="/about">ПРО МАЙСТЕРНЮ</a>
    </li>
    <li>
      <a href="/faq">FAQ</a>
    </li>
  </ul>
)
export default NavLinks
