#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000; //dolar
let myPin = 9898;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Please enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "Fast cash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      console.log((myBalance -= amountAns.amount));
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log(
        "Your balance is 10000 please enter your amount under your account balance"
      );
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your account balance is ${myBalance}`);
  } else if (operationAns.operation === "Fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCach",
        message: "please select option",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "20000", "Other amount"],
      },
    ]);

    if (fastCashAns.fastCach === "1000") {
      if (fastCashAns.fastCach <= myBalance) {
        console.log((myBalance -= fastCashAns.fastCach));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    } else if (fastCashAns.fastCach === "2000") {
      if (fastCashAns.fastCach <= myBalance) {
        console.log((myBalance -= fastCashAns.fastCach));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    } else if (fastCashAns.fastCach === "5000") {
      if (fastCashAns.fastCach <= myBalance) {
        console.log((myBalance -= fastCashAns.fastCach));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    } else if (fastCashAns.fastCach === "10000") {
      if (fastCashAns.fastCach <= myBalance) {
        console.log((myBalance -= fastCashAns.fastCach));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    } else if (fastCashAns.fastCach === "20000") {
      if (fastCashAns.fastCach <= myBalance) {
        console.log((myBalance -= fastCashAns.fastCach));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    } else if (fastCashAns.fastCach === "Other amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "enter your amount",
          type: "number",
        },
      ]);
      if (amountAns.amount <= myBalance) {
        console.log((myBalance -= amountAns.amount));
        console.log(`Your remaining balance is: ${myBalance}`);
      } else {
        console.log(
          "Your balance is 10000 please enter your amount under your account balance"
        );
      }
    }
  }
} else {
  console.log("Incorrect pin number");
}
