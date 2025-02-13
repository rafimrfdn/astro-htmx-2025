let todos = [{name:"foo",status:false}];

let r = JSON.stringify("FOOBAR:" + Math.random());
/*
export async function GET({params, request}) {
  return new Response(
    JSON.stringify(Math.random())
  )
}*/

export const GET: APIRoute = ({ params, request }) => {
  //return new Response(Math.random())
  return new Response(JSON.stringify(todos));
}

//export async function POST(
//
export const prerender = false;
