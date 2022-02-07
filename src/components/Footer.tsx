const Footer = () => {
  return (
    <section className='flex flex-column md:flex-row'>
      <span className='hidden md:inline-flex m-1'>
        uniquements sur rendez-vous
      </span>
      <span className='hidden md:inline-flex m-1'> - </span>
      <span className='m-1'>
        Rdv{' '}
        <a type='tel' href={`tel:${process.env.REACT_APP_META_NUMTEL}`}>
          {process.env.REACT_APP_META_NUMTEL}
        </a>
        {process.env.REACT_APP_ACTIVERDV == '1' && (
          <>
            ou en ligne{' '}
            <a
              href={process.env.REACT_APP_URLRDV}
              rel='external'
              target={'_blank'}
            >
              cliquez ici
            </a>
          </>
        )}
      </span>
    </section>
  );
};

export default Footer;
