// Write JavaScript code here to fetch a random quote from the API and update the HTML accordingly

//  API Link: You can use the Quotes Free API (https://type.fit/api/quotes) to get random quotes.

let btn = document.getElementById("btn"); // Here btn is the id of the button tag

const url = "https://type.fit/api/quotes"; // API Link

let getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * (quotes.length));
    return quotes[randomIndex];
};

let getQuote = () => {
    fetch(url)
    .then((response) => response.json()) // converting the data to JSON
    .then((quotes) => {
        const randomQuote = getRandomQuote(quotes);
        quote.innerText = randomQuote.text; // Here quote is the id of the paragraph tag
    });
};

window.addEventListener("load", getQuote); // load the quote when the page loads
btn.addEventListener("click", getQuote); // load the quote when the button is clicked