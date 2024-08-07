import state from './state.js';
import * as el from './elements.js';
import * as timer from './timer.js'

export function reset(){
  state.isRunning = false 
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}