// import UsersComponent from "@/components/usersCard";
import dynamic from "next/dynamic";
import GetData from "../../../utils/getData";
export const metadata = {
  title: "users page",
};
const UsersComponent = dynamic(() => import("@/components/usersCard"), {
  loading: () => <p>Loading...</p>,
});
export default async function Page() {
  // const { users } = await GetData("https://dummyjson.com/users");
  const users = await fetch ("http://localhost:3000/api/admin/users")
  return (
    <>
      <UsersComponent key={users.id} card={users} />
    </>
  );
}
