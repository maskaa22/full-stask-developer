import './style.css';
import './style@media.css';

function Header() {
  return (
    <div className='header' id='home'>
      <img alt='rectangle-left' src={'./img/left.png'} className='rectangle-left pulsing-img' />
      <div className='container'>
        <div className='flex-center height'>
          <h3 className='my_name'>Mariia</h3>
          <h1 className='my_surname'>Skydan</h1>
          <img alt='my foto' src={'./img/1_18.png'} className='my_foto' />
        </div>
        <h4 className='my_job'>Junior Full Stack</h4>
      </div>
      <img alt='rectangle-rigth' src={'./img/rigth.png'} className='rectangle-rigth pulsing-img2' />
    </div>
  );
}

export default Header;
