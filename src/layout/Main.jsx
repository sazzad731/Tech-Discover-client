import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full bg-custom-gradient relative">
        {/* Your content can go here */}
        <header className="backdrop-blur-lg shadow-md bg-white/15 relative z-50">
          <NavBar />
        </header>
        <Outlet />
        <footer></footer>
      </div>
    </>
  );
};

export default Main;