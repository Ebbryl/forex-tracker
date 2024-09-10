let latestRateData = {};

async function fetchExchangeRate() {
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const resultDiv = document.getElementById('exchange-rate-result');

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();

        const rate = data.rates[targetCurrency];
        latestRateData = {
            base: baseCurrency,
            target: targetCurrency,
            rate: rate,
            date: data.date
        };

        resultDiv.textContent = `1 ${baseCurrency} = ${rate} ${targetCurrency}`;
        
        // Enable buttons after data fetch
        document.getElementById('copy-btn').disabled = false;
        document.getElementById('download-btn').disabled = false;

    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rate';
        latestRateData = {};
        document.getElementById('copy-btn').disabled = true;
        document.getElementById('download-btn').disabled = true;
    }
}

function copyToClipboard() {
    const jsonString = JSON.stringify(latestRateData, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
        alert('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function downloadJSON() {
    const jsonString = JSON.stringify(latestRateData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `exchange-rate-${latestRateData.base}-to-${latestRateData.target}.json`;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
