
import './style.css';
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdBarcode } from "react-icons/io";

function About() {
  return (
    <div className='about'>
      <div className='container'>
        <h2 id='about'>About me</h2>
        <div className='flex-center'><hr /></div>
        <p className='about-p margin-top'>Beginning Full stack developer. 
        I am engaged in self-improvement in this field, if I come across unfamiliar material - 
        I am looking for example that I cannot find - I will politely ask my colleagues.
        I know how to work in a team and want to develop professionally.</p>
        <div className='grid margin-top'>
          <article>
          <div className='flex-center'><FaLaptopCode className='icon' /></div>
            <p className='flex-center margin-top20 about-label'>FrontEnd</p>
            <p className='flex-center margin-top20 text-center'>Nothing can be better than bringing a design to life with code and adding a little sparkle to it.</p>
          </article>
          <article>
          <div className='flex-center'><IoMdBarcode className='icon' /></div>
            <p className='flex-center margin-top20 about-label'>BackEnd</p>
            <p className='flex-center margin-top20 text-center'>Working with routes, databases and other curiosities adds magic to creating a full-fledged website.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
