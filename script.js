// firstClass Plus handler
document.getElementById('firsClassPlus-btn').addEventListener("click", function () {
    let inputFirstClass = document.getElementById('inputFirstClass');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassIncrease = firstClassValue + 1;
    inputFirstClass.value = firstClassIncrease;
    const firstClassAmount = firstClassIncrease * 150;
    document.getElementById("firstClassAmount").innerText = firstClassAmount;
    calculate(); 
});
// firstClass minus handler
document.getElementById('firsClassMinus-btn').addEventListener("click", function () {
    let inputFirstClass = document.getElementById('inputFirstClass');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassDecrease = firstClassValue - 1;
    inputFirstClass.value = firstClassDecrease;
    const firstClassAmount = firstClassDecrease * 150;
    document.getElementById("firstClassAmount").innerText = firstClassAmount;
    calculate(); 
});
// Economy plus handler
document.getElementById('EconomyPlus-btn').addEventListener("click", function () {
    let inputFirstClass = document.getElementById('EconomyInput');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassDecrease = firstClassValue + 1;
    inputFirstClass.value = firstClassDecrease;
    const firstClassAmount = firstClassDecrease * 100;
    document.getElementById("EconomyAmount").innerText = firstClassAmount;
    calculate(); 
});
// Economy Minus handler
document.getElementById('EconomyMinus-btn').addEventListener("click", function () {
    let inputFirstClass = document.getElementById('EconomyInput');
    let firstClassValue = parseInt(inputFirstClass.value);
    let firstClassDecrease = firstClassValue - 1;
    inputFirstClass.value = firstClassDecrease;
    const firstClassAmount = firstClassDecrease * 100;
    document.getElementById("EconomyAmount").innerText = firstClassAmount;
    calculate(); 
});
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