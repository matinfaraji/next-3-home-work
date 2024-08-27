import GetData from "../../../../../utils/getData";

const { posts } = await GetData("https://dummyjson.com/posts");

export function GET() {
  return Response.json(posts);
}
