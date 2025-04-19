// login.js

// You can change these values to test
const validUsername = "admin";
const validPassword = "1234";

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === validUsername && password === validPassword) {
      alert("✅ Login successful!");
      // You could redirect to another page like this:
      // window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password!");
    }

    // Optional: clear the form
    form.reset();
  });
});
