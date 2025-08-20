import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";


let getName = document.getElementById("getName");
let fillform = document.getElementById("HelloSection");
let username = document.getElementById("username");
if (localStorage.getItem("username")) {
  alert("Username");
  fillform.style.display="block";
  username.textContent = localStorage.getItem("username")
  getName.style.display= "none"
} else {
  alert("No username found in localStorage.");
  getName.style.display = "block"
}
 let saveBtn = document.getElementById("saveBtn");
 saveBtn.addEventListener("click", setname)
  function setname() {
    const input = document.getElementById("inputName");
    let name = input.value;
   localStorage.setItem("username", name)
   fillform.style.display="block"
   getName.style.display="none"
    username.textContent = localStorage.getItem("username");
  }
window.start = () => {
    let x = 5;
    let y = 7;
const num1 = new NumberWork (5);
num1.displayNumber();
num1.pozOrNeg();
const newForm = new FormControl(7);
window.newForm = newForm;
}
window.start();
window.showForm = function () {
  document.getElementById("FormSection").style.display = "block"; // show form
  document.getElementById("noBtn").style.display = "none"; // hide goodbye
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};
window.showNo = function () {
  document.getElementById("noBtn").style.display = "block"; // show goodbye
  document.getElementById("FormSection").style.display = "none"; // hide form
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};