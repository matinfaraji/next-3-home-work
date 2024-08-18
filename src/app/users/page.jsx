"use client";
import React from "react";
import getData from "../../../utils/getData";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
export default async function page() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  const { users } = await getData("https://dummyjson.com/users");
  return (
    <Grid item key="users">
      <Typography variant="h3" align="center">
        Users
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {users.map((user) => (
          <Typography key={user.id} variant="h4" align="center" m={1}>
            <Button
              variant="string"
              endIcon={<SendIcon />}
              onClick={() => handleNavigation(`/users/${user.id}`)}
            >
              {user.username}
            </Button>
          </Typography>
        ))}
      </Box>
    </Grid>
  );
}
