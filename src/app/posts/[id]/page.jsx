
import React from "react";
import getData from "../../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page({ params }) {
  const sx = params.id;
  const ls = parseFloat(sx, 1);
  const {posts} = await getData(`https://dummyjson.com/posts/`);
  const found = posts.find((i) => i.id === ls);

  return (
    <Grid item key="users">
      <Grid className="text-2xl">Posts</Grid>

      <Typography key={found.id}>{found.title}</Typography>
    </Grid>
  );
}
