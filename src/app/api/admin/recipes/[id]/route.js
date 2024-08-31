import {data} from "../route"
export async function GET(req, { params }) {
  const recipe = data.find((x) => x.id === parseInt(params.id));
  return Response.json(recipe);
}
export async function PATCH(req, { params }) {
  const userId = parseInt(params.id);
  const updatedInfo = await req.json();

  const userIndex = data.findIndex((x) => x.id === userId);
  if (userIndex === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  data[userIndex] = { ...data[userIndex], ...updatedInfo };

  return new Response(JSON.stringify(data[userIndex]), { status: 200 });
}