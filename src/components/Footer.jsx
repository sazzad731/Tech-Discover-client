import { Link } from "react-router-dom";
import Logo from "./shared/Brand/Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-20 border-t-2">
      <div className="max-w-[1500px] 2xl:mx-auto mx-4">
        <div className="footer items-center p-4">
          <aside className="md:grid-flow-col items-center">
            <Logo />
            <p className="hidden md:static">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link to="https://github.com/sazzad731" target="blank">
              <FaGithub className="w-10 h-10" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/sazzad-hossen1/"
              target="blank"
            >
              <FaLinkedin className="w-10 h-10" />
            </Link>
          </nav>
        </div>
        <p className=" text-center py-5">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;