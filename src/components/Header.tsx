import * as React from 'react';
import Menu from './tools/Menu';
import logo from '../assets/logo512.png';

const Header = () => {
  return (
    <>
      <nav>
        <Menu />
      </nav>
      <article className='title'>
        <div className='logo'>
          <img alt='logo' src={logo} />
        </div>
        <h1>
          Marie COPHIGNON
          <br />
          Thérapeute energétique
        </h1>
      </article>
    </>
  );
};

export default Header;
