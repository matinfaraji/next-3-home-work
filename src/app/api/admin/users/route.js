import GetData from "../../../../../utils/getData";

export const { users } = await GetData("https://dummyjson.com/users");

//  export const data = users.json()
export function GET() {
  return Response.json(users);
}
