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
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "github",
        element: <Github />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "contactme",
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
