import MenuItem from "./MenuItem";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdAddBusiness } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
const UserMenu = () => {
  return (
    <>
      <MenuItem path="/dashboard" label="My Profile" Icon={BiSolidUserCircle} />
      <MenuItem path="add-product" label="Add Product" Icon={MdAddBusiness} />
      <MenuItem path="my-products" label="My Products" Icon={FaListUl} />
    </>
  );
};

export default UserMenu;
