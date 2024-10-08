import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import GetData from "../../../../utils/getData";
import UserDialogDemo from "@/components/edite-data/postEdite";

export async function generateMetadata({ params }) {
  const foundPost = await GetData(`http://localhost:3000/api/admin/posts/${params.id}`);
  return {
    title: `Post-User ID - ${foundPost.userId}`,
  };
}
export default async function page({ params }) {
  const foundPost = await GetData(`http://localhost:3000/api/admin/posts/${params.id}`);
  return (
    <>
    <UserDialogDemo key={foundPost.id} popo={foundPost} />
      <Grid item key="posts" align="center">
        <Typography variant="h2">Post</Typography>
        <Box sx={{ maxWidth: 400 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {foundPost.title}
              </Typography>
              <Typography variant="h5" component="div">
                {foundPost.body}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Tags: {foundPost.tags.join(", ")}
              </Typography>
              <Typography variant="body2">Views: {foundPost.views}</Typography>
              <Typography variant="body2">
                Likes: {foundPost.reactions.likes}
              </Typography>
              <Typography variant="body2">
                Dislikes: {foundPost.reactions.dislikes}
              </Typography>
              <Typography variant="body2">
                User ID: {foundPost.userId}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
}
