input.onButtonPressed(Button.A, function () {
    if (inputMess == 1) {
        radio.sendString("" + (face1))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (inputPassi == 1) {
        basic.showString("" + (valorePassi))
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    valorePassi += 1
    if (inputPassi == 1) {
        basic.showString("" + (valorePassi))
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (inputMess == 1) {
        let face3 = 0
        radio.sendString("" + (face3))
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
    if (receivedString == face1) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    if (inputMess == 1) {
        let face2 = 0
        radio.sendString("" + (face2))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (inputPassi == 1) {
        valorePassi = 0
        basic.showString("" + (valorePassi))
    }
})
let face1 = ""
let valorePassi = 0
let inputPassi = 0
let inputMess = 0
radio.setGroup(5)
basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    inputMess = 1
    basic.showString("Facce")
} else if (input.buttonIsPressed(Button.B)) {
    inputPassi = 1
    valorePassi = 0
    basic.showString("Passi")
} else {
    basic.showString("Premi Pulsante")
}
basic.pause(1000)
