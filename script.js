document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const conversionRate = 2.5; 

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const convertedAmount = amount * conversionRate;
    document.getElementById('result').innerText = `${amount} Tickets = About ${convertedAmount.toFixed(2)} USD`;
});
