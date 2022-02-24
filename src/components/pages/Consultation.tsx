import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/elements/pages/Consultations.scss';
import ImgMap from '../../assets/maps.jpg';

const Consultations = () => {
  const head = () => {
    return (
      <MetaTag
        title={'Consultations'}
        description='Pour mes consultations, je vous accueille, tous les jeudis au cabinet de Guyancourt. Les autres jours de la semaine, je me déplace à votre domicile.'
        resume='Organisation de mes consultations.'
      />
    );
  };

  return (
    <>
      {head()}
      <div className='Consultations'>
        <article>
          <h1>Consultations</h1>
          <section className='paragraphe-1-1'>
            <h2>Organisations de mes consultations</h2>
            <section className='paragraphe-content'>
              <p>
                Je consulte, uniquement sur <b>rendez-vous</b> du lundi au
                vendredi de 09h00 à 19h00. Pour prendre rendez-vous, je suis
                joignable par téléphone au{' '}
                <a href={`tel:${process.env.REACT_APP_META_NUMTEL}`}>
                  {process.env.REACT_APP_META_NUMTEL}
                </a>
              </p>
              <p>
                Le jeudi, j'aurais le plaisir de vous recevoir au cabinet de{' '}
                <a
                  href='https://www.reflexologie-carolejacob.fr'
                  target='_blank'
                >
                  Carole Jacob
                </a>{' '}
                et d'
                <a
                  href='https://www.annenicolaskinesiologue.com/'
                  target='_blank'
                >
                  Anne Nicolas
                </a>{' '}
                à Guyancourt. Les autres jours de la semaine, je me déplace et
                consulte à domicile.
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-1-2'>
            <section className='paragraphe-content'>
              <h3>Consultation au cabinet de Guyancourt</h3>
              <p>Le cabinet se trouve au:</p>
              <ul>
                <ol>1, rue Le Corbusier</ol>
                <ol>78280 Guyancourt</ol>
              </ul>
            </section>
            <aside>
              <div>
                <a
                  target={'_blank'}
                  href={process.env.REACT_APP_LINK_CABINET_CAROLE}
                  rel='external'
                >
                  <img
                    src={ImgMap}
                    className='img-consultations-map'
                    alt='Plan du quartier 1 rue Le Corbusier à Guyancourt'
                    title='Plan du quartier 1 rue Le Corbusier à Guyancourt'
                  />
                </a>
              </div>
            </aside>
          </section>
          <section className='paragraphe-1-3'>
            <section className='paragraphe-content perimetre'>
              <h3>Consultation à domicile</h3>
              <p>
                Je me déplace à votre domicile sur Saint-Quentin-en-Yvelines et
                ses environs :
              </p>
              <ul className='ul-perimetre'>
                <li>Maurepas</li>
                <li>Elancourt</li>
                <li>Coignières</li>
                <li>La Verrière</li>
                <li>Le Mesnil-Saint-Denis</li>
                <li>Trappes</li>
                <li>Guyancourt</li>
                <li>Montigny-le-Bretonneux</li>
                <li>Voisins-le-Bretonneux</li>
              </ul>
              <p>
                {' '}
                Je peux, ponctuellement, consulter en dehors de ce périmètre.
                Appelez moi pour que l'on voit ce qu'il est possible de faire.
              </p>
              <p>
                Pour travailler dans des conditions optimales, j'ai besoin d'un
                espace calme et dégagé d'environ 2m&nbsp;x&nbsp;1.5m pour que je
                puisse déployer ma table de massage et disposer d'assez de place
                pour tourner autour.
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-2'>
            <h2>Tarifs et préstations</h2>
            <section className='paragraphe-content'>
              <p>
                Pour les prestatations à domicile, j'applique une majoration de
                5€ pour le temps de déplacement et les frais d'essence. Je peux,
                ponctuellement, consulter en dehors de mon périmètre. Auquel cas
                appelez moi pour que l'on convienne à l'avance du tarif de la
                consultation.
              </p>
            </section>
          </section>
          <section className='paragraphe-2-1'>
            <section className='paragraphe-content'>
              <h3>Soins Reiki</h3>
              <ul>
                <li>Au cabinet: 70€</li>
                <li>A domicile: 75€</li>
                <li>
                  Soin à distance <span className='asterix'>*</span>: 60€
                </li>
              </ul>
            </section>
            <section className='paragraphe-content'>
              <h3>Massage Des 5 Continents</h3>
              <ul>
                <li>Au cabinet: 90€</li>
                <li>A domicile: 95€</li>
              </ul>
            </section>
          </section>
          <section className='paragraphe-3'>
            <section className='paragraphe-content'>
              <p>
                <i>
                  <span className='asterix'>*</span> Il est possible, en Reiki,
                  de faire des soins à distance. Je ne souhaite, cependant, pas
                  ouvrir cette prattique à tous mes patients. Je la resérve
                  uniquement aux personnes à qui j'ai déjà fait au moins un
                  soin.
                </i>
              </p>
            </section>
          </section>
        </article>
      </div>
    </>
  );
};

export default Consultations;
