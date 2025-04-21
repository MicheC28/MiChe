import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HomePage from "../HomePage/HomePage";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return (
    <html lang="en">
      <head>
        <title>HomePage</title>
        <script src='../../node_modules/flowbite-react/dist/index.cjs'></script>
      </head>
      <body>
        <HomePage />
      </body>
    </html>


  );
}
