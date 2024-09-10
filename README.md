# Currency Exchange Dashboard

This project is a web-based currency exchange dashboard built using HTML, CSS, and JavaScript, designed to provide a user-friendly interface for converting currencies and viewing real-time exchange rates. It is tailored to showcase basic technical skills, including API integration, data handling, and UI/UX development.

## Features

- **Currency Conversion**: Select base and target currencies to get the latest exchange rates.
- **Real-Time Data**: Fetches data from the Exchange Rate API v4, displaying the most up-to-date rates.
- **JSON Preview**: Provides a preview of the conversion results in JSON format, including the date and time of the query.
- **UTC Clock**: Displays the current UTC time on the dashboard.
- **Interactive UI**: Includes options to copy JSON data to the clipboard or download it as a file.

## Technology Stack

- **Frontend**: HTML, CSS (Flexbox for layout), JavaScript (for data handling and UI interactivity).
- **API Integration**: Utilizes the Exchange Rate API v4 for fetching real-time currency data.

## API Usage

The application currently uses the **Exchange Rate API v4** to fetch real-time exchange rates. This API is accessed using JavaScript's Fetch API to make HTTP requests to:

https://api.exchangerate-api.com/v4/latest/{baseCurrency}

Where `{baseCurrency}` is dynamically replaced with the selected base currency by the user.

### Example API Request

```javascript
const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
const data = await response.json();
console.log(data);
```
```json
{
    "base": "USD",
    "target": "EUR",
    "rate": 0.906,
    "date": "2024-09-10T17:26:37.898Z"
}
```

## Credits
Exchange Rate API: This project utilizes the Exchange Rate API, provided by `ExchangeRate-API.com`, for real-time currency data. Special thanks to the API providers for making this project possible.
Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
