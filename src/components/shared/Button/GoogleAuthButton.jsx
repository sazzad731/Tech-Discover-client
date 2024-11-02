import { FcGoogle } from 'react-icons/fc';

const GoogleAuthButton = () => {
  return (
    <div>
      <button className="btn w-full">
        <FcGoogle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default GoogleAuthButton;