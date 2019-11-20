"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
//let todos = [
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
// let collection = new TodoCollection("Adam", todos);
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List` +
    ` (${collection.getItemCounts().incomplete} items to do)`);
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
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
//getTodoItems is passed true which is assigned to includeComplete
//commented declarations = less explicit / using JS
//uncommented declarations = more explicit / using TypeScript
