import styles from './NavLinks.module.css'
import { NavLink } from 'react-router-dom'
const NavLinks = () => (
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
      <NavLink to="/faq">FAQ</NavLink>
    </li>
  </ul>
)
export default NavLinks
