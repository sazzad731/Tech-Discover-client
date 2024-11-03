import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GoogleAuthButton from "../../components/shared/Button/GoogleAuthButton";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmailAndPass } = useAuth();
  const handleLogin = async(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try{
      const result = await signInWithEmailAndPass(email, password);
      const user = result.user;
      if(user){
        Swal.fire({
          title: "Success",
          text: "You have successfully logged in!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset()
      }
      console.log(user);
    }catch(err){
      console.error(err.message);
    }
  }
  return (
    <section className="pt-28 min-h-screen">
      <Helmet>
        <title>TechDiscover | Log in</title>
      </Helmet>
      <div className="max-w-[668px] md:mx-auto mx-4 backdrop-blur-lg bg-white/20 p-5 md:p-14 rounded-3xl shadow-md bg-hero-gradient">
        <h2 className="text-5xl font-semibold text-center mb-10">Log in</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-5 mb-5"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Enter your email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Enter your password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <div className="w-full">
            <button>Forgate password?</button>
          </div>
          <button
            type="submit"
            className="btn bg-black text-white hover:bg-black rounded-full px-7"
          >
            Log in
          </button>
        </form>
        {/* other login methode */}
        <div className="w-full flex items-center justify-between gap-2 mb-5">
          <span className="w-full border-2"></span>
          <span>Or</span>
          <span className="w-full border-2"></span>
        </div>

        {/* google login methode */}
        <GoogleAuthButton />
        <p className="text-center mt-5">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
