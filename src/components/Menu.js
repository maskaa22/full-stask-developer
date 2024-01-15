
import './style.css';

function Menu() {
  return (
    <header className='menu'>
      <div className='container'>
        <div className='flex-between heigth100'>
          {/* <div className='header-logo'>Skydan</div> */}
          <div className='flex-center al-it-cen'><img alt='Skydan' src={'./icon-logo.png'} className='logo'/></div>
          <ul className='header__nav'>
            <li className='header__nav-item'><a href='#about'>About</a></li>
            <li className='header__nav-item'><a href='#skills'>Skills</a></li>
            <li className='header__nav-item'><a href='#portfolio'>Portfolio</a></li>
            <li className='header__nav-item'><a href='#education'>Education</a></li>
            <li className='header__nav-item'><a href='#contact'>Contact me</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Menu;
