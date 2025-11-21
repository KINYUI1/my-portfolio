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
    title:'Get In Touch',
    intro:"Let's work together"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <Headings {...info} />
        
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Profile Card */}
          <div className='lg:col-span-1'>
            <div className='bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300'>
              <div className='relative'>
                <img 
                  src={contactImg} 
                  alt="contact" 
                  className='w-full h-64 object-cover'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className='p-6 space-y-4'>
                <h2 className='text-3xl font-bold text-gray-900 text-center'>
                  Clement Kinyui Ndimuangu
                </h2>
                <h3 className='text-xl font-semibold text-indigo-600 text-center'>
                  Full Stack Developer
                </h3>
                <p className='text-gray-600 text-center leading-relaxed'>
                  Available for full-time, part-time and contract positions. Contact me and let's talk!
                </p>
                
                <div className="flex gap-4 justify-center pt-4">
                  <a
                    href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 text-white shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/KINYUI1?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 text-white shadow-lg"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <Link 
                    to="/contact-me"
                    className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 text-white shadow-lg"
                    aria-label="Email"
                  >
                    <CiMail className="text-xl" />
                  </Link>
                  <a
                    href='/Clement Ndimuangu.docx' 
                    download='Clement Ndimuangu Resume.docx'
                    className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 text-white shadow-lg"
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
            <div className='bg-white shadow-2xl rounded-2xl p-6 sm:p-8 hover:shadow-3xl transition-shadow duration-300'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Send me a message</h3>
              
              <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor="name" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Name *
                    </label>
                    <input 
                      type="text" 
                      id='name' 
                      name='name' 
                      required
                      className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none'
                      placeholder='Your name'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      id='phone' 
                      name='number' 
                      className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none'
                      placeholder='Your phone number'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    required
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label htmlFor="subject" className='block text-sm font-semibold text-gray-700 mb-2'>
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    id='subject' 
                    name='subject' 
                    required
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor="message" className='block text-sm font-semibold text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea 
                    id='message' 
                    name='message' 
                    required
                    rows="6"
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none resize-none'
                    placeholder='Your message here...'
                  />
                </div>

                <button 
                  type="submit" 
                  className='w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
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