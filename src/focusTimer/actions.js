import state from './state.js';
import * as el from './elements.js';
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function ToggleRunning(){
  state.isRunning = document.documentElement.classList.toggle
  ('running')

  timer.countDown()
  sounds.buttonPressAudio.play()
}

export function reset(){
  state.isRunning = false 
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function set(){
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus
}

export function toggleMusic(){
  state.isMute = document.documentElement.classList.toggle('musicON')
  if(state.isMute) {
    sounds.coffeeAudio.play()
    return
  }

  sounds.coffeeAudio.pause()
}