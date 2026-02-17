import React from 'react'
import styles from './Checkbox.module.css'

const Checkbox = ({ label, ...props }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      {label}
    </label>
  )
}

export default Checkbox
