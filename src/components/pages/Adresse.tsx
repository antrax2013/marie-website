import { Button } from 'primereact/button';

const Adresse = () => {
  return (
    <>
      <h1 className='aside'>Adresse</h1>
      <ul>
        <ol>17 rue des Paquerettes</ol>
        <ol>78310 Maurepas</ol>
        <ol>Tél: {process.env.REACT_APP_META_NUMTEL}</ol>
      </ul>
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
    </>
  );
};

export default Adresse;
