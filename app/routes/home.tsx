import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HomePage from "../HomePage/HomePage";
import NavBar from "~/NavBar/NavBar";
import { FlickeringGrid } from "components/magicui/flickering-grid";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return (

    <div className="relative min-h-screen overflow-hidden">

      <NavBar />



      {/* Background grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={10}
        color="#c587b8"
        maxOpacity={0.6}
        flickerChance={0.4}
      />

      {/* Content on top */}
      <HomePage className="relative z-20" />
    </div>


  );
}
