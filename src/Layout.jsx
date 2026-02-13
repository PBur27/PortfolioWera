import Footer from './components/Footer.jsx';
import Navbar from './components/NavBar.jsx';
import { Outlet } from 'react-router';
function Layout() {
  return (
    <>
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default Layout;