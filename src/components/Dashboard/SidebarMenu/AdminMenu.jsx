import MenuItem from "./MenuItem";
import { FcStatistics } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import couponCard from "../../../assets/image/couponCard.png"
const AdminMenu = () => {
  return (
    <>
      <MenuItem path="/dashboard" label="Statistics" Icon={FcStatistics} />
      <MenuItem path="manage-users" label="Manage Users" Icon={FaUsers} />
      <MenuItem path="manage-coupons" label="Manage Coupons" Icon={couponCard} />
    </>
  );
};

export default AdminMenu;