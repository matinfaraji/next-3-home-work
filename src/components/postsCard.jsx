"use client";
import { Grid, Typography, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";

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
                {post.title}
              </Button>
            </Typography>
          ))}
        </Box>
      </Grid>
    </>
  );
}
