import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/Github";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";

const router = createBrowserRouter([
  {
    path: "/portfoliio-fullstack",
    element: <App />,
    children: [
      {
        path: "portfoliio-fullstack/about",
        element: <About />,
      },
      {
        path: "portfoliio-fullstack/experience",
        element: <Experience />,
      },
      {
        path: "portfoliio-fullstack/skills",
        element: <Skills />,
      },
      {
        path: "portfoliio-fullstack/github",
        element: <Github />,
      },
      {
        path: "portfoliio-fullstack/education",
        element: <Education />,
      },
      {
        path: "portfoliio-fullstack/contactme",
        element: <ContactMe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
