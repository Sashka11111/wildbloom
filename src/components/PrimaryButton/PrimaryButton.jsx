import styles from './PrimaryButton.module.css'

const PrimaryButton = (props) => <button className={styles.button}>{props.text}</button>
export default PrimaryButton
