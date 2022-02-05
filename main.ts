radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item.compare("U") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (item.compare("D") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (item.compare("L") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (item.compare("R") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (item.compare("0") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    } else if (item.compare("E") == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 60)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item.compare("3") == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 120)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("1") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item.compare("2") == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 220)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item.compare("4") == 0) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Happy)
SuperBit.Servo2(SuperBit.enServo.S1, 120)
