import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // for "/"
  route("/projects", "routes/projects.tsx"), // for "/projects"
  route("/projects/digitalclipboard", "routes/digitalclipboard.tsx"),
  route(
    "/projects/alertingmedicationcase",
    "routes/alertingmedicationcase.tsx"
  ),
  route("/projects/windsorhousing", "routes/windsorhousing.tsx"),
  route("/projects/rainyriches", "routes/rainyriches.tsx"),
  route("/miche", "routes/miche-home.tsx"),
  route("/miche/colour-vision", "routes/miche-colourvision.tsx"),
  route("/miche/minis-collection", "routes/miche-minis-collection.tsx"),
  route(
    "/miche/iteration1-collection",
    "routes/miche-iteration1-collection.tsx"
  ),
  route("/miche/city-of-roses", "routes/miche-cityofroses.tsx"),
  route("/miche/temporary-instance", "routes/miche-temporary-instance.tsx"),
  route("/projects/consoletetris", "routes/consoletetris.tsx"),
  route("/projects/mappingviaroutes", "routes/mappingviaroutes.tsx"),
] satisfies RouteConfig;
