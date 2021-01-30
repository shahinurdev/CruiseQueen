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
// conformation script
document.getElementById("book-btn").addEventListener("click", function() {
    document.getElementById("bookingContainer").style.display = "none";
    document.getElementById("conformationCard").style.display = "block";
    firstClass()
});
//conformation ticket count
function firstClass() {
    let firstClassInput = document.getElementById("firstClassInput");
    let firstClassValue = parseInt(firstClassInput.value);
    let firstClassIncrise = firstClassValue++;
    firstClassInput.value = firstClassIncrise;
    document.getElementById("firstClassConformTicket").innerText = firstClassIncrise;

    let economyInput = document.getElementById("economyInput");
    let economyValue = parseInt(economyInput.value);
    let economyIncrise = economyValue++;
    economyInput.value = economyIncrise;
    document.getElementById("economyConformTicket").innerText = economyIncrise;

    let total = firstClassIncrise * 150 + economyIncrise * 100;
    const withVat = Math.round(total * 0.1);
    const conformationAmount = total + withVat;
    document.getElementById('conformationAmount').innerText = "$ " + conformationAmount;
}