import getData from "../../utils/getData";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Loading from "./loading";
export default async function Home() {
  const users = await getData("https://dummyjson.com/users");
  const dataUsers = users.users;
  const postsData = await getData("https://dummyjson.com/posts");

  const dataPosts = postsData.posts;
  const recipesData = await getData("https://dummyjson.com/recipes");
  const dataRecipes = recipesData.recipes;

  return (
    <Grid container spacing={8} className="items-center text-center">
      <Grid item>
        <Link href="./users" className="text-2xl">
          Users
        </Link>
        {dataUsers.map((user) => (
          <Typography key={user.id}>{user.username}</Typography>
        ))}
      </Grid>
      <Grid item>
        <Link href="./posts" className="text-2xl">
          Posts
        </Link>
        {dataPosts.map((post) => (
          <Typography key={post.id}>{post.title}</Typography>
        ))}
      </Grid>
      <Grid item>
        <Link href="./recipes" className="text-2xl">
          Recipes
        </Link>
        {dataRecipes.map((recipe) => (
          <Typography key={recipe.id}>{recipe.name}</Typography>
        ))}
      </Grid>
    </Grid>
  );
}
