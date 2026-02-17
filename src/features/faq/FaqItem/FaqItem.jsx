import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import styles from './FaqItem.module.css'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{question}</span>
        <FaChevronDown className={styles.icon} />
      </button>

      <div className={styles.answerWrapper}>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqItem
