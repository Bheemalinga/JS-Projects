
// Get references to HTML elements
let countryInput = document.getElementById("country");
let getButton = document.getElementById("btn");
let capitalParagraph = document.getElementById("capital");
let populationParagraph = document.getElementById("population");
let areaParagraph = document.getElementById("area");
let regionParagraph = document.getElementById("region");
let subregionParagraph = document.getElementById("subregion");
let independentParagraph = document.getElementById("independent");
let statusParagraph = document.getElementById("status");
let currenciesParagraph = document.getElementById("currencies");

// Function to handle the API request and update the country information
let getCountryInfo = () => {
    let countryName = countryInput.value; // Get the user-entered country name
    
    // Define the URL for the REST Countries API with the selected country
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    
    // Make an API request to fetch country information
    fetch(apiUrl)
        .then((response) => response.json()) // Convert the response to JSON
        .then((data) => {
            if (data && data.length > 0) {
                // Assuming the first result is the desired country
                const countryInfo = data[0];
                const capital = countryInfo.capital || "Not available";
                const population = countryInfo.population || "Not available";
                const area = countryInfo.area || "Not available";
                const region = countryInfo.region || "Not available";
                const subregion = countryInfo.subregion || "Not available";
                const independent = countryInfo.independent || "Not available";
                const status = countryInfo.status || "Not available";
                const currencies = countryInfo.currencies || {};

                // Extract currency names and symbols
                const currencyNames = Object.keys(currencies);
                const currencySymbols = currencyNames.map((currencyName) => currencies[currencyName].symbol);
                const currencyText = currencyNames.map((currencyName, index) => `${currencyName} (${currencySymbols[index]})`).join(', ');

                // Update the HTML with the country information
                capitalParagraph.textContent = `Capital: ${capital}`;
                populationParagraph.textContent = `Population: ${population}`;
                areaParagraph.textContent = `Area: ${area} square kilometers`;
                regionParagraph.textContent = `Region: ${region}`;
                subregionParagraph.textContent = `Subregion: ${subregion}`;
                independentParagraph.textContent = `Independent: ${independent}`;
                statusParagraph.textContent = `Status: ${status}`;
                currenciesParagraph.textContent = `Currencies: ${currencyText}`;
            } else {
                capitalParagraph.textContent = "Country not found";
                populationParagraph.textContent = "Unknown";
                areaParagraph.textContent = "Unknown";
                regionParagraph.textContent = "Unknown";
                subregionParagraph.textContent = "Unknown";
                independentParagraph.textContent = "Unknown";
                statusParagraph.textContent = "Unknown";
                currenciesParagraph.textContent = "Unknown";
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            capitalParagraph.textContent = "An error occurred while fetching data";
            populationParagraph.textContent = "";
            areaParagraph.textContent = "";
            regionParagraph.textContent = "";
            subregionParagraph.textContent = "";
            independentParagraph.textContent = "";
            statusParagraph.textContent = "";
            currenciesParagraph.textContent = "";
        });
};

// Add an event listener to the button to trigger the getCountryInfo function
getButton.addEventListener("click", getCountryInfo);
