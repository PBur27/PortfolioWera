import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Photography from "./pages/Photography.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "/about-me", element: <AboutMe /> },
      { path: "/contacts", element: <Contact /> },
      { path: "/photography", element: <Photography /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
