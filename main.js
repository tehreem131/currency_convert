import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcom to currency convertor\n"));
//Define tha list of currency and their rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, //Pakistan Rupees
    //Add more currency and their exchange rates here
};
//promt tha user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select tha currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select tha currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter tha amount of convert:"
    }
]);
//perform  currency conversion by using formula
let form_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / form_amount;
let converted_amount = base_amount * to_amount;
//Display tha currency amount
console.log(`converted amount = ${converted_amount}`);
