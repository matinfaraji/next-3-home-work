import dynamic from "next/dynamic";
import getData from "../../../utils/getData";
export const metadata = {
  title: "posts page",
};
const PostsComponenet = dynamic(() => import("@/components/postsCard"), {
  loading: () => <p>Loading...</p>,
});

export default async function page() {
  const  posts  =await getData ("http://localhost:3000/api/admin/posts",{
    next: { tags: ["pos"] },
  });

  return (
    <>
      <PostsComponenet key={posts.id} card={posts} />
    </>
  );
}
