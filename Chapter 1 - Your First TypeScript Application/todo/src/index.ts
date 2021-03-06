import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from "./jsonTodoCollection";


    //let todos = [
    let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
    
    // let collection = new TodoCollection("Adam", todos);
    let collection: TodoCollection = new JsonTodoCollection("Adam", todos);
    let showCompleted = true;

    function displayTodoList(): void {
        console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);

        collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
    }

    enum Commands {
        Add = "Add New Task",
        Complete = "Complete Task",
        Toggle = "Show/Hide Completed",
        Purge = "Remove Completed Tasks",
        Quit = "Quit"
    }

    function promptAdd(): void {
        console.clear();

        inquirer.prompt({ type: "input", name: "add", message: "Enter task:"})
        .then(answers => { 
            if ( answers["add"] !== ""){
                collection.addTodo(answers["add"]);
            }
            promptUser();
        })
    }

    function promptComplete(): void {
        console.clear();
        inquirer.prompt( { type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map( item =>
            ({name: item.task, value: item.id, checked: item.complete}))
        }).then( answers => {

            let completedTasks = answers["complete"] as number[];

            collection.getTodoItems(true).forEach(item =>
                collection.markComplete(item.id,
                    completedTasks.find(id => id === item.id) != undefined ));
        promptUser();

        })
    }

    function promptUser(): void {
        console.clear();
        displayTodoList();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands),
            //badProperty: true
            //there is no configuration property named badProperty in inquirer.js
        }).then(answers => {
            switch( answers["command"]) {
                case Commands.Toggle:
                    showCompleted = !showCompleted;
                    promptUser();
                    break;
                case Commands.Add:
                    promptAdd();
                    break;
                case Commands.Complete:
                    if(collection.getItemCounts().incomplete > 0 ) {
                        promptComplete();
                    } else {
                        promptUser();
                    }
                    break;
                case Commands.Purge:
                    collection.removeComplete();
                    promptUser();
                    break;
            }
        })
    }

    promptUser();

    //console.clear();
    //console.log(`${collection.userName}'s Todo List` +
                //` (${ collection.getItemCounts().incomplete } items to do)`);

    //*********************************************/
    // let newId = collection.addTodo("Go for run");
    // let todoItem = collection.getTodoById(newId);
    //let newId: number = collection.addTodo("Go for run");
    //let todoItem: TodoItem = collection.getTodoById(newId);
    //todoItem.printDetails();
    //this command calls the TodoCollection.addTodo method
    //since todoItem is not a string an error is thrown
    //string input and number output for addTodo
    //collection.addTodo(todoItem);
    //console.log(JSON.stringify(todoItem));

    //code omitted in order to match output in book
    //above is used to enter one entry into TodoCollection
    //**********************************************/
    //collection.removeComplete();

    //collection.getTodoItems(true).forEach(item => item.printDetails());
    //getTodoItems is passed true which is assigned to includeComplete

    //commented declarations = less explicit / using JS
    //uncommented declarations = more explicit / using TypeScript



