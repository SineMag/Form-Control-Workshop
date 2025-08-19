import FormControl from "./form-control.js";

// userName.addEventListener("click", () => {
//   alert("Working")
//   const userName = document.getElementById('userName');
    
//     const storingUser = document.querySelector("userName").value
//   localStorage.setItem("name", userName)  
 
//   if(userName === "userName") {
//   localStorage.getItem("userName")
//   console.log("The username is:" + userName);
  
// } else {
//   alert("No username found");
// };
  
// });

// const userNameText = document.querySelector(".userName")


// function displayUserName () {
  
//   const userNameFromStorage = localStorage.getItem("name")
//   if (userNameFromStorage) {
//     userNameText.textContent = userNameFromStorage
//   } else {
//     userNameText.textContent = "No name data in local storage"
//   }
// }

// displayUserName();
const form = document.getElementById("formSection");
const numInput = document.getElementById("numOne");
const emailInput = document.getElementById("userEmail");
const notNumberSpan = document.getElementById("notNumber");
const notEmailSpan = document.getElementById("invalidEmail");
const displayBtn = document.getElementById("displayBtn");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const byeMessage = document.getElementById("byeMessage");

// Show form when "Yes" is clicked
yesButton.addEventListener("click", () => {
  form.style.display = 'block';
  byeMessage.hidden = true;
  console.log(form.style);
  
});

// Show bye message when "No" is clicked
noButton.addEventListener("click", () => {
  form.hidden = true;
  byeMessage.hidden = false;
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Pass both number and email to the class
  const formHandler = new FormControl(numInput.value, emailInput.value);

  // Checking number
  if (formHandler.checkIsNumber()) {
    notNumberSpan.hidden = true;
    formHandler.submitNumber();
  } else {
    notNumberSpan.hidden = false;
  }

  // Checking email
  if (formHandler.validEmail()) {
    notEmailSpan.hidden = true;
  } else {
    notEmailSpan.hidden = false;
  }

  // Optional combined check
  if (formHandler.checkIsNumber() && formHandler.validEmail()) {
    console.log(" Successfully entered a number and valid email");
  } else {
    console.log(" Please enter a number and a valid email");
  }
});

// Optional "Display Input" button
displayBtn.addEventListener("click", () => {
  alert("You entered number: " + numInput.value + " and email: " + emailInput.value);
});


// window.setName = () => {
// const userName = {
//   username : userName
//}
//}


let input = document.getElementById("name");
let btn = document.getElementById("btnName");
btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let names = JSON.parse(localStorage.getItem("usernames")) || [];
    names.push(input.value);
    localStorage.setItem("usernames", JSON.stringify(names));
    alert("username is " + input.value);
  }
});
if (localStorage.usernames) {
  let names = JSON.parse(localStorage.usernames);
  alert("Usernames found: " + names.join(", "));
} else {
  alert("There is no username");
}