"use strict";

window.onload = handleOnload;

function handleOnload() {
  const calculateButtonEl = document.getElementById("calculateButton");

  calculateButtonEl.onclick = handleAddOnclick;
}

function handleAddOnclick() {
    console.log("Calculate button clicked!");
    const depositInputEl = document.getElementById("depositField");
    const interestInputEl = document.getElementById("interestRateField");
    const durationInputEl = document.getElementById("durationField");
    const totalInterestInputEl = document.getElementById("totalInterestField");
    const futureValueInputEl = document.getElementById("futureValueField");

    const deposit = Number(depositInputEl.value);
    const interest = Number(interestInputEl.value) / 100;
    const duration = Number(durationInputEl.value);

    let p = deposit;
    let r = interest;
    let n = 1; // duration is in years compounded once anually n = 1
    
    const totalEarned =
    p * Math.pow(1 + r / n, n * duration);
    const interestEarned =
    totalEarned - p;

  totalInterestInputEl.value = interestEarned.toFixed(2);
  futureValueInputEl.value = totalEarned.toFixed(2);
}