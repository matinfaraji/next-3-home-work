import dynamic from "next/dynamic";
import GetData from "../../../utils/getData";
export const metadata = {
  title: "users page",
};
const UsersComponent = dynamic(() => import("@/components/usersCard"), {
  loading: () => <p>Loading...</p>,
});
export default async function Page() {
  const res = await fetch("http://localhost:3000/api/admin/users");
  const users = await res.json();

  return (
    <>
      <UsersComponent key={users.id} card={users} />
    </>
  );
}
