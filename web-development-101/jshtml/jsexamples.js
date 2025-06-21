/* function declaration */
function myFunc(paras) {
    console.log('this is my function');
    console.log(paras + 1);
}
/*function expression */
var myFunct = function (paras) {
    console.log('this is my function');
    console.log(paras + 1);
}

/* Immediately Invoked Function Expression*/
var result = (function () {
    var name = "barry";
    return name;
})();

(function () {
    console.log('this is IIFE')
})()

/* callback function: a function passed into another function as an argument*/
function guess(num, smallerCb, biggerCb, equalCb) {
    var random = Math.floor(Math.random() * 100);
    console.log(num, random);

    if (num < random) {
        smallerCb();
        return;
    } else if (num > random) {
        biggerCb();
        return;
    }
    equalCb();
}
function smallerCb() {
    console.log("Your num is too small");
}
function biggerCb() {
    console.log("Your num is too big");
}
function equalCb() {
    console.log("Your num is right!");
}

equal(18, smallerCb, biggerCb, equalCb);

/* global functions are methods of the global object*/
var a = 10;
function sayhi(){
    alert("Hello");
}
window.sayhi();
console.log(window.a);

/* used window as a browser window*/
alert(window.innerHeight);

/* */
