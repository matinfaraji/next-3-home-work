import { ThemeSwitcher } from "@/components/darkmode";
import HomeComponent from "../components/home";
import { Suspense } from "react";
export default async function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
     
        <HomeComponent />
      </Suspense>
    </main>
  );
}
