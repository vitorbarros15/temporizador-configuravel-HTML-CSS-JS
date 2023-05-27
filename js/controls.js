export default function Controls({buttonPlay, buttonPause, buttonSet, buttonStop, buttonSoundOff, buttonSoundOn}) {
    function play() {
        buttonPlay.classList.add('hide')
        buttonSet.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }  

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
    }

    function SoundOn() {
        buttonSoundOff.classList.remove('hide')
        buttonSoundOn.classList.add('hide')
    }

    function SoundOff() {
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
    }

    function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

    return newMinutes

    }

    return {
        reset,
        play,
        pause,
        SoundOn,
        SoundOff,
        getMinutes
    }
}