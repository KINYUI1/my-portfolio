import contactImg from '../images/contactMe.jpg'
import { FaLinkedinIn, FaGithub,FaDownload } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import { toast} from 'react-toastify';
import Headings from "../components/Headings";

const ContactMe = () => {
  const info = {
    title:'Contact',
    intro:"Let's Connect"
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0qlkhaj', 'template_k6ofdep', form.current, '8apBThDvOGpozBB14')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully!")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again.")
      });
  };

  return (
    <div className="min-h-screen bg-dark-100 py-16 px-4 sm:px-6 lg:px-8 page-transition">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Headings {...info} />
        
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Profile Card */}
          <div className='lg:col-span-1'>
            <div className='glass-card overflow-hidden hover:border-gold-400/30 transition-all duration-500'>
              <div className='relative'>
                <img 
                  src={contactImg} 
                  alt="contact" 
                  className='w-full h-72 object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent"></div>
              </div>
              
              <div className='p-8 space-y-4 -mt-12 relative'>
                <h2 className='font-serif text-3xl font-bold text-champagne-100'>
                  Clement Ndimuangu
                </h2>
                <h3 className='text-lg font-medium text-gold-400'>
                  Software Engineer
                </h3>
                <p className='text-champagne-400 leading-relaxed'>
                  Available for full-time positions and contract work. 
                  Specializing in enterprise solutions and automation.
                </p>
                
                <div className="divider-gold my-6"></div>
                
                <div className="space-y-3 text-sm text-champagne-500">
                  <p className="flex items-center gap-3">
                    <span className="text-gold-400">📍</span>
                    Dallas, TX
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-gold-400">📧</span>
                    ndiclementkinyui@gmail.com
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-gold-400">📱</span>
                    301-793-5217
                  </p>
                </div>

                <div className="flex gap-4 justify-start pt-6">
                  <a
                    href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/KINYUI1?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href='/Clement Ndimuangu.docx' 
                    download='Clement Ndimuangu Resume.docx'
                    className="w-12 h-12 glass-card flex justify-center items-center rounded-full hover:bg-gold-400/20 hover:border-gold-400/50 transform hover:scale-110 transition-all duration-500 text-champagne-400 hover:text-gold-400"
                    aria-label="Download Resume"
                  >
                    <FaDownload />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='glass-card p-8 sm:p-10 hover:border-gold-400/30 transition-all duration-500'>
              <h3 className='font-serif text-2xl font-bold text-champagne-100 mb-2'>Send a Message</h3>
              <p className='text-champagne-500 mb-8'>Have a project in mind? Let's discuss how we can work together.</p>
              
              <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor="name" className='block text-sm font-medium text-champagne-300 mb-2'>
                      Name <span className="text-gold-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id='name' 
                      name='name' 
                      required
                      className='w-full px-4 py-4 bg-dark-200/50 border border-gold-400/10 rounded-lg text-champagne-200 placeholder-champagne-600 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all duration-300 outline-none'
                      placeholder='Your name'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className='block text-sm font-medium text-champagne-300 mb-2'>
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      id='phone' 
                      name='number' 
                      className='w-full px-4 py-4 bg-dark-200/50 border border-gold-400/10 rounded-lg text-champagne-200 placeholder-champagne-600 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all duration-300 outline-none'
                      placeholder='Your phone number'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-champagne-300 mb-2'>
                    Email <span className="text-gold-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    required
                    className='w-full px-4 py-4 bg-dark-200/50 border border-gold-400/10 rounded-lg text-champagne-200 placeholder-champagne-600 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all duration-300 outline-none'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label htmlFor="subject" className='block text-sm font-medium text-champagne-300 mb-2'>
                    Subject <span className="text-gold-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id='subject' 
                    name='subject' 
                    required
                    className='w-full px-4 py-4 bg-dark-200/50 border border-gold-400/10 rounded-lg text-champagne-200 placeholder-champagne-600 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all duration-300 outline-none'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-champagne-300 mb-2'>
                    Message <span className="text-gold-400">*</span>
                  </label>
                  <textarea 
                    id='message' 
                    name='message' 
                    required
                    rows="6"
                    className='w-full px-4 py-4 bg-dark-200/50 border border-gold-400/10 rounded-lg text-champagne-200 placeholder-champagne-600 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all duration-300 outline-none resize-none'
                    placeholder='Tell me about your project...'
                  />
                </div>

                <button 
                  type="submit" 
                  className='btn-elegant w-full sm:w-auto'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactMe