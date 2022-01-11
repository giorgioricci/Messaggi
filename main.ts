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
    valorePassi += 1
    if (setPassi == 1) {
        basic.showString("" + (valorePassi))
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (setMessaggi == 1) {
        radio.sendString("" + (facciaCacca))
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
let facciaTriste = ""
let facciaCacca = ""
let facciaFelice = ""
let valorePassi = 0
let setPassi = 0
let setMessaggi = 0
radio.setGroup(5)
basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    setMessaggi = 1
    basic.showString("Facce")
} else if (input.buttonIsPressed(Button.B)) {
    setPassi = 1
    valorePassi = 0
    basic.showString("Passi")
} else {
    basic.showString("Premi Pulsante")
}
basic.pause(1000)
