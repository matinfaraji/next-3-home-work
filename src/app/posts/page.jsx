// import PostsComponenet from "@/components/postsCard";
import dynamic from "next/dynamic";
import getData from "../../../utils/getData";
export const metadata = {
  title: "posts page",
};
const PostsComponenet = dynamic(() => import("@/components/postsCard"), {
  loading: () => <p>Loading...</p>,
});

export default async function page() {
  const  res  =await fetch ("http://localhost:3000/api/admin/posts")
  const posts = await res.json();

  return (
    <>
      <PostsComponenet key={posts.id} card={posts} />
    </>
  );
}
