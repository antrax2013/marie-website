import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgM5C from '../../assets/M5C/massage-5-continents.png';
import ImgM5CColonne from '../../assets/M5C/m5c-colonne.png';
import ImgM5CDos from '../../assets/M5C/m5c-bas-dos.png';
import ImgM5CBras from '../../assets/M5C/m5c-bras.png';
import '../../scss/elements/pages/M5C.scss';

const Massage5Continents = () => {
  return (
    <div className='M5C'>
      <article>
        <h1>Massage des 5 continents</h1>
        <h2>Qu'est-ce que le Massage Des 5 continents ?</h2>
        <section className='paragraphe-1'>
          <section className='paragraphe-content'>
            <p>
              Le <em>Massage Des 5 Continents</em> est une technique, qui
              combine différentes méthodes de massages, un soin energétique et
              des huiles végétales et des huiles essentielles. Cette association
              fait du <em>Massage Des 5 Continents</em> un massage unique,
              puissant permettant un lâcher prise physique et mental.
            </p>
          </section>
        </section>
        <section className='paragraphe-1-1'>
          <aside>
            <div>
              <img
                src={ImgM5C}
                className='img-m5c'
                alt='Massage des 5 continents'
                title='logo du Massage des 5 continents'
              />
            </div>
          </aside>
          <section className='paragraphe-content'>
            <section>
              <p>Les techniques de massages utilisées sont basées sur :</p>
              <ul>
                <li> Le massage hawaïen Lomi-Lomi </li>
                <li> Le massage californien </li>
                <li> Le massage suédois </li>
                <li> Le massage Ayurvédique </li>
                <li> Le massage Tui-Na</li>
              </ul>

              <p>
                Pour le soin energétique, j'ai choisi de m'appuier sur les
                techniques de soin du <em>Reiki</em>.
              </p>
            </section>
          </section>
        </section>
        <section className='paragraphe-1-2'>
          <section className='paragraphe-content'>
            <p>Les huiles végétales : </p>
            <ul>
              <li> Huile d'avocat</li>
              <li> huile d'amande douce </li>
              <li> huile de macadamia </li>
              <li> huile d'argan </li>
              <li>Huile de noyau d'abricot </li>
            </ul>
          </section>
          <section className='paragraphe-content he'>
            <p>Les huiles essentielles : </p>
            <ul className='ul-he'>
              <li> Romarin</li>
              <li> Eucalyptus</li>
              <li> Niaouli</li>
              <li> Citron</li>
              <li> Cyprès</li>
              <li> Lavande</li>
              <li> Tea tree</li>
              <li> Menthe poivrée</li>
              <li> Ylang-ylang</li>
              <li> Géranium</li>
              <li> Orange douce</li>
              <li> Myrrhe</li>
              <li> Ravintsara</li>
              <li> Gingembre</li>
              <li> Sarriette</li>
            </ul>
          </section>
        </section>
        <ParagraphSeparator />
        <h2>Qui peut recevoir le Massage Des 5 Continents ?</h2>
        <section className='paragraphe-2'>
          <section className='paragraphe-content'>
            <p>
              Durant le <em>Massage des 5 Continents</em>, je masse votre dos,
              votre ventre, vos bras et vos jambes. Si pour des raisons
              médicales, certaines zones sont contre-indiquées, j'adapterais le
              massage en conséquence.
            </p>
          </section>
        </section>
        <section className='paragraphe-2-2'>
          <aside>
            <div>
              <img
                src={ImgM5CColonne}
                className='img-m5c-colonne'
                alt='Massage des 5 Continents - Massage du haut de la colonne vertebrale'
                title='Massage des 5 Continents - Massage du haut de la colonne vertebrale'
              />
            </div>
          </aside>
          <section className='paragraphe-content'>
            <b>
              <p>
                Le <em>Massage Des 5 Continents</em> est contre-indiqué pour :{' '}
              </p>
              <ul>
                <li> Les femmes enceintes</li>
                <li> Les personnes atteintes de cancer </li>
                <li>
                  {' '}
                  Les personnes souffrant de troubles psychotiques,
                  schizophréniques ou de dissociation de la personnalité
                </li>
                <li> Les enfants </li>
              </ul>
            </b>
            <p>
              En raison de la présence des huiles essentielles, il est
              recommandé de n'utiliser que des huiles végétales pour :{' '}
            </p>
            <ul>
              <li> Les femmes enceintes ou allaitantes</li>
              <li> Les personnes épileptiques </li>
              <li> Les personnes atteintes de cancer</li>
              <li> Les personnes suivant un traitement homéopathique fort </li>
              <li> Les personnes hypersensibles</li>
              <li> Les personnes asthmatiques</li>
            </ul>
            <b>En cas de doute, je n'utiliserai que des huiles végétales.</b>
          </section>
        </section>
        <section className='paragraphe-2'>
          <section className='paragraphe-content'>
            <p>
              <i>
                A noter que certaines huiles utilisées sont photosensibles. Il
                convient donc de ne pas s'exposer au soleil après un{' '}
                <em>Massage Des 5 Continents</em>. Il est également préférable
                de manger léger avant un <em>Massage Des 5 Continents</em>, de
                retirer bijoux et piercings.
              </i>
            </p>
          </section>
        </section>
        <ParagraphSeparator />
        <section className='paragraphe-3-1'>
          <section className='paragraphe-content'>
            <h2>Pour quelles raisons consulter ?</h2>
            <p>
              Le <em>Massage des 5 Continents</em> est un massage biodynamique.
              Il reveille les processus naturels d'auto-guérison. Il permet de
              se décharger des toxines et des mémoires émotionnelles, laissant
              place à des energies de plaisir et de vie. Le{' '}
              <em>Massage des 5 Continents</em> apporte un lâcher prise physique
              et mental profond et durable.
            </p>
          </section>
        </section>
        <section className='paragraphe-3-2'>
          <aside>
            <div>
              <img
                src={ImgM5CDos}
                className='img-m5c-dos'
                alt='Massage des 5 Continents - Massage du bas du dos'
                title='Massage des 5 Continents - Massage du bas du dos'
              />
            </div>
          </aside>
          <section className='paragraphe-content'>
            <p>
              <em>Massage des 5 Continents</em> n'est :
            </p>
            <b>
              <ul>
                <li>Ni une pratique de la masso-kinésithérapie</li>
                <li>Ni une pratique médicale</li>
                <li>Ni massages naturistes</li>
                <li>Ni tantriques</li>
                <li>Ni à caractère sexuel</li>
              </ul>
            </b>
          </section>
        </section>
        <ParagraphSeparator />
        <h2>Comment se déroule une séance de le Massage Des 5 Continents ?</h2>
        <section className='paragraphe-4'>
          <section className='paragraphe-content'>
            <p>
              Le <em>Massage des 5 Continents</em> dure environ 1h15 et se
              déroule en 3 temps :
            </p>
            <ul>
              <li>
                Nous commençons par entretien pour échanger, ensemble, sur les
                raisons qui vous motivent à recevoir le{' '}
                <em>Massage des 5 Continents</em> et sur les éventuelles
                contre-indications par rapport aux huiles essentielles.
              </li>
            </ul>
          </section>
        </section>
        <section className='paragraphe-4'>
          <section className='paragraphe-content'>
            <ul>
              <li>
                Lors du soin, vous êtes dévétu, allongé confortablement sur ma
                table de soin. Je vous recouvre d'une serviette pour ne pas
                prendre froid. Je diffuse une musique douce et agréable qui
                contribue à votre détente. Je commence le massage par
                l'application d'un complexe d'huiles détoxifiantes au niveau du
                dos puis des jambes. Nous passons ensuite à la partie relaxation
                du dos et des jambes. A l'aide d'un complexe d'huiles, de
                massages doux, je stimule votre organisme dans le but de lâcher
                prise, revitaliser et stimuler votre système immunitaire. Cette
                première partie du <em>Massage des 5 Continents</em>, s'achève
                sur un soin energétique. Le Reiki permet de faire circuler
                l'énergie vitale directement à l'intérieur de votre corps, là où
                vous en avez besoin. Pour la seconde partie du massage, je vais
                masser voter ventre, vos bras et vos jambes. L'enchainement du
                massage est identique à la première partie: une phase
                détoxifiante, une phase relaxante et un soin Reiki.
              </li>
            </ul>
          </section>
          <aside>
            <div>
              <img
                src={ImgM5CBras}
                className='img-m5c-bras'
                alt='Massage des 5 Continents - Massage du bras'
                title='Massage des 5 Continents - Massage du bras'
              />
            </div>
          </aside>
        </section>
        <section className='paragraphe-4'>
          <section className='paragraphe-content'>
            <ul>
              <li>
                La séance se termine par un échange pour connaitre votre
                ressenti durant le soin.
              </li>
            </ul>
            <p>
              Mon savoir faire, mes qualités d'écoute et d'empathie sont à votre
              service pour vous accompagner durant cette séance. Malgré leurs
              biens faits, l'utilisation de plusieurs huiles esssentielles n’est
              pas anodine. Elles ne sont pas recommandées à tout le monde. Afin
              de sastisfaire une plus grand nombre, il est possible de
              n'utiliser que des huiles végetales. Je m'adapte à vos
              contre-indications.
            </p>
          </section>
        </section>
      </article>
    </div>
  );
};

export default Massage5Continents;
