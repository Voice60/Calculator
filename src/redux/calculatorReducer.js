//consts
const ADD_SIGN = 'ADD_SIGN'
const ADD_NUMBER = 'ADD_NUMBER'
const CLEAR_ALL = 'CLEAR_ALL'
const CLEAR_LAST = 'CLEAR_LAST'
const SET_PERCENT = 'SET_PERCENT'
const SET_DOT = 'SET_DOT'
const SET_ANSWER = 'SET_ANSWER'

let InitialState = {
  example: '',
  answer: null,
  number1: '',
  number2: '',
  sign: null,
}

//reducer
const calculatorReducer = (state = InitialState, action) => {
  let answer = (n1, sign, n2) => {
    let totalAnswer = ''
    if (n1 === '') {
      totalAnswer = 0
    } else if (n2 === '' || sign == null) {
      totalAnswer = Number(n1)
    } else if (sign === '-') {
      totalAnswer = Number(n1) - Number(n2)
    } else if (sign === '+') {
      totalAnswer = Number(n1) + Number(n2)
    } else if (sign === '*') {
      totalAnswer = Number(n1) * Number(n2)
    } else if (sign === '/') {
      totalAnswer = Number(n1) / Number(n2)
      if (!Number.isFinite(totalAnswer)) {
        totalAnswer = 0
      }
    }
    let stringenAnswer = String(totalAnswer)
    if (stringenAnswer.includes('.')) {
      if (stringenAnswer.split('.')[1].length > 2) {
        return String(totalAnswer.toFixed(2))
      };
    }
    return stringenAnswer
  }
  switch (action.type) {
    case ADD_NUMBER: {
      if (state.sign === null) {
        let newN1 = state.number1 + action.n
        return {
          ...state,
          number1: newN1,
          example: newN1,
          answer: answer(newN1, state.sign, state.number2)
        }
      } else if (state.sign !== null) {
        let newN2 = state.number2 + action.n
        return {
          ...state,
          number2: newN2,
          example: state.number1 + state.sign + newN2,
          answer: answer(state.number1, state.sign, newN2)
        }
      }
      break
    }
    case ADD_SIGN: {
      if (state.sign === null && state.number1 === '') {
        let newN1 = '0'
        return {
          ...state,
          number1: newN1,
          sign: action.s,
          example: '0' + action.s,
          answer: answer(newN1, action.s, '')
        }
      }
      else if (state.sign === null && state.number1 !== '') {
        let newN1 = state.number1
        state.number1.endsWith('.') && (newN1 = state.number1.slice(0, -1))
        return {
          ...state,
          sign: action.s,
          example: newN1 + action.s,
          answer: answer(newN1, action.s, ''),
          number1: newN1
        }
      } else if (state.sign !== null) {
        let answerN = answer(state.number1, state.sign, state.number2)
        return {
          ...state,
          number1: answerN,
          example: answerN + action.s,
          answer: answerN,
          number2: '',
          sign: action.s
        }
      }
      break
    }
    case CLEAR_ALL: {
      return {
        ...InitialState
      }
    }
    case CLEAR_LAST: {
      if (state.number2 !== '') {
        let newN2 = state.number2.slice(0, -1)
        return {
          ...state,
          number2: newN2,
          example: state.example.slice(0, -1),
          answer: answer(state.number1, state.sign, newN2)
        }
      } else if (state.sign !== null) {
        return {
          ...state,
          sign: null,
          example: state.example.slice(0, -1),
          answer: answer(state.number1, state.sign, state.number2)
        }
      } else  {
        let slicedNumber = state.number1.slice(0, -1)
        return {
          ...state,
          number1: slicedNumber,
          example: slicedNumber,
          answer: answer(slicedNumber, state.sign, state.number2)
        }
      } 
    }
    case SET_PERCENT: {
      let totalNumber = String(answer(state.number1, state.sign, state.number2) / 100)
      return {
        ...state,
        number1: totalNumber,
        sign: null,
        number2: '',
        answer: totalNumber,
        example: totalNumber
      }
    }
    case SET_DOT: {
      if (state.number2 !== '' && !state.number2.includes('.')) {
        return {
          ...state,
          number2: state.number2 + '.',
          example: state.example + '.'
        }
      } else if (state.number1 !== '' && !state.number1.includes('.') && state.sign === null) {
        return {
          ...state,
          number1: state.number1 + '.',
          example: state.example + '.'
        }
      } else if (state.number1 === '') {
        return {
          ...state,
          number1: state.number1 + '0.',
          example: state.example + '0.'
        }
      } else if (state.number2 === '' && state.sign !== null) {
        return {
          ...state,
          number2: state.number2 + '0.',
          example: state.example + '0.'
        }
      }
      
      else {
        return {
          ...state
        }
      }
    }
    case SET_ANSWER: {
      let totalNumber = answer(state.number1, state.sign, state.number2)
      return {
        ...state,
        answer: totalNumber,
        number1: totalNumber,
        number2: '',
        sign: null,
        example: totalNumber
      }
    }
    default: return state
  }
}

//actions
export const addNumber = (n) => ({ type: ADD_NUMBER, n })
export const addSign = (s) => ({ type: ADD_SIGN, s })
export const clearAll = () => ({ type: CLEAR_ALL })
export const clearLast = () => ({ type: CLEAR_LAST })
export const setPercent = () => ({ type: SET_PERCENT })
export const setDot = () => ({ type: SET_DOT })
export const setAnswer = () => ({ type: SET_ANSWER })


export default calculatorReducer

