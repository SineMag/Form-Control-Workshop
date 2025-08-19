export default class numberWork {
    constructor(num1) {
        this.num1 = num1;
    
    }
    displayNumber(){
        console.log(`This is num1: ${this.num1}`);  

    }

    pozOrNeg(){
        if(this.num1<0){
        console.log("Negative");
        }
        else {
         console.log("Positive");  
        }
    }
    
}