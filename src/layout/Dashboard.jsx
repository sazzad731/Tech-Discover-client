import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar";
import NavBarForMobile from "../components/Dashboard/NavBarForMobile";
import { useState } from "react";

const Dashboard = () => {
  const [ isActive, setActive ] = useState(false);
  return (
    <div className="bg-dashboard-gradient p-4">
      <div className="flex justify-between gap-5 min-h-screen md:pt-0 pt-16">
        <NavBarForMobile isActive={isActive} setActive={setActive}/>
        {/* Dashboard side bar */}
        <SideBar isActive={isActive} />
        {/* Dashboard content */}
        <div className="flex-1 z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;