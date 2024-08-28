import GetData from "../../../../../../utils/getData";

export async function GET(req, { params }) {
  const { posts } = await GetData("https://dummyjson.com/posts");
  const post = posts.find((x) => x.id === parseInt(params.id));
  return Response.json(post);
}