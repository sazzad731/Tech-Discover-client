import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full bg-custom-gradient ">
        {/* Your content can go here */}
        <header className="backdrop-blur-lg shadow-md bg-white/15 z-50 fixed top-0 left-0 right-0 w-full">
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
};

export default Main;