// src/pages/api/todos/[id].js
//import { APIRoute } from 'astro';
import { deleteTodo, getTodos } from '../../../lib/todo';

export const prerender = false

export async function DELETE({ params, request }) {
	console.error("DELETE!!!!")
    const id = parseInt(params.id, 10); 
    if (isNaN(id)) {
        return new Response(null, { status: 400, statusText: 'Invalid ID' }); 
    }

    await deleteTodo(id); 
    //const updatedTodos = await getTodos();

    // Option 1: Return an empty response (204 No Content) - HTMX will just delete the item from DOM
    // return new Response(null, { status: 204 });

    // Option 2: Re-render the entire updated todo list and return it as HTML fragment
    // (Let's choose Option 1 for now, simpler for deletion)
    return new Response(null, { status: 200 }); // Option 1: Empty response is sufficient for delete
}
/*export const DELETE: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
      message: "This was a DELETE!"
    })
  )
}*/

//export function getStaticPaths() {
//    return []; // Return an empty array because we don't want to pre-render any specific paths for this API endpoint
//}
