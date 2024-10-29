import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrimaryButton = ({label, path}) => {
  return (
    <Link to={path} className="btn bg-black text-white hover:bg-black rounded-full px-7">{label}</Link>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default PrimaryButton;