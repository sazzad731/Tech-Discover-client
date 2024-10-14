import { Link } from "react-router-dom";


const LoginBtn = () => {
  return (
    <Link to="/login" className="btn bg-transparent border-none hover:bg-transparent shadow-none font-bold">
      Log in
    </Link>
  );
};

export default LoginBtn;