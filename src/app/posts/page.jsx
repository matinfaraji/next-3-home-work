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
  const { posts } = await getData("https://dummyjson.com/posts");

  return (
    <>
      <PostsComponenet key={posts.id} card={posts} />
    </>
  );
}
