import numberWork from "./number-work.js";
import formControl from "./Form-Control.js";

window.start = (event) => {
event.preventDefault()
// let x = 5;
const num1 = new numberWork(-5);
num1.displayNumber();
num1.pozOrNeg(); 

// function submitHandler() {
//     const success = Number(this.num1);
//     alert("Form submitted successfully:");
//   }

// const newForm = new formControl(7)
// // newForm.submitHandler(); 


// // submitHandler();
console.log("Sne");

}


// window.start();