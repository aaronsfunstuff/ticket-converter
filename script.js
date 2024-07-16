document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const convertTo = document.getElementById('convertTo').value;

    let conversionRate;
    let currencyName;

    switch(convertTo) {
        case 'usd':
            conversionRate = 2.5; // Conversion rate: 2.5 USD per ticket
            currencyName = 'USD';
            break;
        case 'inr':
            conversionRate = 208; // Conversion rate: 1 ticket = 208 INR
            currencyName = 'Indian Rupees (INR)';
            break;
        default:
            conversionRate = 1; // Default to 1 if no valid conversion rate found
            currencyName = 'Currency';
            break;
    }

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const convertedAmount = amount * conversionRate;
    document.getElementById('result').innerText = `${amount} Tickets = ${convertedAmount.toFixed(2)} ${currencyName}`;
});
