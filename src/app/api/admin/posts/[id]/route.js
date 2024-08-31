import { data } from "../route";
export async function GET(req, { params }) {
  const post = data.find((x) => x.id === parseInt(params.id));
  return Response.json(post);
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
export async function DELETE(req, { params }) {
  const id = parseInt(params.id, 10);

  const index = data.findIndex((x) => x.id === id);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Item not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const deleted = data.splice(index, 1)[0];

  return new Response(JSON.stringify(deleted), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
