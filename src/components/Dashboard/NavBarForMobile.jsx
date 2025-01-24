import PropTypes from "prop-types";
import Logo from "../shared/Brand/Logo";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const NavBarForMobile = ({ isActive, setActive, }) => {
  return (
    <div
      className={`backdrop-blur-lg shadow-md bg-white/15 border-b-2 border-b-white/25 fixed top-0 left-0 right-0 p-4 w-full flex items-center ${
        isActive ? "justify-end" : "justify-between"
      } md:hidden`}
    >
      {!isActive && <Logo/>}
      <div>
        {isActive ? (
          <RxCross2 onClick={() => setActive(false)} className="w-7 h-7" />
        ) : (
          <IoMenu onClick={() => setActive(true)} className="w-7 h-7" />
        )}
      </div>
    </div>
  );
};

NavBarForMobile.propTypes = {
  isActive: PropTypes.bool,
  setActive: PropTypes.func,
};

export default NavBarForMobile;