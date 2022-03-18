import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgMoi from '../../assets/moi.jpg';
import '../../scss/elements/pages/QuiSuisJe.scss';

const QuiSuisJe = () => {
  const head = () => {
    return (
      <MetaTag
        title={process.env.REACT_APP_META_MAIN_TILTE || 'Qui suis-je ?'}
        description='Infirmière par vocation, mon métier de cœur, je veux prendre soin des autres différemment: prendre le temps, être à l’écoute, être
        pleinement disponible pour pouvoir accompagner autrement.'
        resume='Infirmière par vocation, je veux prendre soin des autres, de vous différement. Etre là pour vous.'
        forceTitle={true}
      />
    );
  };

  return (
    <>
      {head()}
      <div className='QuiSuisJe'>
        <article>
          <h1>Qui suis-je ?</h1>
          <section className='paragraphe-1'>
            <aside>
              <div>
                <img
                  src={ImgMoi}
                  className='img-qui-suis-je-moi'
                  alt='Marie Cophignon'
                  title='Marie Cophignon'
                />
              </div>
            </aside>
            <section className='paragraphe-content'>
              <p>
                Infirmière par vocation depuis 17 ans, mon métier de cœur, j’ai
                pris la décision de prendre soin des autres différemment.
                Prendre soin des autres, pour moi, c'est prendre le temps, être
                à l’écoute, être pleinement disponible pour pouvoir accompagner
                autrement.
              </p>
              <p>
                N'ayant trouvé de réponse à des maux personnels dans la médecine
                traditionnelle, je me suis tournée vers des prises en charge
                alternatives: l’hypnose, la réflexologie, la naturopathie, les
                huiles essentielles, l’homéopathie, le{' '}
                <a href='/reiki'>
                  <em>Reiki</em>
                </a>{' '}
                … J'y ai trouvé un réel soulagement. Cela m’a fait prendre
                conscience que l’on pouvait prendre soin de soi, et des autres,
                de multiples façons.
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-2'>
            <section className='paragraphe-content'>
              <p>
                Je me suis, dans un premier temps, formée à l'utilisation des
                huiles essentielles. Puis j'ai rencontré de belles personnes qui
                m'ont permise de découvrir les soins énergétiques. Elles m'ont
                donné l'envie, il y a deux ans de me former au{' '}
                <a href='/reiki'>
                  <em>Reiki</em>
                </a>{' '}
              </p>
              <p>
                Les huiles essentielles et le{' '}
                <a href='/reiki'>
                  <em>Reiki</em>
                </a>
                , sont des alliés précieux de mon quotidien. Je ne saurais plus
                m'en passer. Ils m'aident à faire face aux aléas de la vie.
              </p>
              <p>
                Le{' '}
                <a href='/massage-des-5-continents'>
                  <em>Massage Des 5 Continents</em>
                </a>{' '}
                est le complément idéal des pratiques qui me passionnent. M'y
                former m'est apparu comme une évidence. Il combine à la fois
                l'utilisation des huiles essentielles, du Reiki et différentes
                techniques de massage.
              </p>
            </section>
          </section>
          <ParagraphSeparator />
          <section className='paragraphe-3'>
            <section className='paragraphe-content'>
              <p>
                Pouvoir apporter un soulagement physique, psychique et
                émotionnel aux personnes qui m’entourent est un véritable
                cadeau. Et je souhaite partager cela avec vous.
              </p>
            </section>
          </section>
        </article>
      </div>
    </>
  );
};

export default QuiSuisJe;
