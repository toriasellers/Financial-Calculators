"use strict";

window.onload = handleOnload;

function handleOnload(){
    const calculateButtonEl = document.getElementById("calculateButton");

    calculateButtonEl.onclick = handleAddOnclick;
}

function handleAddOnclick(){
    console.log("Calculate button clicked");
    const principalInputEl = document.getElementById("principalField");
    const interestInputEl = document.getElementById("interestField");
    const durationInputEl = document.getElementById("durationField");
    const paymentInputEl = document.getElementById("paymentField");
    const totalInputEl = document.getElementById("totalField");


    const principal = Number(principalInputEl.value);
    const interest = Number(interestInputEl.value) /100;
    const duration = Number(durationInputEl.value);

    let r = interest / 12;
    let n = duration * 12;

    const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalInterest = (monthlyPayment * n) - principal;
    
    paymentInputEl.value = monthlyPayment.toFixed(2);
    totalInputEl.value = totalInterest.toFixed(2);
}