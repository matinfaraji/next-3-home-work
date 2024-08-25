import getData from "../../../utils/getData";
import RecipesComponent from "@/components/recipesCard";

export default async function page() {
  const { recipes } = await getData("https://dummyjson.com/recipes");
  return (
    <>
      <RecipesComponent key={recipes.id} card={recipes} />
    </>
  );
}
