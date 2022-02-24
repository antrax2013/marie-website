import { Button } from 'primereact/button';

const Adresse = () => {
  return (
    <div className='adresse'>
      <h2>Horaires d'ouverture</h2>
      <p>Du lundi au vendredi 09h00-19h00</p>
      <p>
        <b>Sur rendez-vous uniquement</b>
      </p>
      <p>
        Consultations au{' '}
        <a
          target={'_blank'}
          href={process.env.REACT_APP_LINK_CABINET_CAROLE}
          rel='external'
        >
          cabinet
        </a>{' '}
        le jeudi :
      </p>
      <ul>
        <ol>1 rue le Corbusier</ol>
        <ol>78280 Guyancourt</ol>
        <ol>
          <a href={`tel:${process.env.REACT_APP_META_NUMTEL}`}>
            Tél: {process.env.REACT_APP_META_NUMTEL}
          </a>
        </ol>
      </ul>
      <p>Consultations à domicile les autres jours de la semaine</p>
      <p>
        <Button className='facebook p-0'>
          <i className='pi pi-facebook px-2'></i>
          <span className='facebook'>Facebook</span>
        </Button>
      </p>
    </div>
  );
};

export default Adresse;
