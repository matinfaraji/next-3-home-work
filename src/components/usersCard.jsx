"use client";
import { Grid, Typography, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";

export default function UsersComponent({ card }) {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <Grid item key="users">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {card.map((user) => (
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
    </>
  );
}
