import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-200 border-t border-gold-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-champagne-100">
              C<span className="text-gold-400">.</span> Ndimuangu
            </h3>
            <p className="text-champagne-500 text-sm leading-relaxed">
              Software Engineer specializing in enterprise billing systems, automation, 
              and high-performance data solutions. Building technology that matters.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/KINYUI1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <Link
                to="/contact-me"
                className="w-11 h-11 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                aria-label="Email"
              >
                <CiMail className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gold-400">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link 
                to="/skills" 
                className="text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                Skills
              </Link>
              <Link 
                to="/projects" 
                className="text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <Link 
                to="/contact-me" 
                className="text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gold-400">Availability</h4>
            <div className="space-y-3 text-sm text-champagne-400">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                Open to new opportunities
              </p>
              <p>📍 Dallas, TX</p>
              <p>💼 Full-time & Contract</p>
              <p>🌐 Remote & On-site</p>
            </div>
            <Link to="/contact-me">
              <button className="mt-2 btn-elegant text-sm px-6 py-3">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-champagne-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Clement Ndimuangu. Crafted with precision.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-champagne-500 hover:text-gold-400 transition-colors duration-300 text-sm font-medium group"
            aria-label="Back to top"
          >
            Back to Top
            <MdArrowUpward className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
