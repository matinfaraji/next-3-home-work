import { Grid } from "@mui/material";
import Link from "next/link";
export default async function HomeComponent() {
  return (
    <Grid
      container
      spacing={8}
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Link href="./users" className="text-2xl">
          Users
        </Link>
      </Grid>
      <Grid item>
        <Link href="./posts" className="text-2xl">
          Posts
        </Link>
      </Grid>
      <Grid item>
        <Link href="./recipes" className="text-2xl">
          Recipes
        </Link>
      </Grid>
    </Grid>
  );
}
