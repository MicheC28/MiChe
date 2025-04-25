import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),          // for "/"
    route("/projects", "routes/projects.tsx"), // for "/projects"
    route("/projects/digitalclipboard", "routes/digitalclipboard.tsx"),
    route("/projects/alertingmedicationcase", "routes/alertingmedicationcase.tsx"),
    route("/projects/windsorhousing", "routes/windsorhousing.tsx")
] satisfies RouteConfig;