import * as React from 'react';
import Menu from './tools/Menu';
import logo from '../assets/logo512.png';

const Header = () => {
  return (
    <>
      <nav itemScope itemType='https://schema.org/SiteNavigationElement'>
        <Menu />
      </nav>
      <article className='title'>
        <div className='logo' itemProp='logo'>
          <img
            alt='une fleur de vie, le logo du site'
            title='une fleur de vie, le logo du site'
            src={logo}
            loading='lazy'
          />
        </div>
        <h1>
          {process.env.REACT_APP_META_NAME}
          <br />
          {process.env.REACT_APP_META_TITLE}
        </h1>
      </article>
    </>
  );
};

export default Header;
