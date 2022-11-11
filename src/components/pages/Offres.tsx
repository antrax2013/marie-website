import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/elements/pages/Offres.scss';
import ImgCarteCadeau from '../../assets/Offres/carte-cadeau.png';

const Offres = () => {
  const head = () => {
    return (
      <MetaTag
        title={'Tarifs et Offres'}
        description='Je vous propose, sur Saint Quentin en Yvelines, différentes offres pour mes soins Reiki et Massage des 5 Continents, ou M5C. Venez les découvrir.'
        resume='Mes offres de soins Reiki et Massage des 5 Continents, ou M5C, sont adaptées au plus près de vos besoins.'
        forceTitle={true}
      />
    );
  };

  return (
    <>
      {head()}
      <div className='Offres'>
        <article>
          <h1>Mes offres de soins</h1>
          <section className='paragraphe-1'>
            <section className='paragraphe-content'>
              <p>
                Dans cette espace, vous allez retrouver les tarifs, offres et
                promotions, pour les soins <em>Reiki</em> ou{' '}
                <em>Massage des 5 Continents</em> (<em>M5C</em>).
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Tarifs et préstations</h2>
          <section className='paragraphe-2'>
            <section className='paragraphe-content'>
              <p>
                Pour les prestatations à domicile, j'applique une majoration de
                5€, sur le tarif de la séance, pour le temps de déplacement et
                les frais d'essence. Je peux, ponctuellement, consulter en
                dehors de mon périmètre. Auquel cas appelez moi pour que l'on
                convienne à l'avance du tarif de la consultation.
              </p>
              <i>Règlement par chèque ou espèces</i>
            </section>
          </section>
          <h3>Soins Reiki</h3>
          <section className='paragraphe-3'>
            <section className='paragraphe-content'>
              <h4>Soin holistique - 01h00</h4>
              <table>
                <tr>
                  <th>&nbsp;</th>
                  <th>Cabinet</th>
                  <th>Domicile</th>
                </tr>
                <tr>
                  <td>à l’unité</td>
                  <td>70 €</td>
                  <td>75 €</td>
                </tr>
                <tr>
                  <td>pack 3 soins</td>
                  <td>200 €</td>
                  <td>235 €</td>
                </tr>
                <tr>
                  <td>pack 6 soins</td>
                  <td>390 €</td>
                  <td>420 €</td>
                </tr>
                <tr>
                  <td>pack 12 soins</td>
                  <td>770 €</td>
                  <td>830 €</td>
                </tr>
              </table>
            </section>
            <section className='paragraphe-content'>
              <h4>Soin ciblé - 0h30</h4>
              <table>
                <tr>
                  <th>&nbsp;</th>
                  <th>Cabinet</th>
                  <th>Domicile</th>
                </tr>
                <tr>
                  <td>à l’unité</td>
                  <td>40 €</td>
                  <td>45 €</td>
                </tr>
                <tr>
                  <td>pack 3 soins</td>
                  <td>115 €</td>
                  <td>130 €</td>
                </tr>
                <tr>
                  <td>pack 6 soins</td>
                  <td>225 €</td>
                  <td>255 €</td>
                </tr>
                <tr>
                  <td>pack 12 soins</td>
                  <td>440 €</td>
                  <td>500 €</td>
                </tr>
              </table>
            </section>
          </section>
          <h4>
            Soin à distance{' '}
            <a href='#asterix'>
              <span className='asterix'>*</span>
            </a>
            : 60€
          </h4>
          <section className='paragraphe-4'>
            <section className='paragraphe-content'>
              <p>
                <i>
                  <span className='asterix' id='asterix'>
                    *
                  </span>{' '}
                  Bien qu'il soit possible, en Reiki, de faire des soins à
                  distance. Je ne souhaite pas ouvrir cette pratique à tous mes
                  patients.
                </i>
              </p>
            </section>
          </section>
          <h3>Massage des 5 Continents (M5C)</h3>
          <section className='paragraphe-5'>
            <section className='paragraphe-content'>
              <h4>Soin - 01h30</h4>
              <table>
                <tr>
                  <th>&nbsp;</th>
                  <th>Cabinet</th>
                  <th>Domicile</th>
                </tr>
                <tr>
                  <td>à l’unité</td>
                  <td>90 €</td>
                  <td>95 €</td>
                </tr>
                <tr>
                  <td>pack 3 soins</td>
                  <td>260 €</td>
                  <td>275 €</td>
                </tr>
                <tr>
                  <td>pack 6 soins</td>
                  <td>500 €</td>
                  <td>530 €</td>
                </tr>
                <tr>
                  <td>pack 12 soins</td>
                  <td>990 €</td>
                  <td>1 050 €</td>
                </tr>
              </table>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Carte cadeau</h2>
          <section className='paragraphe-6'>
            <section className='paragraphe-content'>
              <p>
                D'une validté de un an, la carte cadeau est l'idéale pour offir
                un soin à un proche.
              </p>
            </section>
            <aside>
              <div>
                <img
                  src={ImgCarteCadeau}
                  className='img-carte-cadeau'
                  alt='Carte cadeau'
                  title='carte cadeau'
                  loading='lazy'
                />
              </div>
            </aside>
          </section>
        </article>
      </div>
    </>
  );
};

export default Offres;
