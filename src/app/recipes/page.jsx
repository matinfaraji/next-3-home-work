import dynamic from "next/dynamic";
import getData from "../../../utils/getData";
export const metadata = {
  title: "recipes page",
};
const RecipesComponent = dynamic(() => import("@/components/recipesCard"), {
  loading: () => <p>Loading...</p>,
});
export default async function page() {
  const  res  =await fetch ("http://localhost:3000/api/admin/recipes")
  const recipes = await res.json();
  return (
    <>
      <RecipesComponent key={recipes.id} card={recipes} />
    </>
  );
}
