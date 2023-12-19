import Experience from "../components/Experience";
import Headings from "../components/Headings";
import workSetup from "../images/workSetup.jpg";
import experienceData from '../data/experienceData'
import {MdDownload} from 'react-icons/md'


const About = () => {
  const info = {
    title:'About',
    intro:'who am i'
  }
  return (
    <div className="bg-blue-50 py-8 sm:px-40">
      <Headings {...info}/>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="max-w-md">
          <img src={workSetup} alt="work set" className="rounded-lg" />
        </div>
        <div className="leading-7 text-base sm:col-span-2 m-2">
          <p className="mb-4">
            Passionate about software engineering, I hold a certificate in software engineering and working experience from <span className="font-bold">Per Scholas</span>, providing a robust foundation in
            programming languages, algorithms, and data structures. My love for
            this field extends beyond academic achievements, driving me to stay
            current with industry trends and technologies. I am adept at rapid
            learning and thrive in dynamic environments.
          </p>
          <p>
            With strong analytical and problem-solving skills, I am committed to
            producing high-quality, maintainable code. I excel in communication,
            translating complex technical concepts for both technical and
            non-technical stakeholders. Collaborative and detail-oriented, I
            bring a proactive approach to process improvement, ensuring the
            delivery of scalable and efficient software solutions. As a
            dedicated software engineer, my passion and skills position me as a
            valuable contributor to innovative and challenging projects.
          </p>
        </div>
      </div>
      <div className="border-b border-gray-500 my-8"></div>

      <div>
        <div className="flex gap-8 items-center">
        <h1 className="capitalize font-bold text-4xl">experience</h1>
        <a href='./Clement Kinyui Ndi Resume.docx' download='clement kinyui ndimuangu resume.docx'><button className="mt-2 p-3 text-xl uppercase font-bold  bg-stone-700  hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 text-slate-50 rounded shadow-lg shadow-stone-600">resume <MdDownload className="inline"/></button> </a>
        </div>
        <div>
          {experienceData.map((experience)=>{
            return <Experience key={experience.id} {...experience}/>
          })}
        </div>
      </div>



    </div>
  );
};
export default About;
