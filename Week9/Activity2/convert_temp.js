"use strict";
var $ = function (id) { return document.getElementById(id); };


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

function toFahrenheit() {
    clearTextBoxes();
    $("degree_label_1").innerHTML = "Enter C degrees: ";
    $("degree_label_2").innerHTML = "Degrees Farenheit: ";
    $("to_celsisu").checked = false;
}

function toCelsius() {
    $("to_fahrenheit").checked = false;
    $("degree_label_1").innerHTML = "Enter F degrees: ";
    $("degree_label_2").innerHTML = "Degrees Celcius: ";
    clearTextBoxes();
}

function convertTemp() {
    var number = $("degrees_entered").value;
    if (number == "" || isNaN(number)) {
        alert("You must enter a valid number for degrees.");
    }
    else {
        if($("to_celsius").checked) {
            $("degrees_computed").value = ((number - 32)*5/9).toFixed(0);
            $("degrees_computed").focus();
        }
        else if($("to_fahrenheit").checked) {
            $("degrees_computed").value = ((number * 9/5) + 32).toFixed(0);
            $("degrees_computed").focus();
        }
    }
}

window.onload = function() {
    clearTextBoxes();
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};