import github_icon from "../../images/Socials/github_logo.png";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";
import RR_main from "../../images/Projects/RainyRiches.png";
import RR_secondary from "../../images/Projects/RainyRiches2.png";

function ProjectRainyRiches() {
  return (
    <div className="relative z-10 flex flex-col gap-5">
      <div className="h-20 md:h-15"></div>

      <ProjectBreadcrumb projectName={"Rainy Riches Game"} />

      <div className="mx-10 md:mx-40 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
        <p className="text-xl text-emerald-200 font-bold">Rainy Riches Game</p>

        <p className="text-base text-gray-500">Processing4 | Jul 2021</p>

        <img src={RR_main} className="md:w-2/3 h-auto rounded-xl" />

        <ul className="text-white text-base list-disc md:mx-30">
          <li>
            Developed a video Game in Processing4 where players control a
            wheeled box to catch falling bills.
          </li>
          <li>
            Utilized Pvectors for acceleration, jetpack propulsion, and gravity
            of the player.
          </li>
          <li>
            Created classes for Players and Bills with methods for display,
            updating, and collision detection.
          </li>
          <li>
            Implemented a 60-second timer by iterating keyframes to track
            elapsed time.
          </li>
        </ul>

        <a
          href="github"
          className="border-teal-950 border-4 hover:border-emerald-200 p-2 rounded-xl transition duration-200 hover:bg-emerald-200 bg-transparent"
        >
          <img src={github_icon} className="homepage-social-icon " />
        </a>

        <img src={RR_secondary} className="w-2/3 rounded-xl" />

        <p className="text-white text-base md:mx-30">
          The Rainy Riches game was built in Processing4. The player is given 60
          seconds to collect as many falling bills from the sky. Man that would
          be a nice addition to real life.<br></br>
          <br></br>
          There's many different bills of different value -- $1, $5, $10, $20
          and ???. What is ??? you may ask? Well, if you're skilled enough to
          collect 3 ??? bills you unlock rocket boosters for your rolling box
          character.<br></br>
          <br></br>
          Players control the rolling box character using the arrow keys to
          accelerate and decelerate left and right. And with the addtion of the
          rocket boosters, the character can also traverse in the verticle
          direction, experiencing the boosters' acceleration as well as the
          downwards pull from gravity.<br></br>
          <br></br>
          Finally, the game keeps track of the highest score since start up
          allowing you to compete with your friends.
        </p>
      </div>

      <div className="h-15"></div>
    </div>
  );
}

export default ProjectRainyRiches;
