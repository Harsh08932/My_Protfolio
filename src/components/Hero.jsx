import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl font-bold tracking-wider">Hi ,I'm Harsh</h1>
          <p className="mt-4 text-3xl capitalize tracking-wide text-slate-700">
            Software Engineer at TransUnion
          </p>
          <p className="text-lg mt-2 capitalize tracking-wide text-slate-700">
            Working professional with 3 years of development expertise to craft
            impactful and scalable solutions
          </p>

          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Harsh08932/" target="new">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-yadav-35819b212"
              target="new"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://leetcode.com/u/harsh2345/" target="new">
              <SiLeetcode className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block px-3">
          <img src={heroImg} alt="hero img" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
