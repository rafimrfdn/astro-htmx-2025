// For now, let's use in-memory data for simplicity
let todosData = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Learn Astro and HTMX", completed: false },
];

export async function getTodos() {
    // In a real app, this might fetch from a database or API
    // Simulating an async operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(todosData);
        }, 100); // Simulate a slight delay for fetching
    });
}

export async function deleteTodo(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            todosData = todosData.filter(todo => todo.id !== id); // Filter out the todo with the given id
            resolve(todosData); // Return the updated todo list
        }, 100);
    });
}
export async function addTodo(text) { // New addTodo function
	console.log("NEW TODO: " +text)
    return new Promise((resolve) => {
        setTimeout(() => {
            const newTodo = { id: todosData.length+1, text, completed: false }; // Create new todo object
            todosData.push(newTodo); // Add to our in-memory data
            resolve(newTodo); 
        }, 100);
    });
}
