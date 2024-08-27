import GetData from "../../../../../utils/getData";

 const { recipes } = await GetData("https://dummyjson.com/recipes");

export function GET() {
  return Response.json(recipes);
}
