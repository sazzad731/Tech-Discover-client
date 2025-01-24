import useAuth from "../../../../hooks/useAuth";
import { BsPencilSquare } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaFireFlameCurved } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProfileState = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="bg-white/30 backdrop-blur-md border-2 border-white/30 py-7 px-10 rounded-xl shadow-md">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg mb-3">Profile</p>
          <Link to="profile/edit">
            <BsPencilSquare className="w-5 h-5" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="avatar mb-6">
            <div className="ring-purple-500 ring-offset-base-100 w-24 rounded-full ring ring-offset-4">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-500 text-lg mb-10">{user?.email}</p>
          <div className="flex items-center justify-between gap-5 mb-3">
            <abbr title="Followers" className="no-underline">
              <span className="flex items-center gap-1 bg-white shadow-md px-4 py-2 rounded-full">
                <MdPeople className="w-6 h-6 text-orange-500" />
                200
              </span>
            </abbr>
            <abbr title="Products" className="no-underline">
              <span className="flex items-center gap-1 bg-white shadow-md px-4 py-2 rounded-full">
                <AiFillProduct className="w-5 h-5 text-orange-500" />2
              </span>
            </abbr>
            <abbr title="Day Streak" className="no-underline">
              <span className="flex items-center gap-1 bg-white shadow-md px-4 py-2 rounded-full">
                <FaFireFlameCurved className="w-5 h-5 text-orange-500" />
                10
              </span>
            </abbr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileState;
