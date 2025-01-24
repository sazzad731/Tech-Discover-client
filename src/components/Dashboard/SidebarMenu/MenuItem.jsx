import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({label, path, Icon}) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        ` flex items-center font-semibold px-3 py-1 rounded-lg hover:bg-[#C7D8EA] ${
          isActive && "bg-[#C7D8EA]"
        }`
      }
    >
      {typeof Icon === "function" ? (
        <Icon className="w-5 h-5 me-2" />
      ) : (
        <img src={Icon} className="w-5 me-2" alt="icon" />
      )}
      {label}
    </NavLink>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  Icon: PropTypes.elementType,
};

export default MenuItem;