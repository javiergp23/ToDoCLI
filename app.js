import chalk from "chalk";
import { createInterface } from "readline";
const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu(){
    console.log(chalk.redBright.bold("\nTo-Do List CLI⚡"));
    console.log(chalk.blue("1. Add Task"));
    console.log(chalk.blue("2. View Tasks"));
    console.log(chalk.blue("3. Complete Task"));
    console.log(chalk.blue("4. Exit"));
}

displayMenu();