
import React from "react";
import getData from "../../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page({ params }) {
  const sx = params.id;
  // console.log(sx);
  const ls = parseFloat(sx, 1);
  // console.log(ls);
  const postsData = await getData(`https://dummyjson.com/posts/`);
  const dataPosts = postsData.posts;
  // console.log(dataPosts);
  const found = dataPosts.find((i) => i.id === ls);
  // console.log(found);
  return (
    <Grid item key="users">
      <Grid className="text-2xl">Posts</Grid>

      <Typography key={found.id}>{found.title}</Typography>
    </Grid>
  );
}
