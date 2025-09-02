import github_icon from "../../images/Socials/github_logo.png";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";
import main from "../../images/Projects/Tetris.png";

function ProjectConsoleTetris() {
  return (
    <div className="relative z-10 flex flex-col gap-5">
      <div className="h-20 md:h-15"></div>

      <ProjectBreadcrumb projectName={"Console Tetris"} />

      <div className="mx-10 md:mx-40 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
        <p className="text-xl text-emerald-200 font-bold">Console Tetris</p>

        <p className="text-base text-gray-500">C | Aug 2025</p>

        <img src={main} className="w-auto h-100 rounded-xl" />

        <ul className="text-white text-base list-disc md:mx-30">
          <li>Terminal-based Tetris clone implemented in C for Windows.</li>
          <li>
            Supports classic gameplay with 7 tetromino pieces, piece holding and
            ghost piece preview.
          </li>
          <li>Uses simple ASCII/Unicode graphics for visualization.</li>
        </ul>

        <a
          href="https://github.com/MicheC28/Tetris-C"
          className=" border-4border-emerald-200 p-2 rounded-xl transition duration-200 bg-emerald-200"
        >
          <img src={github_icon} className="homepage-social-icon " />
        </a>
      </div>

      <div className="h-15"></div>
    </div>
  );
}

export default ProjectConsoleTetris;
