export class Todo {
    // specify that each Todo instance will have three properties (id, title, complete)
    id: number; // number, unique ID of the todo item
    title: string = ''; // string, title of the todo item
    complete: boolean = false; // boolean, whether or not the todo item is complete

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
