import css_styles from '../_module/scss/_.module.scss'
import var_styles from '../_module/scss/_var.module.scss'
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }

  decreaseTimer() {
    this.secondsPassed -= 1
  }

  resetTimer() {
    this.secondsPassed = 0
  }
}


const Demo = observer(() => {
  const [timer] = useState(() => new Timer()) // See the Timer definition above.
  return (
    <>
      <span>Seconds passed: {timer.secondsPassed}</span>
      <br />
      <button onClick={() => timer.increaseTimer()}>increaseTimer</button>
      <button onClick={() => timer.decreaseTimer()}>decreaseTimer</button>
      <button onClick={() => timer.resetTimer()}>resetTimer</button>
    </>
  )
}
)

export default Demo