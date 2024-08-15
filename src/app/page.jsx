import { ThemeSwitcher } from "@/components/darkmode";
import HomeComponent from "../components/home";
export default async function Home() {
  return (
    <main>
        <ThemeSwitcher/>

      <HomeComponent />
    </main>
  );
}
