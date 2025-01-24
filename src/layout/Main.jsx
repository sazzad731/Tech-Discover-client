import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <header className="backdrop-blur-lg shadow-md bg-white/15 border-b-2 border-b-white/25 z-50 fixed top-0 left-0 right-0 w-full">
        <NavBar />
      </header>
      <main className="bg-custom-gradient">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
