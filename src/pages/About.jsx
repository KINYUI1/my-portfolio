import Experience from "../components/Experience";
import Headings from "../components/Headings";
import workSetup from "../images/workSetup.jpg";
import experienceData from '../data/experienceData'
import {MdDownload} from 'react-icons/md'

const About = () => {
  const info = {
    title:'About',
    intro:'The Story Behind the Code'
  }
  return (
    <div className="min-h-screen bg-dark-100 py-16 px-4 sm:px-6 lg:px-8 page-transition">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Headings {...info}/>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="relative group sticky top-24">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 blur-sm"></div>
              <img 
                src={workSetup} 
                alt="Work setup" 
                className="relative rounded-2xl shadow-elegant w-full h-auto object-cover ring-1 ring-gold-400/20"
              />
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/50"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/50"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 hover:border-gold-400/30 transition-all duration-500">
              <h3 className="text-2xl font-serif font-bold text-champagne-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400"></span>
                Professional Summary
              </h3>
              <p className="text-champagne-300 leading-relaxed text-lg">
                Telecom Billing & Automation Engineer with a proven track record of optimizing 
                high-volume data systems in <span className="text-gold-400 font-medium">Linux environments</span>. 
                Expert in leveraging <span className="text-gold-400 font-medium">Python, Java, and Oracle DB</span> to 
                streamline Rating & Billing Manager (RBM) processes, achieving performance gains of up to 
                <span className="text-gold-400 font-medium"> 80%</span>.
              </p>
              <p className="text-champagne-400 leading-relaxed mt-4">
                Skilled in designing secure, scalable architectures and automating complex workflows 
                to exceed Service Level Agreements (SLAs) and drive operational efficiency.
              </p>
            </div>

            <div className="glass-card p-8 hover:border-gold-400/30 transition-all duration-500">
              <h3 className="text-2xl font-serif font-bold text-champagne-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400"></span>
                What I Bring
              </h3>
              <p className="text-champagne-300 leading-relaxed">
                With strong analytical and problem-solving skills, I am committed to producing 
                high-quality, maintainable code. I excel in communication, translating complex 
                technical concepts for both technical and non-technical stakeholders. Collaborative 
                and detail-oriented, I bring a proactive approach to process improvement, ensuring 
                the delivery of scalable and efficient software solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 hover:border-gold-400/30 transition-all duration-500 group">
                <div className="text-3xl mb-4">🎓</div>
                <h4 className="font-serif font-bold text-xl text-champagne-100 mb-2 group-hover:text-gold-400 transition-colors">Education</h4>
                <p className="text-champagne-400 text-sm">Associate of Science</p>
                <p className="text-champagne-500 text-sm">University of Bamenda • 2021</p>
              </div>
              <div className="glass-card p-6 hover:border-gold-400/30 transition-all duration-500 group">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="font-serif font-bold text-xl text-champagne-100 mb-2 group-hover:text-gold-400 transition-colors">Certifications</h4>
                <p className="text-champagne-400 text-sm">Professional Scrum Master I & II</p>
                <p className="text-champagne-500 text-sm">SAFe Scrum Master • Agile Leadership</p>
              </div>
              <div className="glass-card p-6 hover:border-gold-400/30 transition-all duration-500 group">
                <div className="text-3xl mb-4">💼</div>
                <h4 className="font-serif font-bold text-xl text-champagne-100 mb-2 group-hover:text-gold-400 transition-colors">Current Role</h4>
                <p className="text-champagne-400 text-sm">Software Engineer</p>
                <p className="text-champagne-500 text-sm">Verizon • Dallas, TX</p>
              </div>
              <div className="glass-card p-6 hover:border-gold-400/30 transition-all duration-500 group">
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="font-serif font-bold text-xl text-champagne-100 mb-2 group-hover:text-gold-400 transition-colors">Specialization</h4>
                <p className="text-champagne-400 text-sm">Billing Automation & Optimization</p>
                <p className="text-champagne-500 text-sm">Enterprise Systems • Data Pipelines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="my-20 px-8">
          <div className="divider-gold"></div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center justify-between mb-12">
            <div>
              <p className="subheading-elegant mb-3">Career</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne-100">Professional Experience</h2>
            </div>
            <a href='/Clement Ndimuangu.docx' download='Clement Ndimuangu Resume.docx'>
              <button className="btn-elegant flex items-center gap-3">
                <MdDownload className="text-xl" />
                Download Resume
              </button>
            </a>
          </div>
          
          <div className="space-y-8">
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
