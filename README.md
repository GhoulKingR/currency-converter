# Currency-Converter

This project is a currency converter made with JavaScript. The project allows you check and convert currencies using the real-time exchange rates.

Setting up the application will require so extra steps. But none of the steps will cost you any money.

## Getting started

To get started with this project, clone the repository into your system. Then, run this command to install its dependencies:
```bash
npm install
```

## Requirements

To get the project running, you'll need the following:
1. An AbstractAPI API key
2. An APILayer API key

To obtain your AbstractAPI API key, follow these steps:
1. [Create an account](https://app.abstractapi.com/users/signup) with AbstractAPI, or [Sign in](https://app.abstractapi.com/users/login) if you already have one.
2. In the [dashboard](https://app.abstractapi.com/dashboard), click **IP Geolocation** under **Lookup**

If you scroll to the **Try it out** section, and you'll see the API key beside **Private Key:**.

To obtain your APILayer API key, follow these steps:
1. Open APILayer's [FixerAPI page](https://apilayer.com/marketplace/fixer-api).
2. Click the **Subscribe for Free** button.
3. In the **Free Plan** box, click **Subscribe**.
4. Create an account, or Sign in if you have one.

You'll see the API key at the top of the page. There is a **Copy API Key** button that you can click to copy the API key.

## Setting up environment variables

To set up the environment variables, follow these steps:
1. Create a `.env` file in the `currency-calculator` folder.
2. Write the following into the `.env` file (replace * API_KEY * with your AbstractAPI API key):
```
ABSTRACT_API_KEY="* API_KEY *"
```
3. Write the following into the `.env` file (replace * API_KEY * with your APILayer API key):
```
API_LAYER_KEY="* API_KEY *"
```

## Running the application

With everything ready, its time to run the application. To run this application, run this command in your terminal:
```bash
node index.js
```

## License

MIT License

Copyright (c) 2022 Chigozie Oduah

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.