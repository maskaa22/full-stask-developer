import './style.css';
import './style@media.css';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {

  const [isOpen, setOpen] = useState();

  useEffect(() => {
    if(isOpen) {
      document.body.classList.add('body-overflow-hiden');
    } else if(!isOpen) {
      document.body.classList.remove('body-overflow-hiden');
    }
  }, [isOpen]);

  return (
    <header className={`menu`}>
      <div className='container'>
        <div className='flex-between heigth100'>
          <div className='flex-center al-it-cen'><img alt='Skydan' src={'./icon-logo.png'} className='logo' /></div>
          <ul className={`header__nav ${isOpen ? 'active-open' : ''}`}>
            <li className='header__nav-item'><a href='#about' onClick={() => setOpen(!isOpen)}>About</a></li>
            <li className='header__nav-item'><a href='#skills' onClick={() => setOpen(!isOpen)}>Skills</a></li>
            <li className='header__nav-item'><a href='#portfolio' onClick={() => setOpen(!isOpen)}>Portfolio</a></li>
            <li className='header__nav-item'><a href='#education' onClick={() => setOpen(!isOpen)}>Education</a></li>
            <li className='header__nav-item'><a href='#contact' onClick={() => setOpen(!isOpen)}>Contact me</a></li>
          </ul>
          <button className='header__menu-button' onClick={() => setOpen(!isOpen)}><GiHamburgerMenu /></button>
        </div>
      </div>
    </header>
  );
}

export default Menu;
