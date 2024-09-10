async function fetchExchangeRate() {
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    try {
        // Simulate fetching data
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();

        // Show result in exchange-rate-result div
        const rate = data.rates[targetCurrency];
        document.getElementById('exchange-rate-result').innerText = `1 ${baseCurrency} = ${rate} ${targetCurrency}`;

        // Get current date in UTC
        const currentDate = new Date().toISOString();

        // Show JSON preview
        const jsonData = {
            base: baseCurrency,
            target: targetCurrency,
            rate: rate,
            date: currentDate
        };
        document.getElementById('json-preview').innerText = JSON.stringify(jsonData, null, 2);

        // Enable buttons
        document.getElementById('copy-btn').disabled = false;
        document.getElementById('download-btn').disabled = false;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}

function copyToClipboard() {
    const jsonData = document.getElementById('json-preview').innerText;
    navigator.clipboard.writeText(jsonData).then(() => {
        alert('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function downloadJSON() {
    const jsonData = document.getElementById('json-preview').innerText;
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'exchange-rate.json';
    link.click();
}

// Function to update the UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc-time').innerText = utcTime;
}

// Update the UTC time every second
setInterval(updateUTCTime, 1000);
