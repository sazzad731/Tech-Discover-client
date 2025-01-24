import { Link } from "react-router-dom";
import logoIcon from "../../../assets/image/logoIcon.png"
const Logo = () => {
  return (
      <Link to="/" className="flex items-center text-2xl font-bold"><img src={logoIcon} className="w-8" alt="logo" />
        TechDiscover<span className="text-4xl text-orange-600">.</span>
      </Link>
  );
};

export default Logo;