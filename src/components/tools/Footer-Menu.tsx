import { Button } from 'primereact/button';

const FooterMenu = ({ ...props }) => {
  const onClick = (index: string) => {
    window.location.pathname = '/' + index;
  };

  return (
    <>
      <section>
        <Button
          label='Politique de confidentialité'
          className='p-button-secondary p-button-text'
          onClick={() => onClick('politique-de-confidentialite')}
        />
        <Button
          label='Plan du site'
          className='p-button-secondary p-button-text'
          onClick={() => onClick('plan-du-site')}
        />
      </section>
      <section>
        <i className='siret'>N°Siret : 910 427 988 00019</i>
      </section>
    </>
  );
};

export default FooterMenu;
