let curNum ='';
let prevNum = '';
let operator = '';

let currentDisplayNumber = document.querySelector('.currentNumber');
let prevDisplayNumber = document.querySelector('.previousNumber')
const equal = document.querySelector(".equal");
equal.addEventListener("click",() => {
   if(curNum != "" && prevNum!=""){
    operate();
   }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal();
});

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
    if(prevNum !== "" && curNum!== "" && operator ==="") {
        prevNum = "";
        currentDisplayNumber.textContent = curNum;
    }
    if(curNum.length < 10) {
        curNum += number;
        currentDisplayNumber.textContent = curNum;
        console.log(number);
    }
}

operators.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        handleOper(e.target.textContent)
    });
});

function handleOper(oper) {
    if(prevNum === "") {
        prevNum = curNum;
        checkOperator(oper);
    } else if(curNum === "") {
        checkOperator(oper);
    } else {
        operate();
        operator=oper;
        currentDisplayNumber.textContent="0";
        prevDisplayNumber.textContent=prevNum+" "+operator;
    }
    console.log(operator)
}

function checkOperator(text) {
    operator=text;
    prevDisplayNumber.textContent=prevNum+" "+operator;
    currentDisplayNumber.textContent="0";
    curNum="";
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
            displayRes();
            return;
        } else {
            prevNum /= curNum;
        }
    } else {
        prevNum %= curNum;
    }

    prevNum = roundNum(prevNum)
    prevNum = prevNum.toString();
    displayRes();
}
function roundNum(num) {
    return Math.round(num * 1000000) / 1000000;
}

function displayRes() {
    if(prevNum.length <= 10) {
        currentDisplayNumber.textContent = prevNum;
    } else {
        currentDisplayNumber.textContent = prevNum.slice(0,10)+ "..."
    }
    prevDisplayNumber.textContent="";
    operator="";
    curNum=""
}

function clearCalc() {
    prevNum = "";
    curNum = "";
    operator = "";
    prevDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = "0";
}

function addDecimal() {
    if (!curNum.includes(".")) {
      curNum += ".";
      currentDisplayNumber.textContent = curNum;
    }
  }