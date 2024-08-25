"use client";
import PostsComponenet from "@/components/postsCard";
import getData from "../../../utils/getData";


export default async function page() {
  const { posts } = await getData("https://dummyjson.com/posts");

  return (
    <>
    <PostsComponenet key={posts.id} card={posts}/>
    </>
  );
}
