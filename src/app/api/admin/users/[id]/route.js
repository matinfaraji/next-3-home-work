import GetData from "../../../../../../utils/getData";

export async function GET(req, { params }) {
  const { users } = await GetData("https://dummyjson.com/users");
  const user = users.find((x) => x.id === parseInt(params.id));
  return Response.json(user);
}