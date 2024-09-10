async function fetchExchangeRate() {
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const resultDiv = document.getElementById('exchange-rate-result');

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();

        const rate = data.rates[targetCurrency];
        resultDiv.textContent = `1 ${baseCurrency} = ${rate} ${targetCurrency}`;
    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rate';
    }
}
