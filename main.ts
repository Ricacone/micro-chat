input.onButtonPressed(Button.A, function () {
    radio.sendString("Ola pessoal")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Olá")
})
radio.setGroup(3)
