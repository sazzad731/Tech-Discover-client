import { Link } from "react-router-dom";


const LoginBtn = () => {
  return (
    <Link to="/login" className="btn bg-base-300 md:bg-transparent rounded-full border-none hover:bg-transparent shadow-none font-bold">
      Log in
    </Link>
  );
};

export default LoginBtn;