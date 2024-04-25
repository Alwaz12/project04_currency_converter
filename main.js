import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    EURO: 0.92,
    GBP: 0.79,
    TRY: 32.03,
    QAR: 3.64,
    JPY: 151.61,
    RUB: 92.58,
    KRW: 1351.27,
};
let get = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bgCyanBright.bold("Enter from currency: "),
        choices: ["USD", "PKR", "INR", "EURO", "GBP",
            "TRY", "QAR", "JPY", "RUB", "KRW"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.bgCyanBright.bold("Enter to currency: "),
        choices: ["USD", "PKR", "INR", "EURO", "GBP",
            "TRY", "QAR", "JPY", "RUB", "KRW"]
    },
    {
        name: "amt",
        type: "number",
        message: "Enter Amount: "
    }
]);
let amFrom = currency[get.from];
let anTo = currency[get.to];
let amt1 = get.amt;
let div = amt1 / amFrom;
let total = div * anTo;
console.log(total.toFixed(2));
