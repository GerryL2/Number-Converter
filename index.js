const lengthEl = document.getElementById("length-el")
const literEl = document.getElementById("liter-el")
const kiloEl = document.getElementById("kilo-el")
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet`
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    literEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons`
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    kiloEl.textContent = `${baseValue} kilos = ${baseValue * kiloToPound} pounds`
})