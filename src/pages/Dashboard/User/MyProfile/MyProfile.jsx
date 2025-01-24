import MyLineChart from "../../../../components/Dashboard/User/Charts/MyLineChart";
import ProfileState from "../../../../components/Dashboard/User/MyProfile/ProfileState";

const MyProfile = () => {
  return (
    <div>
      <div className="mb-36">
        <ProfileState />
      </div>
      <div>
        <MyLineChart />
      </div>
    </div>
  );
};

export default MyProfile;
