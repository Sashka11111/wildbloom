import React from 'react'
import styles from './InputField.module.css'

const InputField = ({ label, type, placeholder }) => (
  <div className={styles.group}>
    <label className={styles.label}>{label}</label>
    <input type={type} placeholder={placeholder} className={styles.input} />
  </div>
)

export default InputField
