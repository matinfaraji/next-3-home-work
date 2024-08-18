"use client";
import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default async function page() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  const { posts } = await getData("https://dummyjson.com/posts");

  return (
    <>
      <Head>
        <title>Posts - My Blog</title>
        <meta
          name="description"
          content="Browse through various posts on different topics."
        />
        <meta name="keywords" content="posts, blog, articles" />
      </Head>
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
              <Button
                variant="outlined"
                color="error"
                endIcon={<SendIcon />}
                onClick={() => handleNavigation(`/posts/${post.id}`)}
              >
                {post.title}
              </Button>
            </Typography>
          ))}
        </Box>
      </Grid>
    </>
  );
}
