export default function () {
    let audiobg = "./sounds/audios_bg-audio.mp3"
    let audioKitchen = "./sounds/audios_kichen-timer.mp3"
    let audioButton = "./sounds/audios_button-press.wav"
    const buttonPressAudio = new Audio(audioButton)
    const kitchenTimer = new Audio(audioKitchen)
    const bgAudio = new Audio(audiobg)

    bgAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    return{
        pressButton,
        timeEnd,
        bgAudio
    }
}
