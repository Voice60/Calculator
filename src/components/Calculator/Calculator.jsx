import React from 'react'
import styles from './Calculator.module.scss'

let Calculator = ({ example, answer, addNumber, addSign, clearAll, clearLast, setPercent, setDot, setAnswer }) => {

  const ButtonsObj = [
    { name: 'AC', type: 'clearAll' },
    { name: 'C', type: 'clearLast' },
    { name: '%', type: 'percent' },
    { name: '/', type: 'sign' },
    { name: '7', type: 'number' },
    { name: '8', type: 'number' },
    { name: '9', type: 'number' },
    { name: '*', type: 'sign' },
    { name: '4', type: 'number' },
    { name: '5', type: 'number' },
    { name: '6', type: 'number' },
    { name: '-', type: 'sign' },
    { name: '1', type: 'number' },
    { name: '2', type: 'number' },
    { name: '3', type: 'number' },
    { name: '+', type: 'sign' },
    { name: '0', type: 'number' },
    { name: ',', type: 'dot' },
    { name: '=', type: 'answer' },
  ]

  let handleOnClick = (el) => {
    if (el.type === 'number') {
      addNumber(el.name)
    } else if (el.type === 'sign') {
      addSign(el.name)
    } else if (el.type === 'clearAll') {
      clearAll()
    } else if (el.type === 'clearLast') {
      clearLast()
    } else if (el.type === 'percent') {
      setPercent()
    } else if (el.type === 'dot') {
      setDot()
    } else if (el.type === 'answer') {
      setAnswer()
    }
  }

  const calcButtons = ButtonsObj.map((el) => {
    return (
      <div onClick={() => { handleOnClick(el) }} className={styles.itemWrap}>
        <p className={styles.item}>{el.name}</p>
      </div>
    )
  })

  return (
    <div className={styles.calculator}>
      <div className={styles.calcTop}>
        <p className={styles.history}>{example}</p>
        <p className={styles.answer}>{answer ? answer : 0}</p>
      </div>

      <div className={styles.calcBottom}>
        {calcButtons}
      </div>
    </div>
  )
}

export default Calculator