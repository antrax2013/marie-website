import { Button } from 'primereact/button';

const Adresse = () => {
  return (
    <div className='adresse'>
      <h1 className='aside'>Consultations</h1>
      <p>Consultations au cabinet le jeudi :</p>
      <ul>
        <ol>1 rue le Corbusier</ol>
        <ol>78280 Guyancourt</ol>
        <ol>Tél: {process.env.REACT_APP_META_NUMTEL}</ol>
      </ul>
      <p>A domicile les autres jours de la semaine</p>
      <h2>Horaires d'ouverture</h2>
      <p>Du lundi au Samedi 9h-19h </p>
      <p>
        <b>Sur rendez-vous uniquement</b>
      </p>
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
