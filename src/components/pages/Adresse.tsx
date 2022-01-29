import { Button } from 'primereact/button';

const Adresse = () => {
  return (
    <>
      <h1 className='aside'>Adresse</h1>
      <p>17 rue des Paquerettes</p>
      <p>78310 Maurepas</p>
      <p>Tél: {process.env.REACT_APP_META_NUMTEL}</p>
      <h2>Horaires d'ouverture</h2>
      <p>Du lundi au Samedi 9h-19h </p>
      <p>
        <strong>Sur rendez-vous uniquement</strong>
      </p>
      <p>
        <Button className='facebook p-0'>
          <i className='pi pi-facebook px-2'></i>
          <span>Facebook</span>
        </Button>
      </p>
    </>
  );
};

export default Adresse;
