import GetData from "../../../../../../utils/getData";

// const { users } = await GetData("https://dummyjson.com/users");
import {data} from '../route'
export async function GET(req, { params }) {
  const user = data.find((x) => x.id === parseInt(params.id));
  return Response.json(user);
  
}
export async function PATCH(req, { params }) {
    const { title } = await req.json();
    // const title = body.title;
    const index = data.findIndex((race) => race.id === params.id);
  
    users[index].title = title;
  
    return Response.json(data[index]);
  }