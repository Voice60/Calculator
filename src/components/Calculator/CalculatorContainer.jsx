import React from 'react'
import { connect } from 'react-redux'
import { addNumber, addSign, setAnswer, clearAll, clearLast, setDot, setPercent } from '../../redux/calculatorReducer'
import Calculator from './Calculator'

let CalculatorContainer = ({ example, answer, addNumber, addSign, clearAll, clearLast, setPercent, setDot, setAnswer }) => {
  return (
    <Calculator example={example}
      answer={answer}
      addNumber={addNumber}
      addSign={addSign}
      clearAll={clearAll}
      clearLast={clearLast}
      setPercent={setPercent}
      setDot={setDot}
      setAnswer={setAnswer} />
  )
}

const mstp = (state) => {
  return {
    example: state.calc.example,
    answer: state.calc.answer,
  }
}

const mdtp = { addNumber, addSign, clearAll, clearLast, setPercent, setDot, setAnswer }

export default connect(mstp, mdtp)(CalculatorContainer)