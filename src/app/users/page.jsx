import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
export default async function page() {
  const { users } = await getData("https://dummyjson.com/users");
  return (
    <Grid item key="users">
      <Typography className="text-2xl">Users</Typography>
      {users.map((user) => (
        <Typography key={user.id}>
          <Link href={`/users/${user.id}`}>{user.username}</Link>
        </Typography>
      ))}
    </Grid>
  );
}
