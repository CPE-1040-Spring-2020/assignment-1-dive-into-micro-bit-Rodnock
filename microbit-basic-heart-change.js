let iconHeart: boolean = true // assignment: assign a value to a variable

input.onButtonPressed(Button.A, function () {
    iconHeart = !iconHeart
})

basic.forever(function () {

    if (iconHeart) {
        basic.showIcon(IconNames.Heart)
    }

    else {
        basic.showIcon(IconNames.StickFigure)
    }

    // basic.showIcon(IconNames.Heart)

    basic.pause(100)

    basic.clearScreen()

})
