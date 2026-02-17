import styles from './SectionLink.module.css'
import { ArrowRight } from 'lucide-react'

const SectionLink = (props) => (
  <button className={styles.moreBtn}>
    {props.text}
    <ArrowRight className={styles.icon} size={20} strokeWidth={1.5} />
  </button>
)
export default SectionLink
