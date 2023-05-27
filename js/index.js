// DOM
// Document Object Model
// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais perfomático
// SEM ALTERAR suas funcionalidades
// Event-driven | Orientado a eventos
// programação imperativa | Programação da ordem, passo a passo.
// callback
// Recursão quando uma função ela chama ela mesma.

//Adicionar um evento ao ouvido
import Sound from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import { buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay } from "./elements.js"
    
    
const sound = Sound()

sound.bgAudio.play()

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({buttonPlay, buttonPause, buttonSet, buttonStop, buttonSoundOff, buttonSoundOn})
const timer = Timer({minutesDisplay, secondsDisplay, minutes, resetControls: controls.reset})

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()

})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
    
})

buttonSoundOn.addEventListener('click', function() {
    controls.SoundOn()
    sound.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', function() {
    controls.SoundOff()
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
   
    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
    timer.updateMinutes(newMinutes)
})