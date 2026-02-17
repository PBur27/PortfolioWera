import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Layout from "./Layout.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Photography from "./pages/Photography.jsx";
import Projects from "./pages/Projects.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/o-mnie" element={<AboutMe />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/fotografie" element={<Photography />} />
            <Route path="/projekty" element={<Projects />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
