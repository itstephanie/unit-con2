/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn= document.getElementById("convert-btn")
let inputEl= document.getElementById("input-el")
let lengthEl= document.getElementById("length-el")
let volumeEl= document.getElementById("volume-el")
let massEl= document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
    let totalValue= inputEl.value
    
// conversion value 
    let meterToFeet = totalValue * 3.281
    let literToGallon = totalValue * 0.264
    let kilogramToPound = totalValue * 2.204
    
// display conversion 
    lengthEl.textContent = ` ${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet `
    volumeEl.textContent = ` ${inputEl.value} liters = ${literToGallon.toFixed(3)} gallons `
    massEl.textContent = ` ${inputEl.value} kilograms = ${kilogramToPound.toFixed(3)} pounds `
}) 