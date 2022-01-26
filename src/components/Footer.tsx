const Footer = () => {
  return (
    <section className='flex flex-column md:flex-row'>
          <span className='hidden md:inline-flex m-1'>
            uniquements sur rendez-vous
          </span>
          <span className='hidden md:inline-flex m-1'> - </span>
          <span className='m-1'>
            rdv{' '}
            <a type='tel' href='tel:01.02.03.04.05'>
              01.02.03.04.05
            </a>{' '}
            ou en ligne <a href='#'>cliquez ici</a>
          </span>
        </section>
  );
};

export default Footer;
