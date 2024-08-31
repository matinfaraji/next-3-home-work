import GetData from "../../../../../utils/getData";
const { users } = await GetData("https://dummyjson.com/users");
export const data = users;
export function GET() {
  return Response.json(data);
}
export async function POST(req) {
  const body = await req.json();
  data.push({ ...body });

  return Response.json(body);
}
