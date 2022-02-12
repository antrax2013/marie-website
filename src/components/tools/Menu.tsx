import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo512.png';

interface item {
  label: string;
  command: () => void;
  className: string;
}

const Menu = ({ ...props }) => {
  const start = <img alt='logo' src={logo} className='logo' />;
  const end = (
    <a href={process.env.REACT_APP_URLRDV} rel='external' target={'_blank'}>
      Prendre rendez-vous
    </a>
  );

  const className = 'm-1';
  const selectedClassName = 'm-1 selected';

  const onClick = (index: string) => {
    window.location.pathname = '/' + index;
  };

  const getClassName = (pathName: string) => {
    pathName = pathName.toLowerCase();
    const windowPathName = window.location.pathname
      .replace('/', '')
      .toLowerCase();

    let entires: string[] = [
      'qui-suis-je',
      'reiki',
      'massage-des-5-continents',
      'contact',
    ];

    const exists = entires.indexOf(windowPathName) !== -1;

    if (pathName === windowPathName && exists) {
      return selectedClassName;
    }
    if (pathName === 'qui-suis-je' && !exists) {
      return selectedClassName;
    }
    return className;
  };

  let items: item[] = [
    {
      label: 'Qui suis-je ?',
      command: () => {
        onClick('qui-suis-je');
      },
      className: getClassName('qui-suis-je'),
    },
    {
      label: 'Reiki',
      className: getClassName('reiki'),
      command: () => {
        onClick('reiki');
      },
    },
    {
      label: 'Massage des 5 Continents',
      className: getClassName('massage-des-5-continents'),
      command: () => {
        onClick('massage-des-5-continents');
      },
    },
    {
      label: 'Contact',
      className: getClassName('contact'),
      command: () => {
        onClick('contact');
      },
    },
  ];

  return (
    <Menubar
      model={items}
      {...props}
      start={start}
      end={process.env.REACT_APP_ACTIVERDV == '1' && end}
    />
  );
};

export default Menu;
