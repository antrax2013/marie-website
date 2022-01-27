const Footer = () => {
  return (
    <section className='flex flex-column md:flex-row'>
      <span className='hidden md:inline-flex m-1'>
        uniquements sur rendez-vous
      </span>
      <span className='hidden md:inline-flex m-1'> - </span>
      <span className='m-1'>
        rdv{' '}
        <a type='tel' href={`tel:${process.env.REACT_APP_META_NUMTEL}`}>
          {process.env.REACT_APP_META_NUMTEL}
        </a>{' '}
        ou en ligne <a href='#'>cliquez ici</a>
      </span>
    </section>
  );
};

export default Footer;
