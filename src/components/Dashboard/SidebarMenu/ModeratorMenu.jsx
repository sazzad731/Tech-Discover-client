import MenuItem from "./MenuItem";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
const ModeratorMenu = () => {
  return (
    <>
      <MenuItem path="/dashboard" label="Product Review Queue" Icon={MdOutlineReviews}/>
      <MenuItem path="reported-contents" label="Reported Contents" Icon={MdOutlineReport}/>
    </>
  );
};

export default ModeratorMenu;