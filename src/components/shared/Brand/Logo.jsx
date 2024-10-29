import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-2xl font-bold -mt-4">
      TechDiscover<span className="text-4xl text-orange-600">.</span>
    </Link>
  );
};

export default Logo;