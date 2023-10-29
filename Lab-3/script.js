
function calculateTip(){
    var billInput = (Number) (document.getElementById("bill").value);
    var tipInput = (Number) (document.getElementById("tipBar").value);

    var tip = billInput*tipInput/ 100.00;
    var total = billInput + tip;
    document.getElementById("tipAmount").setAttribute("value",tip.toFixed(2));
    document.getElementById("totalBill").setAttribute("value",total.toFixed(2));
    
}
function showTipPercentage(){
    var tipInput = (Number) (document.getElementById("tipBar").value); 
    document.getElementById("tipPercentage").setAttribute("value", tipInput.toFixed(2) + " %");
}
function changeLanguage(){
    var checkBox = document.getElementById("myCheck");
    var title = document.getElementById("title");
    var engText = document.getElementById("eng");
    var espText = document.getElementById("esp");
    var billAmountLabel = document.getElementById("billlabel");
    var tipBarLabel = document.getElementById("tipbarlabel");
    var tipPercentageLabel = document.getElementById("tippercentagelabel");
    var tipAmountLabel = document.getElementById("tipamountlabel");
    var totalAmountLabel = document.getElementById("totallabel");
    if (checkBox.checked == true){
        document.body.style.backgroundColor = "#ff8d8d";
        engText.style.fontWeight = 100;
        espText.style.fontWeight = 900;
        title.innerHTML = "Calculadora de propinas"
        billAmountLabel.innerHTML = "Factura:";
        tipAmountLabel.innerHTML = "Monto de propina:";
        tipBarLabel.innerHTML = "Propina:";
        tipPercentageLabel.innerHTML = "Porcentaje de propina:";
        totalAmountLabel.innerHTML = "Factura total con propina:";

    } else {
        document.body.style.backgroundColor = "#deb8ff";
        engText.style.fontWeight = 900;
        espText.style.fontWeight = 100;
        title.innerHTML = "Tip Calculator"
        billAmountLabel.innerHTML = "Bill Total:";
        tipAmountLabel.innerHTML = "Tip Amount:";
        tipBarLabel.innerHTML = "Tip:";
        tipPercentageLabel.innerHTML = "Tip Percentage:";
        totalAmountLabel.innerHTML = "Total Bill with tip";
    }
}