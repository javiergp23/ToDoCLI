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

const addTask = () => {
    rl.question(chalk.bgMagentaBright("Write the task: "), (task) => {
        tasks.push({ task, completed: false});
        console.log(chalk.green.bold("Task added successfully!"));
        displayMenu();
        chooseOption();
    })
}

const viewTasks = () => {
    console.log(chalk.yellow.bold("\nYour Tasks: \n"));

    if(tasks.length === 0){
        console.log(chalk.red("No tasks to display."));
    }

    tasks.forEach((t, index) => {
        let status = t.completed ? "✅" : "❌";
        if(t){
            console.log(chalk.greenBright(`${index + 1}. ${status} - ${t.task}`))
        }else{
            console.log(chalk.redBright(`${index + 1}. ${status} - ${t.task}`))
        }
    })

    continuePromt();
}

const completeTask = () => {
    rl.question("Type the task number to mark as completed: ", (num) => {
        const index = parseInt(num) - 1;
        if(index >= 0 && index < tasks.length){
            tasks[index].completed = true;
            console.log(chalk.green("Task marked as completed!"));
        }else{
            console.log(chalk.red("Invalid task number."));
        }
        displayMenu();
        chooseOption();
    });
}

const continuePromt = () =>{
    rl.question(chalk.yellow("Do you want to perform another action? (y/n): "), (answer) => {
        if(answer.toLowerCase() === "y"){
            displayMenu();
            chooseOption();
        } else {
            console.log(chalk.green("Goodbye!"));
            rl.close();
        }
    });
}


function chooseOption(){
    rl.question(chalk.yellow("Choose an option: "), (choice) => {
        switch(choice){
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                completeTask();
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