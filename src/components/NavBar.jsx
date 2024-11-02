import { NavLink, Link } from "react-router-dom";
import LoginBtn from "./shared/Button/LoginBtn";
import PrimaryButton from "./shared/Button/PrimaryButton";
import { useContext } from "react";
import { PageScrollContext } from "../providers/PageScrollProvider";
import Logo from "./shared/Brand/Logo";
import useAuth from "../hooks/useAuth";
const NavBar = () => {
  const { user } = useAuth();
  console.log(user)
  const { scrollToSection, activeSection } = useContext(PageScrollContext);
  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-black"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-black"}`
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => scrollToSection("featuredSection")}
          className={() =>
            `${
              activeSection === "featuredSection" && "border-b-2 border-black"
            }`
          }
        >
          Featured Product
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => scrollToSection("trendingSection")}
          className={() =>
            `${
              activeSection === "trendingSection" && "border-b-2 border-black"
            }`
          }
        >
          Trending Product
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar justify-between max-w-[1500px] mx-auto relative z-50">
      <div className="navbar-start w-full">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold gap-3"
          >
            {navMenu}
            {!user && (
              <>
                <li className="md:hidden">
                  <LoginBtn />
                </li>
                <li className="md:hidden">
                  <PrimaryButton label="Sign up" path="/signup" />
                </li>
              </>
            )}
          </ul>
        </div>
        <Logo />
        <div className="hidden lg:flex lg:ps-10">
          <ul className="menu-horizontal px-1 gap-5 font-bold">{navMenu}</ul>
        </div>
      </div>
      <div className="navbar-end flex place-items-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <Link className="justify-between">{user?.displayName}</Link>
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
          <div className="hidden md:flex items-center gap-5">
            <LoginBtn />
            <PrimaryButton label="Sign up" path="/signup" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
