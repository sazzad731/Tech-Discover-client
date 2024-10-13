import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full bg-custom-gradient">
        {/* Your content can go here */}
        <header className="backdrop-blur-lg shadow-md">
          <NavBar />
        </header>
        <Outlet />
        <footer></footer>
      </div>
    </>
  );
};

export default Main;