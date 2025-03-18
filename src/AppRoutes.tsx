import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { DriversProvider } from "@/contexts/DriversContext";

// Lazy load pages with proper loading boundaries
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Drivers = lazy(() => import("./pages/Drivers"));
const Vehicles = lazy(() => import("./pages/Vehicles"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "drivers",
            element: <DriversProvider><Drivers /></DriversProvider>
          },
          {
            path: "vehicles",
            element: <Vehicles />
          },
          {
            path: "about",
            element: <About />
          }
        ]
      }
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true
  }
});

