import UsersComponent from "@/components/usersCard";
import GetData from "../../../utils/getData";

export default async function Page() {
  const { users } = await GetData("https://dummyjson.com/users");
  return (
    <>
      <UsersComponent key={users.id} card={users} />
    </>
  );
}
