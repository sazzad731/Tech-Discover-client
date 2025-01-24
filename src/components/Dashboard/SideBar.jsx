import PropTypes from "prop-types";
import Logo from "../shared/Brand/Logo";
import UserMenu from "./SidebarMenu/UserMenu";
import AdminMenu from "./SidebarMenu/AdminMenu";
import ModeratorMenu from "./SidebarMenu/ModeratorMenu";

const SideBar = ({ isActive }) => {
  return (
    <div
      className={`bg-white/30 z-50 backdrop-blur-md border-2 border-white/30 shadow-md px-4 pt-7 rounded-xl min-h-screen md:static absolute top-4 transition-all duration-500${
        isActive ? " left-4" : " -left-60"
      }`}
    >
      <Logo/>
      <div className="flex flex-col gap-5 mt-10 p-1">
        <UserMenu />
        {/* <ModeratorMenu/> */}
        {/* <AdminMenu/> */}

      </div>
    </div>
  );
};

SideBar.propTypes = {
  isActive: PropTypes.bool,
};

export default SideBar;
