input.onButtonPressed(Button.A, function () {
    running = true
    while (running) {
        // Write the current angle to the servo
        pins.servoWritePin(AnalogPin.P1, angle)
        // Change the angle based on the increment and direction
        angle += increment * direction
        // Pause for 100 milliseconds
        basic.pause(100)
        // Reverse direction if angle goes out of bounds
        if (angle >= 90 || angle <= 0) {
            direction *= -1
        }
    }
})
function playSong () {
    // Define a list of songs
    songs = [
    music.builtInMelody(Melodies.Blues),
    music.builtInMelody(Melodies.Entertainer),
    music.builtInMelody(Melodies.Funeral),
    music.builtInMelody(Melodies.Ode),
    music.builtInMelody(Melodies.Prelude),
    music.builtInMelody(Melodies.Ringtone),
    music.builtInMelody(Melodies.Wedding),
    music.builtInMelody(Melodies.PowerUp),
    music.builtInMelody(Melodies.Birthday)
    ]
    // Randomly select and play a song from the list
    song = songs[Math.randomRange(0, songs.length - 1)]
    music.beginMelody(song, MelodyOptions.Once)
}
input.onButtonPressed(Button.AB, function () {
    // Play a basic song
    playSong()
})
input.onButtonPressed(Button.B, function () {
    // Stop the servo by breaking the loop
    running = false
    // Hold the servo at its last position
    pins.servoWritePin(AnalogPin.P1, angle)
})
input.onGesture(Gesture.Shake, function () {
    // Stop all sounds
    music.stopAllSounds()
})
let song: string[] = []
let songs: string[][] = []
let angle = 0
let running = false
let direction = 0
let increment = 0
increment = 10
// 1 for increasing angle, -1 for decreasing angle
direction = 1
running = true
