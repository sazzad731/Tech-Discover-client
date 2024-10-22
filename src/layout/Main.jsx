import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full bg-custom-gradient ">
        {/* Your content can go here */}
        <header className="backdrop-blur-lg shadow-md bg-white/15 z-50 fixed top-0 left-0 right-0 w-full">
          <NavBar />
        </header>
        <main className="">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Main;