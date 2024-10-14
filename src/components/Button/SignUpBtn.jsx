import { Link } from "react-router-dom";

const SignUpBtn = () => {
  return (
    <Link
      to="/signup"
      className="btn bg-black text-white hover:bg-black rounded-full px-7"
    >
      Sign up
    </Link>
  );
};

export default SignUpBtn;