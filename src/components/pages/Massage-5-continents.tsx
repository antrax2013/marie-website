import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgM5C from '../../assets/M5C/massage-5-continents.png';
import ImgM5CColonne from '../../assets/M5C/m5c-colonne.png';
import ImgM5CDos from '../../assets/M5C/m5c-bas-dos.png';
import ImgM5CBras from '../../assets/M5C/m5c-bras.png';
import '../../scss/elements/pages/M5C.scss';
import MetaTag from '../tools/MetaTag';

const Massage5Continents = () => {
  const head = () => {
    return (
      <MetaTag
        title='Massage des 5 Continents'
        description='Le Massage des 5 Continents, ou M5C, est un massage combinant différentes méthodes de massages, un soin énergétique Reiki et 
      des huiles essentielles. Un lâcher prise physique et mental durable.'
        resume="Le Massage des 5 Continents (M5C): l'alliance subtile de différentes techniques de massages, d'un soin énergétique Reiki et des huiles essentielles pour votre bien être."
      />
    );
  };

  return (
    <>
      {head()}
      <div className='M5C'>
        <article>
          <h1>Massage des 5 Continents</h1>
          <h2>Qu'est-ce que le Massage des 5 Continents ?</h2>
          <section className='paragraphe-1'>
            <section className='paragraphe-content'>
              <p>
                Le <em>Massage des 5 Continents</em>, ou M5C, est une technique,
                qui combine différentes méthodes de massages, un soin
                énergétique, des huiles végétales et des huiles essentielles.
                Cette association fait du <em>Massage des 5 Continents</em> un
                massage unique, puissant permettant un lâcher prise physique et
                mental.
              </p>
            </section>
          </section>
          <section className='paragraphe-1-1'>
            <aside>
              <div>
                <img
                  src={ImgM5C}
                  className='img-m5c'
                  alt='Massage des 5 Continents'
                  title='logo du Massage des 5 Continents'
                  loading='lazy'
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
                  Pour le soin énergétique, j'ai choisi de m'appuyer sur les
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
                <li> Huile d'amande douce</li>
                <li> Huile de macadamia</li>
                <li> Huile d'argan</li>
                <li> Huile de noyau d'abricot</li>
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
          <h2>Qui peut recevoir le Massage des 5 Continents ?</h2>
          <section className='paragraphe-2'>
            <section className='paragraphe-content'>
              <p>
                Durant le <em>Massage des 5 Continents</em>, je masse votre dos,
                votre ventre, vos bras et vos jambes. Si pour des raisons
                médicales, certaines zones sont contre-indiquées, j'adapterai le
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
                  alt='Massage des 5 Continents - Massage du haut de la colonne vertébrale'
                  title='Massage des 5 Continents - Massage du haut de la colonne vertébrale'
                  loading='lazy'
                />
              </div>
            </aside>
            <section className='paragraphe-content'>
              <b>
                <p>
                  Le <em>Massage des 5 Continents</em> est contre-indiqué pour :{' '}
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
                <li> Les femmes allaitantes</li>
                <li> Les personnes épileptiques </li>
                <li> Les personnes atteintes de cancer</li>
                <li>
                  {' '}
                  Les personnes suivant un traitement homéopathique fort{' '}
                </li>
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
                  <em>Massage des 5 Continents</em>. Il est également préférable
                  de manger léger avant un <em>Massage des 5 Continents</em>, de
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
                Le <em>Massage des 5 Continents</em> est un massage
                biodynamique. Il réveille les processus naturels
                d'auto-guérison. Il permet de se décharger des toxines et des
                mémoires émotionnelles, laissant place à des energies de plaisir
                et de vie. Le <em>Massage des 5 Continents</em> apporte un
                lâcher prise physique et mental profond et durable.
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
                  loading='lazy'
                />
              </div>
            </aside>
            <section className='paragraphe-content'>
              <p>
                Le <em>Massage des 5 Continents</em> n'est :
              </p>
              <b>
                <ul>
                  <li>Ni une pratique de la masso-kinésithérapie</li>
                  <li>Ni une pratique médicale</li>
                  <li>Ni un massage naturiste</li>
                  <li>Ni un massage tantrique</li>
                  <li>Ni un massage à caractère sexuel</li>
                </ul>
              </b>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Comment se déroule une séance de Massage des 5 Continents ?</h2>
          <section className='paragraphe-4'>
            <section className='paragraphe-content'>
              <p>
                Le <em>Massage des 5 Continents</em> dure environ 1h15 et se
                déroule en 3 temps :
              </p>
              <ul>
                <li>
                  Nous commençons par un entretien pour échanger, ensemble, sur
                  les raisons qui vous motivent à recevoir le{' '}
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
                  Lors du soin, vous êtes dévêtus, allongés confortablement sur
                  ma table de soin. Je vous recouvre d'une serviette pour ne pas
                  prendre froid. Je commence le massage par l'application d'un
                  complexe d'huiles détoxifiantes au niveau du dos puis des
                  jambes. Nous passons ensuite à la partie relaxation du dos et
                  des jambes. <br /> A l'aide d'un complexe d'huiles, de
                  massages doux, je stimule votre organisme dans le but de
                  lâcher prise, revitaliser et stimuler votre système
                  immunitaire. Cette première partie du{' '}
                  <em>Massage des 5 Continents</em>, s'achève sur un soin
                  énergétique. Le Reiki permet de faire circuler l'énergie
                  vitale directement à l'intérieur de votre corps, là où vous en
                  avez besoin. <br />
                  Pour la seconde partie du massage, je masse votre ventre, vos
                  jambes, vos bras, vos mains et le haut du torse. Le déroulé du
                  massage est identique à la première partie: une phase
                  détoxifiante, une phase relaxante et un soin Reiki. Je conclue
                  le soin par un massage, doux de votre visage.
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
                  loading='lazy'
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
                Mon savoir-faire, mes qualités d'écoute et d'empathie sont à
                votre service pour vous accompagner durant cette séance. Malgré
                leurs bienfaits, l'utilisation de plusieurs huiles essentielles
                n’est pas anodine. Elles ne sont pas recommandées à tout le
                monde. Afin de satisfaire un plus grand nombre, il est possible
                de n'utiliser que des huiles végétales. Je m'adapte à vos
                contre-indications.
              </p>
            </section>
          </section>
        </article>
      </div>
    </>
  );
};

export default Massage5Continents;
