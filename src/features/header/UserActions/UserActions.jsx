import { Search, User, ShoppingBag } from 'lucide-react'
import styles from './UserActions.module.css'
import { NavLink } from 'react-router-dom'

const UserActions = () => (
  <div className={styles.container}>
    <button className={styles.iconButton}>
      <Search size={20} strokeWidth={1.5} />
    </button>
    <NavLink to="/login" className={styles.iconButton}>
      <User size={20} strokeWidth={1.5} />
    </NavLink>

    <button className={styles.iconButton}>
      <ShoppingBag size={20} strokeWidth={1.5} />
    </button>
  </div>
)
export default UserActions
