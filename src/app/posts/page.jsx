import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
export default async function page() {
  const { posts } = await getData("https://dummyjson.com/posts");

  return (
    <Grid item>
      <Typography className="text-2xl">Posts</Typography>
      {posts.map((post) => (
        <Typography key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </Typography>
      ))}
    </Grid>
  );
}
