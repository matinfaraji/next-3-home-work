import GetData from "../../../../../../utils/getData";

export async function GET(req, { params }) {
  const { recipes } = await GetData("https://dummyjson.com/recipes");
  const recipe = recipes.find((x) => x.id === parseInt(params.id));
  return Response.json(recipe);
}