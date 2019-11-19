import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";

    //let todos = [
    let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
    
    // let collection = new TodoCollection("Adam", todos);
    let collection: TodoCollection = new TodoCollection("Adam", todos);

    console.clear();
    console.log(`${collection.userName}'s Todo List`);

    // let newId = collection.addTodo("Go for run");
    // let todoItem = collection.getTodoById(newId);

    let newId: number = collection.addTodo("Go for run");
    let todoItem: TodoItem = collection.getTodoById(newId);
    todoItem.printDetails();

    //this command calls the TodoCollection.addTodo method
    //since todoItem is not a string an error is thrown
    //string input and number output for addTodo
    //collection.addTodo(todoItem);

    console.log(JSON.stringify(todoItem));

    //commented declarations = less explicit / using JS
    //uncommented declarations = more explicit / using TypeScript

