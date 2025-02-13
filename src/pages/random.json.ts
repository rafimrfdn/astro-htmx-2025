let todos = [{name:"foo",status:false}];

//let r = JSON.stringify("FOOBAR:" + Math.random());

const response = await fetch('https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain');
const r = await response.text();

/*
export async function GET({params, request}) {
  return new Response(
    JSON.stringify(Math.random())
  )
}*/

/*export const GET: APIRoute = ({ params, request }) => {
  return new Response(Math.random())
}*/

export const GET: APIRoute = ({ params, request }) => {
  return new Response(r)
}

//export async function POST(
//
export const prerender = false;
