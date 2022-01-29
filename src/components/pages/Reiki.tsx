import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgReiki from '../../assets/Reiki/Reiki.svg';
import ImgReikiTete from '../../assets/Reiki/Reiki-tete.jpg';
import ImgReikiGenou from '../../assets/Reiki/Reiki-genou.jpg';
import ImgReikiPied from '../../assets/Reiki/Reiki-pied.jpg';
import '../../scss/pages/Reiki.css';

const Reiki = () => {
  return (
    <article>
      <h1>Reiki</h1>

      <h2>Qu'est-ce que le Reiki ?</h2>
      <section className='paragraphe-1'>
        <aside>
          <div>
            <img
              src={ImgReiki}
              className='img-reiki-kanji'
              alt='Reiki'
              title='Reiki en kanji'
            />
          </div>
        </aside>
        <section className='paragraphe-content'>
          <p>
            Le <em>Reiki</em> signifie en Japonnais Energie de vie universelle.
          </p>
          <ul>
            <ol>
              <i>Rei</i> : c'est l'universaolté, le saint, le don, l'esprit
            </ol>
            <ol>
              <i>Ki</i> : c'est l'energie. Elle existe dans toutes les
              traditions. Elle est appelée, selon la tradition, Qi, Kundalini,
              lumière ou encore Esprit Saint chez les Chrétiens... Elle est
              également appelée la source ou la consience universelle.
            </ol>
          </ul>
          <p>
            Le <em>Reiki</em> est une méthode d'harmonisation énergétique par
            apposition des mains. Ce n'est pas un massage. Il apporte un
            supplément d'énergie à l'organisme et participe au retour à
            l'équilibre du corps et de l'esprit.
          </p>
          <p>
            <strong>
              Un soin <em>Reiki</em>, en aucun cas, ne substitue à un traitement
              médical allopathique. Le <em>Reiki</em> ne soigne pas, il
              accompagne vers la guérison.
            </strong>
          </p>
        </section>
      </section>
      <ParagraphSeparator />
      <h2>Qui peut recevoir du Reiki ?</h2>
      <section className='paragraphe-2'>
        <section className='paragraphe-content'>
          <p>
            Le <em>Reiki</em> est un soin holisitque doux qui convient à tous :
            bébés, enfants, adultes, personnes âgées, les animaux, les
            plantes...
          </p>
          <strong>
            En cas de troubles psychotiques, schizophréniques ou de dissociation
            de la personnalité, le <em>Reiki</em> est contre indiqué.
          </strong>
          <p>
            Sinon dans les autres cas, il n'y a pas de contre indication et ce
            quelque soit la distance.
          </p>
        </section>
        <aside>
          <div>
            <img
              src={ImgReikiTete}
              className='img-reiki-tete'
              alt='Soin Reiki - Apposition des mains sur le visage'
              title='Soin Reiki - Apposition des mains sur le visage'
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
              alt='Soin Reiki - Apposition des mains sur le genou'
              title='Soin Reiki - Apposition des mains sur le genou'
            />
          </div>
        </aside>
        <section className='paragraphe-content'>
          <h2>Pour quelles raisons consulter ?</h2>
          <p>
            Le <em>Reiki</em> favorise le bien-être physique, émotionnel,
            psychliogique et psychique. Il apporte détente, confort, bien-être
            et équilibre. Il agit sur :
            <ul>
              <li>le stress, l'anxiété, burn-out</li>
              <li>la fatigue, insomnie, manque de vitalité</li>
              <li>
                les état émotionnel, perte de confiance, blocages, schémas
                répétitifs
              </li>
              <li>
                les douleurs chroniques, tensions musculaires et articulaires{' '}
              </li>
              <li>
                Accompagnement au changement que ce soit dans la vie personnel
                ou professionel
              </li>
            </ul>
            Par son approche hliistique le soin <em>Reiki</em> contribue à
            libèrer les blocages et les tensions, renforce le système
            immunitaire, atténue la douleur et élimine les toxines. Il apporte
            des bienfaits dans tous les domaines de la vie.
          </p>
        </section>
      </section>
      <ParagraphSeparator />
      <h2>Comment se déroule un soin Reiki ?</h2>
      <section className='paragraphe-4'>
        <section className='paragraphe-content'>
          <p>
            Une séance type de <em>Reiki</em> dure environ 1h00 et se déroule en
            3 temps :
          </p>
          <ul>
            <li>
              Nous commençons par entretien pour échanger, ensemble, sur les
              raisons qui vous motivent à recevoir un soin <em>Reiki</em>.
            </li>
            <li>
              Lors du soin, vous êtes habillé, allongé confortablement sur ma
              table de soin. Pendant que je procéde à une série d'appositions
              douces des mains sur les différentes partie de votre corps, je
              diffuse une musique agréable qui contribue à votre détente et
              votre bien être. Laissez-vous aller, lachez prise. Profitez de cet
              instant de douceur et de calme, l'énergie du <em>Reiki</em> se
              diffuse là où vous en avez besoin.
            </li>
            <li>
              La séance se termine par un échange pour connaitre votre ressenti
              durant le soin.
            </li>
          </ul>
          <p>
            Mon savoir faire, mes qualités d'écoute et d'empathie sont à votre
            service pour vous accompagner vers le bien être et la guérison.
            J'adapte, mes soins selon vos besoins.
          </p>
        </section>
        <aside>
          <div>
            <img
              src={ImgReikiPied}
              className='img-reiki-tete'
              alt='Soin Reiki - Apposition des mains sur les pieds'
              title='Soin Reiki - Apposition des mains sur les pieds'
            />
          </div>
        </aside>
      </section>
    </article>
  );
};

export default Reiki;
