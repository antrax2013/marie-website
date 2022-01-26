import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

interface item {
  label: string;
  command: () => void;
  className: string;
}

const Menu = ({ ...props }) => {
  // const start = (
  //   <img
  //     alt='logo'
  //     src='showcase/images/logo.png'
  //     onError={(e) =>
  //       (e.target.src =
  //         'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
  //     }
  //     height='40'
  //     className='mr-2'
  //   ></img>
  // );
  const end = <Button label='Prendre rendez-vous' />;
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

    const exists = entires.indexOf(windowPathName) != -1;

    if (pathName == windowPathName && exists) {
      return selectedClassName;
    }
    if (pathName == 'qui-suis-je' && !exists) {
      return selectedClassName;
    }
    return className;
  };

  let items: item[] = [
    {
      label: 'Qui suis-je',
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

  return <Menubar model={items} {...props} end={end} />;
};

export default Menu;
