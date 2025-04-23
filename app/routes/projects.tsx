// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HomePage from "../HomePage/HomePage";
import NavBar from "~/NavBar/NavBar";
import { FlickeringGrid } from "components/magicui/flickering-grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectHomePage from "~/ProjectsPages/ProjectHomePage/ProjectHomePage";

export default function Home() {
    // return <Welcome />;
    return (
        <ProjectHomePage />
    );
}
