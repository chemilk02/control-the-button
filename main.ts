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
let b = 0
let a = 0
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
