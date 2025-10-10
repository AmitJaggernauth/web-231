"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Amit Jaggernauth
      Date:   10/10/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const feedback = document.getElementById("feedback");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Step 4

    const pwd = document.getElementById("pwd").value;

    // Step 5: Regular expressions
    const regex1 = /[A-Z]/;        // Uppercase A–Z
    const regex2 = /\d/;           // Single digit
    const regex3 = /[!$#%]/;       // Symbols !$#%

    // Step 6: Validation logic
    if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters.";
    } else if (!regex1.test(pwd)) {
      feedback.textContent = "Your password must include an uppercase letter.";
    } else if (!regex2.test(pwd)) {
      feedback.textContent = "Your password must include a number.";
    } else if (!regex3.test(pwd)) {
      feedback.textContent = "Your password must include one of the following: !$#%.";
    } else {
      signupForm.submit(); // Submit if all checks pass
    }
  });
});
}
);