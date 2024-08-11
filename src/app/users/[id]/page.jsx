
import React from "react";
import getData from "../../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page({ params }) {
  const sx = params.id;
  // console.log(sx);
  const ls = parseFloat(sx, 1);
  // console.log(ls);
  const users = await getData("https://dummyjson.com/users");
  const dataUsers = users.users;
  // console.log(dataPosts);
  const found = dataUsers.find((i) => i.id === ls);
  // console.log(found);
  return (
    <Grid item key="users">
      <Grid className="text-2xl">Users</Grid>

      <Typography key={found.id}>{found.username}</Typography>
    </Grid>
  );
}
