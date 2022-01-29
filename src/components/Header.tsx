import * as React from 'react';
import Menu from './tools/Menu';
import logo from '../assets/fleur-vie.svg';

const Header = () => {
  return (
    <>
      <nav>
        <Menu />
      </nav>
      <article className='title'>
        <div className='logo'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <h1>{process.env.REACT_APP_META_MAIN_TILTE_LIGTH}</h1>
      </article>
    </>
  );
};

export default Header;
