//getting all inputs from html
const loanAmt = document.getElementById("num1");
const intrestAmt = document.getElementById("num2");
const numYrs = document.getElementById("num3");
const answer= document.getElementById("answer");
//default amounts
const loanAmtDefault = 340000;
const intrestAmtDefault = 5.5;
const numYrsDefault = 30;
//setting the html default values
loanAmt.value = loanAmtDefault;
intrestAmt.value = intrestAmtDefault;
numYrs.value = numYrsDefault;

//does the math for the calculator
function calculate (la,ia,ny) {
    let total = 0;
    //r is monthly intrest rate
    let r = (ia/100)/12;
    //n is number of months
    let n = ny *12;
    //the exponet section of eqaution
    let exp = Math.pow(1+r,n);
    //combines everything and rounds to 2 decimal places
    total = la*((r*exp)/(exp-1));
    return total.toFixed(2);
}
answer.innerHTML= `Monthly Payments: $ ${calculate(loanAmt.value,intrestAmt.value,numYrs.value)}`;
//events function to use with the event Listners
const events = (e) =>{
    //checks if the inputs are numbers
    if(isNaN(loanAmt.value)){loanAmt.value=loanAmtDefault;}
    if(isNaN(intrestAmt.value)){intrestAmt.value = intrestAmtDefault;}
    if(isNaN(numYrs.value)) {numYrs.value= numYrsDefault;}
    answer.innerHTML= `Monthly Payments: $ ${calculate(loanAmt.value,intrestAmt.value,numYrs.value)}`;
};
//event listners for the inputs
loanAmt.addEventListener('blur', events);
intrestAmt.addEventListener('blur', events);
numYrs.addEventListener('blur', events);


