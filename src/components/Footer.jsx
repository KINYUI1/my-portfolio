import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Clement K. Ndimuangu
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Software Engineer passionate about building innovative solutions 
              and creating exceptional user experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/KINYUI1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <Link
                to="/contact-me"
                className="w-10 h-10 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <CiMail className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link 
                to="/skills" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
              >
                Skills
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <Link 
                to="/contact-me" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 Available for opportunities</p>
              <p>💼 Open to full-time & contract work</p>
              <p>🌍 Remote & On-site</p>
            </div>
            <Link to="/contact-me">
              <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Clement Kinyui Ndimuangu. Built with{" "}
            <FaHeart className="inline text-red-500 text-xs" /> using React & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm font-medium"
            aria-label="Back to top"
          >
            Back to Top
            <MdArrowUpward className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
