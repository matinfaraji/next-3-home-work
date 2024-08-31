import dynamic from "next/dynamic";
import getData from "../../../utils/getData";
export const metadata = {
  title: "recipes page",
};
const RecipesComponent = dynamic(() => import("@/components/recipesCard"), {
  loading: () => <p>Loading...</p>,
});
export default async function page() {
  const  recipes  =await getData ("http://localhost:3000/api/admin/recipes",{
    next: { tags: ["rec"] },
  });
  return (
    <>
      <RecipesComponent key={recipes.id} card={recipes} />
    </>
  );
}
