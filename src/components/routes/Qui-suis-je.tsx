import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgMoi from '../../assets/moi500x.jpg';
import '../../scss/routes/QuiSuisJe.scss';

const QuiSuisJe = () => {
	const head = () => {
		return (
			<MetaTag
				title={import.meta.env.VITE_META_MAIN_TITLE || 'Qui suis-je ?'}
				description='Massothérapeute énergétique et Maitre Reiki Usui, je vous propose, sur Saint Quentin en Yvelines, différents soins et massages énergétiques pour votre bien être: Reiki Usui, Massage des 5 Continents (M5C), Massage assis méthode EAS®... Marie COPHIGNON'
				resume='Infirmière par vocation, Massothérapeute énergétique et Maitre Reiki Usui, je veux prendre soin des autres, de vous différement. Etre là pour vous.'
				forceTitle={true}
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='QuiSuisJe'>
				<div className='article'>
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
								<em>Massothérapeute énergétique</em> et{' '}
								<em>Maitre Reiki Usui</em>, je vous propose, depuis mars 2022,
								sur Saint Quentin en Yvelines, différents soins et massages
								énergétiques pour votre bien être.
							</p>
							<p>
								Infirmière par vocation depuis 18 ans, mon métier de cœur, j’ai
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
									<em>Reiki Usui</em>
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
								m'ont permises de découvrir les soins énergétiques. Elles m'ont
								donné l'envie, en 2020, de me former au{' '}
								<a href='/reiki'>
									<em>Reiki Usui</em>
								</a>
								. Par la suite, j'ai reçu l'initiation du second degré de{' '}
								<a href='/reiki'>
									<em>Reiki Usui</em>
								</a>{' '}
								en 2021. Puis, en septembre 2023, j'ai reçu la dernière
								initiation de{' '}
								<a href='/reiki'>
									<em>Reiki Usui</em>
								</a>
								, le 3<sup>éme</sup> degré dit degré des Maîtres.
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
									<em>Massage des 5 Continents (M5C)</em>
								</a>{' '}
								est le complément idéal des pratiques qui me passionnent. M'y
								former, en 2022, m'est apparu comme une évidence. Il combine à
								la fois l'utilisation des huiles essentielles, du Reiki et
								différentes techniques de massage.
							</p>
							<p>
								Désireuse d'enrichir mes techniques de massages, je me suis
								formée, début 2023, au{' '}
								<a href='/massage-assis-methode-eas'>
									<em>massage assis méthode EAS®</em>
								</a>{' '}
								, un massage énergétique de bien être, relaxant et libérateur.
								Il s'appuie sur une approche très différente de celle du{' '}
								<a href='/massage-des-5-continents'>
									<em>Massage des 5 Continents (M5C)</em>
								</a>
								. De part sa durée ajustable, il est parfaitement adapté au
								monde de l'entreprise.
							</p>
							<p>
								Depuis le 1er Juin 2024, en complément du jeudi au cabinet de
								<a
									href='/consultations#guyancourt'
									title='Lien vers l’adresse du cabinet de Guyancourt'
								>
									{' '}
									Guyancourt
								</a>{' '}
								(78280), je peux maintenant vous accueillir tous les lundis,
								toujours sur rendez-vous uniquement, à{' '}
								<a
									href='/consultations#elancourt'
									title='Lien vers l’adresse du cabinet d’Elancourt'
								>
									Elancourt
								</a>{' '}
								(78990) aux Nouveaux Horizons.
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
				</div>
			</div>
		</>
	);
};

export default QuiSuisJe;
