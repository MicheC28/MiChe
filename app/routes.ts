import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),          // for "/"
    route("/projects", "routes/projects.tsx"), // for "/projects"
] satisfies RouteConfig;