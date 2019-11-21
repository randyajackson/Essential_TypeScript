"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
class TodoCollection {
    // constructor(public userName: string, public todoItems: TodoItem[]){
    //     //no statements required
    // }
    //using a map to store TodoItem objects
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        //how to set up a type for map
        //private itemMap = new Map<number, TodoItem>();
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        // this.todoItems.push(new TodoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        // return this.todoItems.find(item => item.id === id);
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        //... [item1, item2, item3,...]
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
        //The filter() method creates a new array with all elements that pass the test implemented
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    //this draws on the shape type declared at the top
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TodoCollection = TodoCollection;
