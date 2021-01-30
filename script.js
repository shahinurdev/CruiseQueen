function ticketIncreaseAndAmount(ticket, isIncrease) {
    let input = document.getElementById(ticket + "Input");
    let inputCount = parseInt(input.value);
    let inputIncrise = inputCount;
    if (isIncrease == true) {
        inputIncrise = inputCount + 1;
    };
    if (isIncrease == false && inputCount > 0) {
        inputIncrise = inputCount - 1;
    }
    input.value = inputIncrise;
    let ticketTotal = 0;
    if (ticket == "firstClass") {
        ticketTotal = inputIncrise * 150;
    }
    if (ticket == "economy") {
        ticketTotal = inputIncrise * 100;
    }
    document.getElementById(ticket + "Amount").innerText = ticketTotal;
    calculate()
};
// calculate
function calculate() {
    let firstClassInput = getInputValue("firstClass");
    let economyInput = getInputValue("economy");

    let subTotal = firstClassInput * 150 + economyInput * 100;

    document.getElementById("subTotal").innerText = subTotal;

    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vatAmount').innerText = vat;

    const total = subTotal + vat;

    document.getElementById("total").innerText = total;
};

function getInputValue(ticket) {
    let input = document.getElementById(ticket + "Input");
    let inputValue = parseInt(input.value);
    return inputValue;
}