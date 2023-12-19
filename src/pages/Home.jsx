import author from "../images/author.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import {MdDownload} from 'react-icons/md'

const Home = () => {
  return (
    <div className="bg-blue-50 px-8 sm:px-40 py-10 h-screen md:grid grid-cols-3">
      <div className="w-96 flex justify-center m-auto sm:justify-normal">
        <img
          src={author}
          alt="A picture of Clement Kinyui Ndimuangu"
          className="rounded-full w-60"
        />
      </div>
      <div className="col-span-2">
        <div>
          <p className="uppercase  text-xl text-center py-4">let's build together!</p>
          <h1 className="uppercase font-bold text-6xl text-center py-4">
            hello, i'm <span className="text-indigo-400 text-shadow">clement kinyui</span>
          </h1>
          <h2 className="capitalize font-bold text-4xl text-center py-4">
            The individual who is capable of developing both client and
            server-side software
          </h2>
          <h3 className="capitalize text-4xl font-bold text-center py-4">
            full stack software engineer
          </h3>
          <p className="text-center py-4 leading-7 text-lg">
            Motivated software engineer with expertise in computer science
            principle, programming languages and software development. Skilled
            in developing and maintaining applications to meet user needs.
            Effective collaborator delivering high quality solutions within
            deadlines. Eager to learn and apply emerging technologies for
            enhanced software development.Commited to driving innovation and
            improving user experience.
          </p>
        </div>
        <div className="flex gap-12 justify-center py-4">
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 shadow-lg shadow-stone-600 text-slate-50">
            <a
              href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 shadow-lg shadow-stone-600 text-slate-50">
            <a
              href="https://github.com/KINYUI1?tab=repositories"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 shadow-lg shadow-stone-600 text-slate-50">
            <Link to="/contact-me">
              <CiMail />
            </Link>
          </div>
          <a href='./Clement Kinyui Ndi Resume.docx' download='clement kinyui ndimuangu resume.docx'><button className=" p-3 text-xl uppercase font-bold  bg-stone-700  hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 text-slate-50 rounded shadow-lg shadow-stone-600">resume <MdDownload className="inline"/></button> </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
