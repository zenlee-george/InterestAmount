function calculateInterest() {
    const amount = document.getElementById("amount").value;
    const percentage = document.getElementById("percentage").value.replace(/^([^%]+).*$/, "$1");
    const interestAmount = (amount * percentage / 100);

    document.getElementById("result").innerHTML = `Interest Amount: ${interestAmount.toFixed(2)}`;
}