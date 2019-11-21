import {TodoItem} from "./todoItem";


//introducing a shape type

type ItemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    private nextId: number = 1;

    //how to set up a type for map
    //private itemMap = new Map<number, TodoItem>();
    
    protected itemMap = new Map<number, TodoItem>();

    // constructor(public userName: string, public todoItems: TodoItem[]){
    //     //no statements required
    // }

    //using a map to store TodoItem objects
    constructor(public userName: string, public todoItems: TodoItem[] = []){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodo(task: string): number {

        while(this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        // this.todoItems.push(new TodoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));

        return this.nextId;
    }

    getTodoById(id: number) : TodoItem {
        // return this.todoItems.find(item => item.id === id);
        return this.itemMap.get(id);
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        //... [item1, item2, item3,...]

        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
        //The filter() method creates a new array with all elements that pass the test implemented

    }

    markComplete(id: number, complete: boolean){
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }

    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete)
            {
                this.itemMap.delete(item.id);
            }
        })
    }

    //this draws on the shape type declared at the top

    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }


}