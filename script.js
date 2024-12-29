

// Script for Currency Converter

const convertButton = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

convertButton.addEventListener("click", async function () {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!amount || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const API_URL = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data && data.rates) {
      const rate = data.rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
      resultDiv.textContent = "Failed to get conversion rate.";
    }
  } catch (error) {
    console.error("Error:", error);
    resultDiv.textContent = "Error fetching data. Please try again.";
  }
});
