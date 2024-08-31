import GetData from "../../../../../utils/getData";

 const { recipes } = await GetData("https://dummyjson.com/recipes");
export const data = recipes
export function GET() {
  return Response.json(data);
}
export async function POST(req) {
  const body = await req.json();
  data.push({ ...body });

  return Response.json(body);
}
