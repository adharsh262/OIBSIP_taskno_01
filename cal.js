let delEL=document.getElementById("a1");
let clrEL=document.getElementById("a2");

let inputEl=document.getElementById("display1");
let outputEl=document.getElementById("display2");

let sevenEl=document.getElementById("seven");
let eightEL=document.getElementById("eight");
let nineEl=document.getElementById("nine");
let percentEl=document.getElementById("percent");
let rootEl=document.getElementById("root");

let fourEl=document.getElementById("four");
let fiveEL=document.getElementById("five");
let sixEl=document.getElementById("six");
let mulEL=document.getElementById("mul");
let divEl=document.getElementById("divison");

let oneEL=document.getElementById("one");
let twoEL=document.getElementById("two");
let threeEl=document.getElementById("three");
let addEl=document.getElementById("plus");
let subEL=document.getElementById("minus");

let decimalEl=document.getElementById("point");
let zeroEl=document.getElementById("zero");
let ansEl=document.getElementById("ans");
let enterEl=document.getElementById("enter");


clrEL.onclick=function() {
    inputEl.value="";
    outputEl.value="";
}
let val2=null;

/* rootEl.onclick=function() {
    let value1=inputEl.value;
        let val1=Number(value1);
        val2=Math.sqrt(val1);
        
        enterEl.onclick=function() {
            outputEl.value=val2;
        }
} */
