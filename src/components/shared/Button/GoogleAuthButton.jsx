import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const GoogleAuthButton = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async()=>{
    try{
      const result = await googleSignIn()
      const user = result.user;
      console.log(user);
    }catch(err){
      console.error(err.message);
    }
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn w-full">
        <FcGoogle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default GoogleAuthButton;