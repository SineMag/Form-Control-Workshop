export default class NumberWork {
    constructor(x) {
        this.num1 = x;
    }
    displayNumber() {
        console.log("This is num1: " + this.num1);
    }
    pozOrNeg () {
        if (this.num1 > 0) {
            console.log("this numb1 is positive")
        } else {
            console.log("this numb1 is negative")
        }
    }
}