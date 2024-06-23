// Your code goes here
document.addEventListener("DOMContentLoaded", (event) => {
  const reponseElement = document.getElementById("computer-response");
  const formElement = document.getElementById("name-form");
  const inputElement = document.getElementById("user-input");

  // I am listing the enemies
  const enemies = ["enemy1", "enemy2", "enemy3"];

  // adding the event listerned to the web form
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = inputElement.value.trim().toLowerCase();
    if (enemies.includes(userName)) {
      reponseElement.textContent = "Please Go Away!";
    } else {
      reponseElement.textContent = `Hello, ${
        userName.charAt(0).toUpperCase() + userName.slice(1)
      }! Welcome to the site.`;
    }
  });
});
