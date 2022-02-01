input.onButtonPressed(Button.A, function () {
    if (setMessaggi == 1) {
        radio.sendString("" + (facciaFelice))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (setPassi == 1) {
        basic.showString("" + (valorePassi))
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (setPassi == 1) {
        valorePassi += 1
        basic.showString("" + (valorePassi))
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (setMessaggi == 1) {
        radio.sendString("facciaCacca")
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == facciaFelice) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == facciaTriste) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == facciaCacca) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (setMessaggi == 1) {
        radio.sendString("" + (facciaTriste))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (setPassi == 1) {
        valorePassi = 0
        basic.showString("" + (valorePassi))
    }
})
let valorePassi = 0
let setPassi = 0
let setMessaggi = 0
let facciaCacca = ""
let facciaTriste = ""
let facciaFelice = ""
radio.setGroup(5)
music.setVolume(127)
facciaFelice = "facciaFelice"
facciaTriste = "facciaTriste"
facciaCacca = "facciaCacca"
basic.showString("A o B?")
basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    setMessaggi = 1
    basic.showString("Facce")
} else if (input.buttonIsPressed(Button.B)) {
    setPassi = 1
    valorePassi = 0
    basic.showString("Passi")
} else {
    basic.showString("Non scelto")
}
basic.pause(1000)
