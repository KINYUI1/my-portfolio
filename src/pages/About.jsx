import Experience from "../components/Experience";
import Headings from "../components/Headings";
import workSetup from "../images/workSetup.jpg";
import experienceData from '../data/experienceData'
import {MdDownload} from 'react-icons/md'

const About = () => {
  const info = {
    title:'About Me',
    intro:'Get to know me better'
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <Headings {...info}/>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img 
                src={workSetup} 
                alt="Work setup" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Passionate about software engineering, I hold an Associate Degree from the 
                <span className="font-bold text-indigo-600"> University of Bamenda (Cameroon)</span> and 
                have gained invaluable experience through <span className="font-bold text-indigo-600">Per Scholas</span>, 
                providing a robust foundation in programming languages, algorithms, and data structures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My love for this field extends beyond academic achievements, driving me to stay 
                current with industry trends and technologies. I am adept at rapid learning and 
                thrive in dynamic environments.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Bring</h3>
              <p className="text-gray-700 leading-relaxed">
                With strong analytical and problem-solving skills, I am committed to producing 
                high-quality, maintainable code. I excel in communication, translating complex 
                technical concepts for both technical and non-technical stakeholders. Collaborative 
                and detail-oriented, I bring a proactive approach to process improvement, ensuring 
                the delivery of scalable and efficient software solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600 text-sm">Associate Degree in Computer Science</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 text-sm">Full Stack Development</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Focus</h4>
                <p className="text-gray-600 text-sm">Innovation & User Experience</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Collaboration</h4>
                <p className="text-gray-600 text-sm">Team Player & Communicator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Professional Experience</h2>
            <a href='/Clement Ndimuangu.docx' download='Clement Ndimuangu Resume.docx'>
              <button className="flex items-center gap-2 px-6 py-3 text-base font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <MdDownload className="text-xl" />
                Download Resume
              </button>
            </a>
          </div>
          
          <div className="space-y-6">
            {experienceData.map((experience)=>{
              return <Experience key={experience.id} {...experience}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
