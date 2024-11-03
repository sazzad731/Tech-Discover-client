import { NavLink, Link } from "react-router-dom";
import LoginBtn from "./shared/Button/LoginBtn";
import PrimaryButton from "./shared/Button/PrimaryButton";
import { useContext } from "react";
import { PageScrollContext } from "../providers/PageScrollProvider";
import Logo from "./shared/Brand/Logo";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const NavBar = () => {
  const { user, logOutUser, deleteUserAccount } = useAuth();
  const { scrollToSection, activeSection } = useContext(PageScrollContext);
  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      Swal.fire({
        title: "Success",
        text: "You have successfully logged out!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteUser = () => {
    Swal.fire({
      title: "Are you sure to delete account?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUserAccount();
          Swal.fire({
            title: "Deleted!",
            text: "Your account has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          if (error) {
            await logOutUser();
            Swal.fire({
              title: "Please Login to delete account",
              text: "First you have to login to delete account",
              icon: "warning",
            });
          }
        }
      }
    });
  };
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
            {/* <svg
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
            </svg> */}
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
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
                <img alt="User profile" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <details>
                  <summary>
                    <Link className="justify-between">{user?.displayName}</Link>
                  </summary>
                  <ul>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleDeleteUser}
                        className="text-red-500"
                      >
                        Delete Account
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <button onClick={handleLogOutUser}>Logout</button>
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
