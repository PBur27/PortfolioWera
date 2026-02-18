import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100" >
      <Navbar />

      <main className="d-flex flex-grow-1 flex-column">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
