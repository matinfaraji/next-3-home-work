import GetData from "../../../../../utils/getData";

const { users } = await GetData("https://dummyjson.com/users");



export  function GET() {
  return  Response.json(users);
}
