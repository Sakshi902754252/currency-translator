import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_6LRV4ka7eWrTQIdqAkXmumKzUr8prNVJiyMatXKR');

async function convertCurrency(fromCurrency , toCurrency, units){

    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = response.data[toCurrency];
    return multiplier*units;
}

