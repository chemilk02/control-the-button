input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.setBrightness(255)
    a = 0
    b = 0
    while (b < 5) {
        while (a < 5) {
            led.plot(a, b)
            a = a + 1
            basic.pause(100)
        }
        b = b + 1
        a = 0
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    a = 0
    b = 0
    led.plot(a, b)
})
input.onButtonPressed(Button.A, function () {
    led.unplot(a, b)
    a = a + 1
    led.plot(a, b)
    if (a > 4) {
        a = 0
        led.plot(a, b)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(a, b)
    b = b + 1
    led.plot(a, b)
    if (b > 4) {
        b = 0
        led.plot(a, b)
    }
})
let d = 0
let c = 0
let b = 0
let a = 0
led.setBrightness(255)
a = 0
b = 0
while (b < 5) {
    while (a < 5) {
        led.plot(a, b)
        a = a + 1
        basic.pause(100)
    }
    b = b + 1
    a = 0
    basic.pause(100)
}
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
a = 0
b = 0
led.plot(a, b)
basic.forever(function () {
    led.plot(a, b)
    if (input.lightLevel() >= 130) {
        c = randint(0, 4)
        d = randint(0, 4)
        while (!(a == c && b == d)) {
            led.plot(c, d)
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        basic.clearScreen()
        basic.showString("Good Morning")
        led.setBrightness(60)
        for (let index = 0; index < 1000; index++) {
            for (let index = 0; index < 100; index++) {
                led.plot(randint(0, 4), randint(0, 4))
                basic.pause(100)
            }
            basic.clearScreen()
        }
    }
})
