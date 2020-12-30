input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 255)
    if (input.soundLevel() == tl * 2) {
        vTime = 500
    } else if (input.soundLevel() == tl * 1.5) {
        vTime = 250
    } else {
        vTime = 100
    }
    if (motorPin == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    basic.pause(vTime)
    if (motorPin == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    basic.pause(200)
    input.setSoundThreshold(SoundThreshold.Loud, tl)
})
let vTime = 0
let strip: neopixel.Strip = null
let tl = 0
let motorPin = 0
motorPin = 0
tl = 100
input.setSoundThreshold(SoundThreshold.Loud, tl)
if (motorPin == 0) {
    strip = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
} else {
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
}
basic.forever(function () {
    strip.showBarGraph(input.soundLevel(), 255)
    basic.pause(100)
})
