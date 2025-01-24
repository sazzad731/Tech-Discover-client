import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import MyProfile from "../pages/Dashboard/User/MyProfile/MyProfile";
import AddProduct from "../pages/Dashboard/User/AddProduct/AddProduct";
import MyProducts from "../pages/Dashboard/User/MyProducts/MyProducts";
import Statistics from "../pages/Dashboard/Admin/Statistics";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";
import ProductReviewQueue from "../pages/Dashboard/Moderator/ProductReviewQueue";
import ReportedContents from "../pages/Dashboard/Moderator/ReportedContents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // user routes
      {
        index: true,
        element: <MyProfile />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "my-products",
        element: <MyProducts />,
      },

      // Moderator routes
      {
        index: true,
        element: <ProductReviewQueue />,
      },
      {
        path: "reported-contents",
        element: <ReportedContents />,
      },

      // admin routes
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-coupons",
        element: <ManageCoupons />,
      },
    ],
  },
]);

export default router;
