// Variables for DOM manipulation

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

// Eventlistener

convertBtn.addEventListener('click', renderDom)


// Render function
function renderDom() {
    
  let feetResult = (inputEl.value * 3.281).toFixed(3)
  let meterResult = (inputEl.value *(1/3.281)).toFixed(3)

  let literResult = (inputEl.value * 0.264).toFixed(3)
  let gallonResult = (inputEl.value *(1/0.264)).toFixed(3)

  let kiloResult = (inputEl.value * 2.204).toFixed(3)
  let poundResult = (inputEl.value *(1/2.204)).toFixed(3)

  lengthEl.textContent = templateString("meter","feet", inputEl.value,feetResult,meterResult)
  volumeEl.textContent = templateString("liters","gallons",inputEl.value,literResult,gallonResult)
  massEl.textContent = templateString("kilos","poundss",inputEl.value,kiloResult,poundResult)
}

function templateString(unitFrom,unitTo,value,result1, result2){
  return `${value} ${unitFrom} = ${result1} ${unitTo} | ${value} ${unitTo} = ${result2} ${unitFrom} `
}