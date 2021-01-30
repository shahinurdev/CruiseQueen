// first class handler
function firstClass(isIncrease) {

    let inputFirstClass = document.getElementById('inputFirstClass');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassIncrease = firstClassValue;
    if (isIncrease == true) {
        firstClassIncrease = firstClassValue + 1;
    };
    if (isIncrease == false && firstClassValue > 0) {

        firstClassIncrease = firstClassValue - 1;
    }
    inputFirstClass.value = firstClassIncrease;
    const firstClassAmount = firstClassIncrease * 150;
    document.getElementById("firstClassAmount").innerText = firstClassAmount;
    calculate();
}
// Economy handler
function economy (isIncrease){
    let inputFirstClass = document.getElementById('EconomyInput');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassDecrease = firstClassValue;
    if(isIncrease == true){
        firstClassDecrease = firstClassValue + 1;
    };
    if(isIncrease == false && firstClassValue > 0 ){
        firstClassDecrease = firstClassValue - 1;
    }
    inputFirstClass.value = firstClassDecrease;
    const firstClassAmount = firstClassDecrease * 100;
    document.getElementById("EconomyAmount").innerText = firstClassAmount;
    calculate();
}

// calculate
function calculate() {
    let inputFirstClass = document.getElementById("inputFirstClass");
    let inputFirstClassCount = parseInt(inputFirstClass.value);

    let EconomyInput = document.getElementById("EconomyInput");
    let EconomyInputCount = parseInt(EconomyInput.value);

    let subTotal = inputFirstClassCount * 150 + EconomyInputCount * 100;

    document.getElementById("subTotal").innerText = subTotal;

    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vatAmount').innerText = vat;

    const total = subTotal + vat;

    document.getElementById("total").innerText = total;


}