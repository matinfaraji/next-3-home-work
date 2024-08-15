import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";

export default async function page() {
  const { posts } = await getData("https://dummyjson.com/posts");

  return (
    <Grid item>
      <Typography variant="h3" align="center">
        Posts
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {posts.map((post) => (
          <Typography key={post.id} variant="h6" align="center" m={1}>
            <Link href={`/posts/${post.id}`}>
              <Button
                variant="outlined"
                color="error"
                endIcon={<SendIcon />}
              >
                {post.title}
              </Button>
            </Link>
          </Typography>
        ))}
      </Box>
    </Grid>
  );
}
