let curNum ='';
let prevNum = '';
let operator = '';

let currentDisplayNumber = document.querySelector('.currentNumber');
let prevDisplayNumber = document.querySelector('.previousNumber')
const equal = document.querySelector(".equal");
equal.addEventListener("click",operate);

const decimal = document.querySelector(".decimal");

const clear = document.querySelector(".clear")
clear.addEventListener("click",clearCalc);

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")

numberButtons.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        handleNumber(e.target.textContent)
    });
});

function handleNumber(number) {
    if(curNum.length < 10) {
        curNum += number;
        currentDisplayNumber.textContent = curNum;
        console.log(number);
    }
    // curNum += number;
    // currentDisplayNumber.textContent = curNum;
    // console.log(number);
}

operators.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        handleOper(e.target.textContent)
    });
});

function handleOper(oper) {
    operator=oper;
    prevNum=curNum;
    prevDisplayNumber.textContent=prevNum+" "+operator;
    curNum="";
    currentDisplayNumber.textContent=""
    console.log(operator)
}

function operate() {
    prevNum=parseInt(prevNum);
    curNum=parseInt(curNum);

    if(operator === '+') {
        prevNum += curNum;
    } else if(operator === '-') {
        prevNum -= curNum;
    } else if(operator === '*') {
        prevNum *= curNum;
    } else if(operator === '/') {
        if(curNum <= 0) {
            prevNum = "Error, can't be divide by zero";
            prevDisplayNumber.textContent = prevNum;
            currentDisplayNumber.textContent = ""
            operator = ""
            // if(prevNum.length <=10) {
            //     currentDisplayNumber.textContent = prevNum;
            //     // currentDisplayNumber.textContent = prevNum.slice(0,5);
            // } else {
            //     currentDisplayNumber.textContent = prevNum.slice(0,5);
            //     // currentDisplayNumber.textContent=prevNum;
            // }
        } else {
            prevNum /= curNum;
        }
    } else {
        prevNum %= curNum;
    }

    prevDisplayNumber.textContent=prevNum;
    currentDisplayNumber.textContent=""
    operator="";
    // prevNum = roundNum(prevNum)
}
// function roundNum(num) {
//     return Math.round(num * 1000000) / 1000000;
// }

function clearCalc() {
    prevNum = "";
    curNum = "";
    operator = "";
    prevDisplayNumber = "";
    currentDisplayNumber = "";
}