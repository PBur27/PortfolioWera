import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
