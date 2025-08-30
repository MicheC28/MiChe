import github_icon from "../../images/Socials/github_logo.png";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";
import demoMain from "../../images/Projects/AlertCase2.png";
import demoSecondary from "../../images/Projects/AlertCase1.png";

function ProjectAlertingMedicationCase() {
  return (
    <div className="relative z-10 flex flex-col gap-5">
      <div className="h-20 md:h-15"></div>

      <ProjectBreadcrumb projectName={"Alerting Medication Case"} />

      <div className="mx-10 md:mx-40 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
        <p className="text-xl text-emerald-200 font-bold">
          Alerting Medication Case
        </p>

        <p className="text-base text-gray-500">
          C/C++, STM32-NucleoF401RE, Github | Sept 2023 - Dec 2023
        </p>

        <img src={demoMain} className="md:w-2/3 h-auto rounded-xl" />

        <ul className="text-white text-base list-disc md:mx-30">
          <li>
            Collaborated to design a medication case with auditory and visual
            alerts.
          </li>
          <li>
            Responsible for developing and implementing electronically
            controlled locking system, visual alert system and auditory alert
            system. Used the HAL library to control and receive signal from
            LEDs, piezos, servos, and limit switches.
          </li>
          <li>
            Responsible for project management. Managed a Kanban board to
            designate and coordinate meetings with fellow team members.
          </li>
        </ul>

        <a
          href="github"
          className="border-teal-950 border-4 hover:border-emerald-200 p-2 rounded-xl transition duration-200 hover:bg-emerald-200 bg-transparent"
        >
          <img src={github_icon} className="homepage-social-icon " />
        </a>

        <img src={demoSecondary} className="w-2/3 rounded-xl" />

        <p className="text-white text-base md:mx-30">
          The Alerting Medication case was designed for ECE 198 project studio
          course. Tasksed with designing and developing a product to aid in the
          medical field, we decided to tackle the common problem of patients
          forgetting to take daily medications. <br></br>
          <br></br>
          The case includes both visual (LEDs) and auditory (piezos) alert
          systems that trigger when it is time for the user to take their
          medication.<br></br>
          <br></br>
          Upon startup, users are prompted to configure a passcode, which is
          required to access the medications and set alarms. Once the alarms are
          set, the timer starts. When the alarm goes off, the LEDs blink and the
          piezos create a high-pitched ring to alert the user. The user enters
          their passcode, which, if correct, triggers the locking mechanism to
          unlock, allowing access to the medication. Once the pills are taken
          and the user closes the lid, a built-in limit switch detects the
          presence of the lid and triggers the locking mechanism to lock the
          case again, waiting for the next alert cycle.
        </p>
      </div>

      <div className="h-15"></div>
    </div>
  );
}

export default ProjectAlertingMedicationCase;
