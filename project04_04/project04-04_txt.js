/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Amit Jaggernauth   
      Date:   9/24/2025

      Filename: project04-04.js
*/
"use strict";
// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener("change", runTheRegister);
billBox.addEventListener("change", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
   changeBox.value = 0;
   document.getElementById("bill20").innerHTML = 0;
   document.getElementById("bill10").innerHTML = 0;
   document.getElementById("bill5").innerHTML = 0;
   document.getElementById("bill1").innerHTML = 0;
   document.getElementById("coin25").innerHTML = 0;
   document.getElementById("coin10").innerHTML = 0;
   document.getElementById("coin5").innerHTML = 0;
   document.getElementById("coin1").innerHTML = 0;
   document.getElementById("warning").innerHTML = "";
}

// Function to run the cash register
function runTheRegister() {
   zeroTheRegister();
   
   try {
      let cashValue = parseFloat(cashBox.value);
      let billValue = parseFloat(billBox.value);

      if (isNaN(cashValue) || isNaN(billValue)) {
         throw new Error("Please enter valid numbers.");
      }

      let changeValue = cashValue - billValue;

      if (changeValue < 0) {
         throw new Error("Cash amount doesn’t cover the bill");
      }

      changeBox.value = formatCurrency(changeValue);
      calcChange(changeValue);

   } catch (err) {
      document.getElementById("warning").innerHTML = err.message;
   }
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
   let cents = Math.round(changeValue * 100); // convert to cents

   let bill20Amt = determineCoin(cents, 2000);
   document.getElementById("bill20").innerHTML = bill20Amt;
   cents -= bill20Amt * 2000;

   let bill10Amt = determineCoin(cents, 1000);
   document.getElementById("bill10").innerHTML = bill10Amt;
   cents -= bill10Amt * 1000;

   let bill5Amt = determineCoin(cents, 500);
   document.getElementById("bill5").innerHTML = bill5Amt;
   cents -= bill5Amt * 500;

   let bill1Amt = determineCoin(cents, 100);
   document.getElementById("bill1").innerHTML = bill1Amt;
   cents -= bill1Amt * 100;

   let coin25Amt = determineCoin(cents, 25);
   document.getElementById("coin25").innerHTML = coin25Amt;
   cents -= coin25Amt * 25;

   let coin10Amt = determineCoin(cents, 10);
   document.getElementById("coin10").innerHTML = coin10Amt;
   cents -= coin10Amt * 10;

   let coin5Amt = determineCoin(cents, 5);
   document.getElementById("coin5").innerHTML = coin5Amt;
   cents -= coin5Amt * 5;

   let coin1Amt = cents; // whatever remains
   document.getElementById("coin1").innerHTML = coin1Amt;
}








/* ================================================================= */

// Function to determine the largest whole number of currency units that 
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
   // The parseInt() function returns the integer value of the ratio
   return parseInt(cashValue/currencyUnit);
}

 // Function to display a numeric value as a text string in the format ##.## 
 function formatCurrency(value) {
    return value.toFixed(2);
 }