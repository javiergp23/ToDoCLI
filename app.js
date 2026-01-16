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

function chooseOption(){
    rl.question(chalk.yellow("Choose an option: "), (choice) => {
        switch(choice){
            case "1":
                console.log("Adding a new task...");
               
                break;
            case "2":
                console.log("Viewing tasks...");
               
                break;
            case "3":
                console.log("Completing a task...");
             
                break;
            case "4":
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log(chalk.red("Invalid option. Please try again."));
                break;
        }
        }
    );}

    displayMenu();
    chooseOption();