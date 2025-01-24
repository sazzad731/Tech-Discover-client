import heroImg from "../../../assets/image/Hero.png";
import PrimaryButton from "../../../components/shared/Button/PrimaryButton";
const Banner = () => {
  return (
    <section className="pt-28">
      <div className="max-w-[1500px] 2xl:mx-auto mx-4 flex flex-col-reverse xl:flex-row items-center justify-between gap-10 backdrop-blur-lg bg-white/20 p-5 md:p-14 rounded-3xl shadow-md bg-hero-gradient">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-7">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Discover & Share
            </span>
            <br /> the Future of Tech
          </h1>
          <p className="md:text-lg font-medium max-w-96 mb-7">
            Explore the latest web apps, AI tools, and software, Connect with
            innovators shaping tomorrow, Share your insights and elevate
            emerging products, Join the community &apos; driving innovation
            forward.
          </p>
          <PrimaryButton label="Try it for free" path="/signup" />
        </div>
        <img src={heroImg} alt="image" />
      </div>
    </section>
  );
};

export default Banner;
