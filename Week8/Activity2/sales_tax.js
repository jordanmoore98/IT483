var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);
    
    if (subtotal <= 0 || subtotal > 10000) {
        $("subtotal_message").innerHTML = "Must be a positive number less than $10,000";
        return;
    }
    if (taxRate <= 0 || taxRate > 12) {
        $("tax_rate_message").innerHTML = "Must be a positive number less than 12";
        return;
    }

    var salesTax = subtotal * (taxRate / 100);
    var total = subtotal + salesTax;
    $("total").value = total.toFixed(2);
    $("sales_tax").value = salesTax.toFixed(2);
    $("subtotal").focus();

};

var clear_click = function () {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("total").value = "";
    $("sales_tax").value = "";
};

window.onload = function () {
    $("subtotal").focus();
};

