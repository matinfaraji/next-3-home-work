"use client";
import { Grid, Typography, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import UserDialogDemo from "./add-data/postdata";
import HandleDeleteUser from "./delete-data/deletePost";

export default async function PostsComponenet({ card }) {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <Grid item>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {card.map((post) => (
            <Typography key={post.id} variant="h6" align="center" m={1}>
              <Button
                variant="outlined"
                color="error"
                endIcon={<SendIcon />}
                onClick={() => handleNavigation(`/posts/${post.id}`)}
              >
              {post.id},  {post.title}
              </Button>
              <HandleDeleteUser id={post.id} />
            </Typography>
          ))}
        </Box>
        <UserDialogDemo />
      </Grid>
    </>
  );
}
