import React from 'react'
import styles from './Calculator.module.scss'

const Calculator = ({ example, answer, addNumber, addSign, clearAll, clearLast, setPercent, setDot, setAnswer }) => {

  const ButtonsObj = ['AC', 'C', '%', '/', '7', '8', '9', '*', '4',
    '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  const handleOnClick = (el) => {
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el)) {
      addNumber(el)
    } else if (['/', '*', '-', '+'].includes(el)) {
      addSign(el)
    } else if (el === 'AC') {
      clearAll()
    } else if (el === 'C') {
      clearLast()
    } else if (el === '%') {
      setPercent()
    } else if (el === '.') {
      setDot()
    } else if (el === '=') {
      setAnswer()
    }
  }
  let id = 0

  const calcButtons = ButtonsObj.map((el) => {
    id++
    return (
      <div key={id} onClick={() => { handleOnClick(el) }} className={styles.itemWrap}>
        <p className={styles.item}>{el}</p>
      </div>
    )
  })

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.calcTop}>
          <p className={styles.history}>{example}</p>
          <p className={styles.answer}>{answer ? answer : 0}</p>
        </div>
        <div className={styles.calcBottom}>
          {calcButtons}
        </div>
      </div>
    </div>
  )
}

export default Calculator