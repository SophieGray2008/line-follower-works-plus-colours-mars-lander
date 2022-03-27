function back () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 35, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 35, 67)
}
function turn_right () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 15, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 55, 67)
}
function stop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
}
function forward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 30, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 30, 67)
}
function turn_left () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 55, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 15, 67)
}
let S2 = 0
let S1 = 0
basic.showIcon(IconNames.Happy)
led.enable(true)
PCA9685.init(67, 0)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
strip.clear()
basic.forever(function () {
    S1 = pins.digitalReadPin(DigitalPin.P13)
    S2 = pins.digitalReadPin(DigitalPin.P12)
    if (S1 == 1 && S2 == 0) {
        turn_right()
    } else {
        if (S1 == 0 && S2 == 1) {
            turn_left()
        } else {
            if (S1 == 0 && S2 == 0) {
                stop()
            } else {
                forward()
            }
        }
    }
    strip.showRainbow(1, 360)
})
