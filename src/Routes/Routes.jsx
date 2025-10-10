import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllApp from "../Pages/Apps/AllApp";
import AllApps from "../Pages/Apps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/apps",
            Component: AllApps,
        },
        {
          path: "/apps/:id",
          Component: AppDetails
        },
        {
          path: "/app/installed",
          Component: InstalledApps
        }
    ]
  }
]);