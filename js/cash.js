/* global console, alert, prompt*/

var

    myInput = document.getElementById("input"),

    myDiv = document.getElementById("div"),

    myCurrency = document.getElementById("currency"),

    myButton = document.getElementById("button");

myButton.onclick = function () {

    "use strict";

    myDiv.innerHTML = "Worth " + myInput.value * myCurrency.value + " Egyptian Pound";
};