import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgReiki from '../../assets/Reiki/Reiki.svg';
import ImgReikiVentre from '../../assets/Reiki/Reiki-ventre.png';
import ImgReikiGenou from '../../assets/Reiki/Reiki-genou.png';
import ImgReikiPied from '../../assets/Reiki/Reiki-pied.png';
import '../../scss/elements/pages/Reiki.scss';
import MetaTag from '../tools/MetaTag';

const Reiki = () => {
  const head = () => {
    return (
      <MetaTag
        title='Soin Reiki Usui'
        description="Le Reiki Usui est un soin énergétique par apposition des mains. Il apporte un
        supplément d'énergie à l'organisme et participe au retour à
        l'équilibre du corps et de l'esprit."
        resume="Le Reiki Usui est un soin énergétique holisitque
        par apposition des mains venant du Japon. Ce n'est pas un massage."
      />
    );
  };

  return (
    <>
      {head()}
      <div className='Reiki'>
        <article>
          <h1>Reiki Usui</h1>

          <h2>Qu'est-ce que le Reiki Usui ?</h2>
          <section className='paragraphe-1'>
            <aside>
              <div>
                <img
                  src={ImgReiki}
                  className='img-reiki-kanji'
                  alt='Reiki'
                  title='Reiki en kanji'
                  loading='lazy'
                />
              </div>
            </aside>
            <section className='paragraphe-content'>
              <p>
                Le <em>Reiki</em> signifie en japonais énergie de vie
                universelle.
              </p>
              <ul>
                <ol>
                  <i>Rei</i> : c'est l'universalité, le saint, le don, l'esprit
                </ol>
                <ol>
                  <i>Ki</i> : c'est l'énergie. Selon la tradition, on l'appelle
                  : Qi, Kundalini, lumière, la source ou la conscience
                  universelle ou encore Esprit Saint chez les Chrétiens...
                </ol>
              </ul>
              <p>
                Le <em>Reiki Usui</em> est une méthode d'harmonisation
                énergétique par apposition des mains. Elle a été fondée par le
                Japonais Mikao Usui à la suite d’une révélation mystique qui
                l’aurait conduit à la fin du XIX<sup>éme</sup> siècle à recevoir
                les « clefs de la guérison ».
              </p>
              <p>
                Ce n'est pas un massage. Il apporte un supplément d'énergie à
                l'organisme et participe au retour à l'équilibre du corps et de
                l'esprit.
              </p>
            </section>
          </section>
          <section>
            <section>
              <p>
                <b>
                  Un soin <em>Reiki Usui</em>, en aucun cas, ne se substitue à
                  un traitement médical allopathique. Le <em>Reiki Usui</em> ne
                  soigne pas, il accompagne vers la guérison.
                </b>
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Qui peut recevoir du Reiki Usui ?</h2>
          <section className='paragraphe-2'>
            <section className='paragraphe-content'>
              <p>
                Le <em>Reiki Usui</em> est un soin énergétique holistique doux
                qui convient à tous : bébés, enfants, adultes, personnes âgées,
                les animaux, les plantes...
              </p>
              <b>
                En cas de troubles psychotiques, schizophréniques ou de
                dissociation de la personnalité, le <em>Reiki</em> est
                contre-indiqué.
              </b>
              <p>
                Sinon dans les autres cas, il n'y a pas de contre-indication et
                ce quelle que soit la distance.
              </p>
            </section>
            <aside>
              <div>
                <img
                  src={ImgReikiVentre}
                  className='img-reiki-ventre'
                  alt='Soin Reiki Usui - Apposition des mains sur le ventre'
                  title='Soin Reiki Usui - Apposition des mains sur le ventre'
                  loading='lazy'
                />
              </div>
            </aside>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-3'>
            <aside>
              <div>
                <img
                  src={ImgReikiGenou}
                  className='img-reiki-genou'
                  alt='Soin Reiki Usui - Apposition des mains sur le genou'
                  title='Soin Reiki Usui - Apposition des mains sur le genou'
                  loading='lazy'
                />
              </div>
            </aside>
            <section className='paragraphe-content'>
              <h2>Pour quelles raisons consulter ?</h2>
              <p>
                Le <em>Reiki Usui</em> favorise le bien-être physique,
                émotionnel, psychologique et psychique. Il apporte détente,
                confort, bien-être et équilibre. Il agit sur :
              </p>
              <ul>
                <li>Le stress, l'anxiété, le burn-out</li>
                <li>La fatigue, l'insomnie, le manque de vitalité</li>
                <li>
                  Les états émotionnels, la perte de confiance, les blocages,
                  les schémas répétitifs
                </li>
                <li>
                  Les tensions musculaires, les douleurs chroniques et
                  articulaires{' '}
                </li>
                <li>
                  Il accompagne au changement que ce soit dans la vie
                  personnelle ou professionnelle
                </li>
              </ul>
              <p>
                Par son approche holisitque le soin énergétique{' '}
                <em>Reiki Usui</em> contribue à libérer les blocages et les
                tensions, renforce le système immunitaire, atténue la douleur et
                élimine les toxines. Il apporte des bienfaits dans tous les
                domaines de la vie.
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <h2>Comment se déroule un soin énergétique Reiki Usui ?</h2>
          <section className='paragraphe-4'>
            <section className='paragraphe-content'>
              <p>
                Une séance type de <em>Reiki Usui</em> dure environ 1h00 et se
                déroule en 3 temps :
              </p>
              <ul>
                <li>
                  Nous commençons par un entretien pour échanger, ensemble, sur
                  les raisons qui vous motivent à recevoir un soin énergétique{' '}
                  <em>Reiki Usui</em>.
                </li>
                <li>
                  Durant la séance, vous êtes habillés, allongés confortablement
                  sur ma table de soin. Je procède à une série d'appositions
                  douces des mains sur les différentes parties de votre corps.
                  Laissez-vous aller, lâchez prise. Profitez de cet instant de
                  douceur et de calme, l'énergie du <em>Reiki</em> se diffuse là
                  où vous en avez besoin.
                </li>
                <li>
                  La séance se termine par un échange pour connaitre votre
                  ressenti durant le soin.
                </li>
              </ul>
            </section>
            <aside>
              <div>
                <img
                  src={ImgReikiPied}
                  className='img-reiki-tete'
                  alt='Soin Reiki Usui - Apposition des mains sur les pieds'
                  title='Soin Reiki Usui - Apposition des mains sur les pieds'
                  loading='lazy'
                />
              </div>
            </aside>
          </section>
          <section className='paragraphe-5'>
            <section className='paragraphe-content'>
              <h3>
                Le soin énergétique <em>Reiki Usui</em> ciblé
              </h3>
              <p>
                Le soin énergétique ciblé est un soin <em>Reiki Usui</em> plus
                court, d'une durée de 30 minutes environ, qui va à l'essentiel.
                Il est particulièrement adapté aux troubles d'ordre physique
                localisés : douleurs de dos, de genoux, de ventre... Il se
                concentre sur une zone du corps en particulier nécessitant
                généralement plusieurs séances espacées dans le temps.
              </p>
            </section>
          </section>
          <section className='paragraphe-5'>
            <section className='paragraphe-content'>
              <p>
                Mon savoir-faire, mes qualités d'écoute et d'empathie sont à
                votre service pour vous accompagner vers le bien-être et la
                guérison. J'adapte mes soins énergétiques selon vos besoins.
              </p>
            </section>
          </section>
        </article>
      </div>
    </>
  );
};

export default Reiki;
