
import './style.css';
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";



function Touch() {
  return (
    <div className='touch'>
      <div className='container'>
        <h2 className='color-white'>Get in touch</h2>
        <div className='flex-center'><hr className='bgcolor-white' /></div>

        <div className='flex-between margin-top opacity'>
          <div>
            <div className='flex-center'><FiPhone className='icon-touch'/></div>
            <p className='p-name-touch'>Phone</p>
            <p className='text-center'>+380984651987</p>
          </div>
          <div className='margin-left'>
          <div className='flex-center'><CiLocationOn className='icon-touch'/></div>
            <p className='p-name-touch'>Address</p>
            <p className='text-center'>Lokhvytsia, st. Gagarina, 51</p>
          </div>
          <div>
          <div className='flex-center'><MdOutlineEmail className='icon-touch'/></div>
            <p className='p-name-touch'>Email</p>
            <p className='text-center'>skydanmariia@gmail.com</p>
          </div>
        </div>

        <div className='flex-around margin-top-100'>
          <div className='copyright opacity'>Copyright <MdOutlineCopyright /> 2024 by Mariia Skydan</div>
          <div className='social-networks'>
          <RiLinkedinBoxLine onClick={() => window.location.assign('https://www.linkedin.com/in/mariia-skydan/')}/>
          <IoLogoGithub onClick={() => window.location.assign('https://github.com/maskaa22')}/>
          <IoLogoInstagram onClick={() => window.location.assign('https://www.instagram.com/mariigorevna656/')}/>
          </div>
        </div>

        
      </div>
      <img alt='end' src={'./img/end.png'} className='end-triangle' />
    </div>
  );
}

export default Touch;
