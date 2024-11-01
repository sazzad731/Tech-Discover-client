import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="pt-28 min-h-screen">
      <div className="max-w-[668px] md:mx-auto mx-4 backdrop-blur-lg bg-white/20 p-5 md:p-14 rounded-3xl shadow-md bg-hero-gradient">
        <h2 className="text-5xl font-semibold text-center mb-10">Log in</h2>
        <form className="flex flex-col items-center gap-5 mb-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Enter your email</span>
            </div>
            <input
              type="email"
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
        <div className="w-full">
          <button className="btn w-full">
            <FcGoogle className="w-7 h-7"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
