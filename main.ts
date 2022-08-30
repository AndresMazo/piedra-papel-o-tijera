let random = 0
input.onButtonPressed(Button.A, function () {
    random = randint(1, 3)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(1000)
    if (random == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (random == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (random == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
