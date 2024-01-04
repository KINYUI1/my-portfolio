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
    title:'Contact me',
    intro:'send me an email'
  }

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_0qlkhaj', 'template_k6ofdep', form.current, '8apBThDvOGpozBB14')
    .then((result) => {
        console.log(result.text);
        toast.success("message sent")
    }, (error) => {
        console.log(error.text);
        toast.error("something went wrong message not sent")
    });
};

  return (
    <div>
      <div className="px-32 py-8 sm:px-40">
        <Headings {...info} />
      </div>
    <div className='px-40 grid grid-cols-3 gap-10 h-screen'>
      <div className='shadow-2xl p-2 rounded-xl max-w-xl 2xl:h-5/6'>
        <img src={contactImg} alt="contact image" className='rounded-xl'/>
        <h2 className='capitalize text-5xl pt-4 font-bold text-center text-shadow'>clement kinyui ndimuangu</h2>
        <h3 className='text-3xl capitalize font-bold text-center pt-4'>full stack developer</h3>
        <p className='text-xl text-center pt-4'>Available for full-time,part time and contract positions.Contact me let's talk</p>
        <div className="flex gap-10 justify-center py-4">
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 text-slate-50">
            <a
              href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 shadow-xg shadow-stone-600 text-slate-50">
            <a
              href="https://github.com/KINYUI1?tab=repositories"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 text-slate-50">
            <Link to="/contact-me">
              <CiMail />
            </Link>
          </div>
          <div className="w-12 h-12 bg-stone-700 flex justify-center items-center rounded-full hover:bg-yellow-100 hover:text-stone-700 hover:scale-110 ease-in duration-300 text-slate-50">
            <a
              href='./Clement Kinyui Ndimuangu Resume.docx' download='clement kinyui ndimuangu resume.docx'
            >
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
      <div className='shadow-2xl p-2 col-span-2 rounded-xl 2xl:h-5/6'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='sm:grid grid-cols-2 gap-4'>
            <div className=''>
            <label htmlFor="name" className='block pt-4'>NAME</label>
            <input type="text" id='name' name='name' className='h-12 border-zinc-800 border-4 rounded-xl w-full' />
            </div>
            <div className=''>
            <label htmlFor="phone" className='block pt-4'>PHONE</label>
            <input type="number" id='phone' name='number' className='h-12 border-zinc-800 border-4 rounded-xl w-full'/>
            </div>
          </div>
          <div className=''>
            <label htmlFor="email" className='block pt-4'>EMAIL</label>
            <input type="email" id='email' name='email' className='h-12 border-zinc-800 border-4 rounded-xl w-full'/>
            </div>
          <div className=''>
            <label htmlFor="subject" className='block pt-4'>SUBJECT</label>
            <input type="text" id='subject' name='subject' className='h-12 border-zinc-800 border-4 rounded-xl w-full'/>
            </div>
          <div className='mb-6'>
            <label htmlFor="message" className='block pt-4'>MESSAGE</label>
            <textarea type="text" id='message' name='message' className='h-40 border-zinc-800 border-4 rounded-xl w-full'/>
            </div>
            <button type="submit" className='bg-stone-700 px-8 text-white h-10 rounded-lg w-full hover:scale-105 ease-in duration-200 sm:w-52 m-auto flex justify-center items-center  hover:bg-yellow-100 hover:text-black'>SEND</button>
        </form>
      </div>
    </div>
    </div>
  )
}
export default ContactMe