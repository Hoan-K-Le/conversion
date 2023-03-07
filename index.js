/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// DOM
const inputEl = document.getElementById('input-btn')
const btn = document.getElementById('btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

// Conversion 
const meterConversion = () => {
    lengthEl.textContent = `${inputEl.value} meters = `
    let meterToFeet = Number(inputEl.value) * 3.281
    let feetToMeter = Number(inputEl.value) / 3.281
    lengthEl.textContent += meterToFeet.toFixed(3) + ' feet |' + ` ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters`

}

const volumeConversion = () => {
    volumeEl.textContent = `${inputEl.value} liters = `
    const literToGallon = Number(inputEl.value) * 0.264
    volumeEl.textContent += literToGallon.toFixed(3) + ' gallon | ' + `${inputEl.value} gallon = ${(inputEl.value / 0.264).toFixed(3) } gallon`
}

const massConversion = () => {
    massEl.textContent = `${inputEl.value} kilos = ${Number(inputEl.value * 2.204).toFixed(3) } pounds | ${inputEl.value} pounds = ${Number(inputEl.value / 2.204).toFixed(3)} kilos`
}


btn.addEventListener('click', () => {
   meterConversion()
   volumeConversion()
   massConversion()
})