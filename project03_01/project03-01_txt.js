/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Amit Jaggernauth
      Date:   9/7/2025

      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 // Grab all checkboxes with the menuItems class
const menuItems = document.getElementsByClassName("menuItems");

// Wire up each checkbox to recalculate on click
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Calculate order total and display it
function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Utility: format a number as US dollars
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

