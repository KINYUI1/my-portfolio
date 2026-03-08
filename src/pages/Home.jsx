import author from "../images/author.PNG";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdDownload } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-100 page-transition overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Elegant gold ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-1000 blur-sm"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-30 animate-glow"></div>
              <img
                src={author}
                alt="Clement Ndimuangu"
                className="relative rounded-full w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-cover object-top shadow-elegant ring-2 ring-gold-400/30 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400/50"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400/50"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 animate-pulse"></span>
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slide-up">
              <p className="subheading-elegant">Software Engineer</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-champagne-100 leading-[0.9]">
                Clement
                <br />
                <span className="text-gold-gradient">Ndimuangu</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-champagne-400 leading-relaxed max-w-2xl font-light animate-slide-up stagger-2">
              Telecom Billing & Automation Engineer with a proven track record of 
              optimizing high-volume data systems. Expert in leveraging 
              <span className="text-gold-400 font-medium"> Python</span>, 
              <span className="text-gold-400 font-medium"> Java</span>, and 
              <span className="text-gold-400 font-medium"> Oracle DB</span> to 
              streamline enterprise processes, achieving performance gains of up to 80%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up stagger-3">
              <Link to="/projects">
                <button className="group btn-elegant flex items-center justify-center gap-3">
                  Explore My Work
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
              <a href='/Clement Ndimuangu.docx' download='Clement Ndimuangu Resume.docx'>
                <button className="btn-outline-elegant flex items-center justify-center gap-3">
                  <MdDownload className="text-xl" />
                  Download Resume
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 justify-center lg:justify-start pt-8 animate-slide-up stagger-4">
              <a
                href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-300 hover:text-gold-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://github.com/KINYUI1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-300 hover:text-gold-400"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <Link 
                to="/contact-me"
                className="w-14 h-14 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-300 hover:text-gold-400"
                aria-label="Email"
              >
                <CiMail className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="divider-gold"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 glass-card group hover:border-gold-400/30 transition-all duration-500">
            <div className="text-5xl font-serif font-bold text-gold-gradient mb-3">2+</div>
            <div className="text-champagne-400 font-medium tracking-wide">Years Experience</div>
          </div>
          <div className="text-center p-8 glass-card group hover:border-gold-400/30 transition-all duration-500">
            <div className="text-5xl font-serif font-bold text-gold-gradient mb-3">80%</div>
            <div className="text-champagne-400 font-medium tracking-wide">Performance Gains</div>
          </div>
          <div className="text-center p-8 glass-card group hover:border-gold-400/30 transition-all duration-500">
            <div className="text-5xl font-serif font-bold text-gold-gradient mb-3">17M+</div>
            <div className="text-champagne-400 font-medium tracking-wide">Records Processed</div>
          </div>
          <div className="text-center p-8 glass-card group hover:border-gold-400/30 transition-all duration-500">
            <div className="text-5xl font-serif font-bold text-gold-gradient mb-3">4</div>
            <div className="text-champagne-400 font-medium tracking-wide">Certifications</div>
          </div>
        </div>
      </div>

      {/* Featured Technologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <p className="subheading-elegant mb-4">Core Expertise</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne-100">Technologies I Excel In</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Java', 'Python', 'Spring Boot', 'Oracle DB', 'Apache Kafka', 'React', 'Node.js', 'Linux'].map((tech) => (
            <span 
              key={tech}
              className="px-6 py-3 glass-card text-champagne-300 font-medium hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
