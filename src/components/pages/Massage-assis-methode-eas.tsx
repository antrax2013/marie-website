import ParagraphSeparator from '../tools/Paragraph-Separator';
// import ImgMA_EAS from '../../assets/MA-EAS/massage-assis-methode-eas.png';
// import ImgM5CColonne from '../../assets/MA-EAS/m5c-colonne.png';
// import ImgM5CDos from '../../assets/MA-EAS/m5c-bas-dos.png';
// import ImgM5CBras from '../../assets/MA-EAS/m5c-bras.png';
// import '../../scss/elements/pages/MA-EAS.scss';
import MetaTag from '../tools/MetaTag';

const MassageAssisMethodeEAS = () => {
  const head = () => {
    return (
      <MetaTag
        title='Massage assis méthode EAS®'
        description='Le massage assis méthode EAS® (École Des Arts Du Souffle), est un massage énergétique, assis, de bien être, fondé sur les théories énergétiques chinoises.'
        resume='Le massage assis méthode EAS®, est un massage énergétique, assis, de bien être, fondé sur les théories énergétiques chinoises.'
      />
    );
  };

  return (
    <>
      {head()}
      <div className='MA-EAS'>
        <article>
          <h1>Le massage assis méthode EAS®</h1>
          <h2>Qu'est-ce que le massage assis méthode EAS® ?</h2>
          <section className='paragraphe-1'>
            <section className='paragraphe-content'>
              <p>
                Le <em>massage assis méthode EAS®</em>, a été créé par Jean-Noël
                Poucet, à l'
                <a
                  href='https://ecoledesartsdusouffle.com/nos-formations/massage-assis-eas/'
                  target={'_blank'}
                >
                  <b>É</b>cole des <b>A</b>rts du <b>S</b>ouffle (EAS®)
                </a>{' '}
                de Nouzonville. Fondé sur des techniques énegertiques de la
                médecine traditionnelle chinoise des méridiens et des points
                shiatsu, il apporte un apaisement profond et durable.
              </p>
              <p>
                Puissant anti-stress, le <em>massage assis méthode EAS®</em>{' '}
                permet de relaxer, détendre et redynamiser rapidement le corps
                et l'esprit.
              </p>
              <i>Ce soin sera disponible avant l'été 2023.</i>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Qui peut recevoir le massage assis méthode EAS® ?</h2>
          <section className='paragraphe-2'>
            <section className='paragraphe-content'>
              <p>
                Durant le <em>massage assis méthode EAS®</em>, je masse votre
                dos, votre nuque et vos bras. Si pour des raisons médicales,
                certaines zones sont contre-indiquées, j'adapterai le massage en
                conséquence.
              </p>
            </section>
          </section>
          <section className='paragraphe-2-2'>
            <aside>
              <div>
                {/* <img
                  src={ImgM5CColonne}
                  className='img-m5c-colonne'
                  alt='Massage des 5 Continents - Massage du haut de la colonne vertébrale'
                  title='Massage des 5 Continents - Massage du haut de la colonne vertébrale'
                  loading='lazy'
                /> */}
              </div>
            </aside>
            <section className='paragraphe-content'>
              <b>
                <p>
                  Le <em>massage assis méthode EAS®</em> est contre-indiqué pour
                  les personnes souffrant :{' '}
                </p>
                <ul>
                  <li>
                    {' '}
                    De troubles psychotiques, schizophréniques ou de
                    dissociation de la personnalité
                  </li>
                  <li>
                    {' '}
                    De douleurs aigües ou d'une inflamation au niveau des zones
                    massées
                  </li>
                </ul>
              </b>
            </section>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-3-1'>
            <section className='paragraphe-content'>
              <h2>Pour quelles raisons consulter ?</h2>
              <p>
                Le <em>massage assis méthode EAS®</em> est un massage de bien
                être. Il soulage les douleurs musculaires et libère l'esprit.
              </p>
              <p>
                Par son action relaxante, il favorise la reconnexion au corps et
                ses sensations. Ainsi, après une séance de{' '}
                <em>massage assis méthode EAS®</em>, on ressort plus à l'écoute
                de son corps, plus vigilant, plus disponible.
              </p>
              <p>
                Ses effets sont reconnus en entreprise sur la productivité et le
                bien être des personnels.
              </p>
            </section>
          </section>
          <section className='paragraphe-3-2'>
            <aside>
              <div>
                {/* <img
                  src={ImgM5CDos}
                  className='img-m5c-dos'
                  alt='Massage des 5 Continents - Massage du bas du dos'
                  title='Massage des 5 Continents - Massage du bas du dos'
                  loading='lazy'
                /> */}
              </div>
            </aside>
            <section className='paragraphe-content'>
              <p>
                Le <em>massage assis méthode EAS®</em> n'est :
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
          {/* <ParagraphSeparator />
          <h2>Comment se déroule une séance de assage assis méthode EAS® ?</h2>
          <section className='paragraphe-4'>
            <section className='paragraphe-content'>
              <p>
                D'une durée variable allant, selon votre choix, de 15 à 45
                minutes, le <em>massage assis méthode EAS®</em> se déroule en 3
                temps :
              </p>
              <ul>
                <li>
                  Nous commençons par un entretien pour échanger, ensemble, sur
                  les raisons qui vous motivent à recevoir le{' '}
                  <em>massage assis méthode EAS®</em> et sur les éventuelles
                  contre-indications.
                </li>
              </ul>
            </section>
          </section>
          <section className='paragraphe-4'>
            <section className='paragraphe-content'>
              <ul>
                <li>
                  Lors du soin, vous êtes habillé, confortablement assis sur ma
                  chaise de massage. ........
                </li>
              </ul>
            </section>
            <aside>
              <div>
                {/* <img
                  src={ImgM5CBras}
                  className='img-m5c-bras'
                  alt='Massage des 5 Continents - Massage du bras'
                  title='Massage des 5 Continents - Massage du bras'
                  loading='lazy'
                /> * /}
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
                votre service pour vous accompagner durant cette séance
                personnalisée. J'adapte mes soins énergétiques à vos besoins et
                contre-indications.
              </p>
            </section>
          </section> */}
        </article>
      </div>
    </>
  );
};

export default MassageAssisMethodeEAS;
