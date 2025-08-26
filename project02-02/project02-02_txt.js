/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Amit Jaggernauth
      Date:   08/23/2025

      Filename: project02-02.js
 */
 
function verifyForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const allFilled = name && email && phone;
  window.alert(allFilled ? "Thank you!" : "Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", verifyForm);