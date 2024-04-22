#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    GBP: 0.8,
    EUR: 0.9,
    CAD: 1.2,
    AUD: 1.3,
    NZD: 1.4,
};
let answers = await inquirer.prompt([{
        name: "from_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AUD", "NZD"],
        message: "Enter from currency : "
    },
    {
        name: "to_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AUD", "NZD"],
        message: "Enter to currency : "
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount : "
    }
]);
let from_currency = answers.from_currency;
let to_currency = answers.to_currency;
let from_currency_value = currency[from_currency];
let to_currency_value = currency[to_currency];
let amount = answers.amount;
let baseamount = amount / from_currency_value;
let convertedamount = baseamount * to_currency_value;
console.log(convertedamount);
