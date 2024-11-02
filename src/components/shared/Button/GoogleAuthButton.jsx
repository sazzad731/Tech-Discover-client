import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProvider';

const GoogleAuthButton = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = async()=>{
    try{
      const result = await googleSignIn()
      const user = result.user;
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