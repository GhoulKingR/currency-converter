// import axios from 'axios';
require('dotenv').config();
const axios = require('axios');
const rl = require('readline')
  .createInterface({ input: process.stdin, output: process.stdout });

function input(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function moveForward(pair1, pair2) {
  const query = "Which conversion do you want to make:\n" +
                `1. ${pair1} to ${pair2}\n` +
                `2. ${pair2} to ${pair1}\n` +
                "Your response: ";
  switch (await input(query)) {
    case "1":
      await convert(pair1, pair2);
      break;
    case "2":
      await convert(pair2, pair1);
      break;
    default:
      console.log("Action not supported");
      await moveForward(pair1, pair2);
      break;
  }
}

async function convert(pair1, pair2) {
  // Get the desired currency and currency code
  const userAmount = await input(`How much ${pair1} do you want to convert? `);
  
  const response = await axios.get(`https://api.apilayer.com/fixer/convert?to=${pair2}&from=${pair1}&amount=${userAmount}`, {
    headers: {
      "apiKey": process.env.API_LAYER_KEY
    },
  });

  if (response.data["success"]) {
    console.log(`${userAmount} ${pair1} is ${response.data["result"]} ${pair2}`)
  } else {
    throw new Error("There was an error converting your currency, try again!");
  }
}

(async () => {
  try {
    // Get user country's currency and currency code
    const currencyResponse = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}`);
    const countryCode = currencyResponse.data["currency"]["currency_code"];

    // Get the desired direction
    const userChoice = await input("Do you want to work with your country's currency (y|n)? ");
    if (userChoice.toLowerCase() === 'y') {
      const currencyPair = await input('Which other currency do you want to work with (curency code)? ')
      await moveForward(countryCode, currencyPair);
    } else {
      const currencyPairsText = await input("Which two currencies do you want to work with (separate by a space, and use their currency code)? ")
      const currencyPairs = currencyPairsText.split(" ");
      await moveForward(currencyPairs[0], currencyPairs[1]);
    }
    rl.close();
  } catch(e) {
    console.log(e);
  }
})();
