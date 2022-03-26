import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../../assets/logo512.png';

interface item {
  label: string;
  command: () => void;
  className: string;
  url: string;
}

const Menu = ({ ...props }) => {
  const start = <img alt='logo ' itemProp='logo' src={logo} className='logo' />;
  const end = () => {
    switch (process.env.REACT_APP_ACTIVERDV || 0) {
      case '1':
        return (
          <a
            href={process.env.REACT_APP_URLRDV}
            rel='external'
            target={'_blank'}
          >
            Prendre rendez-vous
          </a>
        );
        break;
      case '2':
        return (
          <a
            href={'tel:' + process.env.REACT_APP_META_NUMTEL}
            rel='external'
            target={'_blank'}
          >
            Prendre rendez-vous : {process.env.REACT_APP_META_NUMTEL}
          </a>
        );
        break;
      default:
        return <></>;
    }
  };

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
      'consultations',
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
      url: '/qui-suis-je',
      command: () => {
        onClick('qui-suis-je');
      },
      className: getClassName('qui-suis-je'),
    },
    {
      label: 'Reiki',
      url: '/reiki',
      className: getClassName('reiki'),
      command: () => {
        onClick('reiki');
      },
    },
    {
      label: 'Massage des 5 Continents',
      url: '/massage-des-5-continents',
      className: getClassName('massage-des-5-continents'),
      command: () => {
        onClick('massage-des-5-continents');
      },
    },
    {
      label: 'Consultations',
      url: '/consultations',
      className: getClassName('consultations'),
      command: () => {
        onClick('consultations');
      },
    },
    {
      label: 'Contact',
      url: '/contact',
      className: getClassName('contact'),
      command: () => {
        onClick('contact');
      },
    },
  ];

  return <Menubar model={items} {...props} start={start} end={end} />;
};

export default Menu;
