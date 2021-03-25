import React from 'react'
import styles from './Calculator.module.scss'

let Calculator = ({ example, answer, }) => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calcTop}>
        <p className={styles.history}>1</p>
        <p className={styles.answer}>2</p>
      </div>

      <div className={styles.calcBottom}>
        <div className={styles.itemWrap}>
          <p className={styles.item}>AC</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>C</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>%</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>/</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>7</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>8</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>9</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>*</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>4</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>5</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>6</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>-</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>1</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>2</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>3</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>+</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>0</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>.</p>
        </div>
        <div className={styles.itemWrap}>
          <p className={styles.item}>=</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Calculator