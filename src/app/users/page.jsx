import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page() {
  const users = await getData("https://dummyjson.com/users");
  const dataUsers = users.users;
  return (
    <Grid item key="users">
      <Link href="./" className="text-2xl">
        Users
      </Link>
      {dataUsers.map((user) => (
        <Typography key={user.id}>{user.username}</Typography>
      ))}
    </Grid>
  );
}
