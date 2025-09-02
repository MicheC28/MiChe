import github_icon from "../../images/Socials/github_logo.png";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";
import main from "../../images/Projects/VIA.png";
import second from "../../images/Projects/VIA_2.png";

function ProjectMappingVIARoutes() {
  return (
    <div className="relative z-10 flex flex-col gap-5">
      <div className="h-20 md:h-15"></div>

      <ProjectBreadcrumb projectName={"Mapping VIA Routes"} />

      <div className="mx-10 md:mx-40 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
        <p className="text-xl text-emerald-200 font-bold">Mapping VIA Routes</p>

        <p className="text-base text-gray-500">
          Python, MatPlotlib, Pandas| Aug 2025
        </p>

        <img src={main} className="w-auto h-100 rounded-xl" />

        <ul className="text-white text-base list-disc md:mx-30">
          <li>
            A Python application that visualizes VIA Rail routes using GTFS
            (General Transit Feed Specification) data.
          </li>
          <li>
            Allows users to select and view specific VIA Rail routes on an
            interactive map, displaying both the route path and stop locations.
          </li>
          <li>
            Handles CSV data (routes, trips, shapes, stops, stop times) using
            pandas.
          </li>
          <li>
            Visualizations created with Matplotlib using latitude and longitude
            coordinates.
          </li>
          <li>A good way to spend time during a 2.5 hrs train delay :)</li>
        </ul>

        <a
          href="https://github.com/MicheC28/MappingVIARoutes"
          className=" border-4border-emerald-200 p-2 rounded-xl transition duration-200 bg-emerald-200"
        >
          <img src={github_icon} className="homepage-social-icon " />
        </a>
      </div>

      <div className="h-15"></div>
    </div>
  );
}

export default ProjectMappingVIARoutes;
