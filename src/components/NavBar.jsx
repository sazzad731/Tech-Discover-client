import { Link } from "react-router-dom";
const NavBar = () => {
  const user = true;

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </>
  );
  return (
    <div className="navbar justify-between max-w-[1500px] mx-auto">
      <div className="navbar-start w-4/5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold -mt-4">
          TechDiscover<span className="text-4xl text-orange-600">.</span>
        </Link>
        <div className="hidden lg:flex lg:ps-10">
          <ul className="menu-horizontal px-1 gap-5 font-bold">{navMenu}</ul>
        </div>
      </div>
      <div className="navbar-end w-1/5">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <Link className="justify-between">User name</Link>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link className="font-semibold">Log in</Link>
            <Link className="btn bg-black text-white hover:bg-black rounded-full px-7">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;