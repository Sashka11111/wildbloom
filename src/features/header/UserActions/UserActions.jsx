import { Search, User, ShoppingBag } from 'lucide-react'
import styles from './UserActions.module.css'

const UserActions = () => (
  <div className={styles.container}>
    <button className={styles.iconButton}>
      <Search size={20} strokeWidth={1.5} />
    </button>
    <button className={styles.iconButton}>
      <User size={20} strokeWidth={1.5} />
    </button>
    <button className={styles.iconButton}>
      <ShoppingBag size={20} strokeWidth={1.5} />
    </button>
  </div>
)
export default UserActions
