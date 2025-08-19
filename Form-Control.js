export default class FormControl {
  constructor(num1, email) {
    this.num1 = num1;
    this.email = email;
    // this.getName(); // stores name in localStorage
  }

  //  Check if it is a number
  checkIsNumber() {
    const success = Number(this.num1);
    return !isNaN(success) && this.num1 !== null && this.num1 !== "";
  }

  // number validation
  submitNumber() {
    if (this.checkIsNumber()) {
      alert("Success: " + this.num1 + " is a number");
    } else {
      alert("Error: " + this.num1 + " is NOT a number");
    }
  }

  //   email is valid
  validEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(this.email)) {
      alert("Email is valid: " + this.email);
      return true;
    } else {
      alert("Please enter a valid email");
      return false;
    }
  }

  //  Save details in localStorage
  // getName() {
  //   localStorage.setItem("firstName", "Joe");
  //   console.log("Local storage set: Joe");
  // }
}
