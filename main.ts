let A = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    if (0 == B) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    A += -1
    basic.showNumber(A)
})
input.onGesture(Gesture.Shake, function () {
    if (0 == B) {
        B = A
        A = 0
        basic.showNumber(B)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
