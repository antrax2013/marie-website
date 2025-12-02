import MetaTag from '../../modules/MetaTag';
import ParagraphSeparator from '../fragments/Paragraph-Separator';
import ImgMoi from '../../assets/moi500x.jpg';
import MassageAssisEAS from '../../assets/Massage-assis-EAS/massage-assis-eas-cou.png';
import Massage5Continents from '../../assets/M5C/m5c-colonne.png';
import SoinRekiUsui from '../../assets/Reiki/Reiki-genou.png';
import '../../scss/routes/Accueil.scss';

import ReviewsCarousel from '../fragments/Reviews-Carousel';
import Faq from '../fragments/Faq';
import SocialNetworks from '../fragments/Social-Neworks';
import Product, { iProduct } from '../fragments/Product';
import McImage from '../fragments/Image';
import Cta from '../fragments/Cta';

const Accueil = () => {
	const head = () => {
		return (
			<MetaTag
				title={`Massages & Reiki en Yvelines - ${
					import.meta.env.VITE_META_MAIN_TITLE
				}`}
				description='Massages énergétiques et Reiki dans les Yvelines. Cabinet à Élancourt et Guyancourt, soins à domicile. Relaxation profonde, sur rendez-vous.'
				resume='Massages énergétiques et Reiki dans les Yvelines. Cabinet à Élancourt et Guyancourt, soins à domicile. Relaxation profonde, sur rendez-vous.'
			/>
		);
	};

	const products: iProduct[] = [
		{
			header: 'Le massage assis méthode EAS®',
			description: 'Un massage énergétique rapide aux effets immédiats.',
			image: {
				path: MassageAssisEAS,
				alt: 'Une photo de moi, Marie COPHIGNON, en train de faire un massage du dos assis méthode EAS® un client.',
				className: 'img-massage-assis-eas',
				title:
					'Moi, Marie COPHIGNON, en train de faire un massage du dos assis méthode EAS® un client.',
			},
			content:
				'Allié idéal au quotidien comme en entreprise, le massage assis EAS® apaise le stress, libère les tensions et invite à une détente profonde. Sur une chaise ergonomique, en quelques minutes, ce massage du dos et de la nuque, redonne vitalité, clarté d’esprit et une disponibilité intérieure précieuse.',

			cta: {
				link: '/massage-assis-methode-eas',
				title: 'Cliquez ici pour découvrir le massage assis méthode EAS®.',
			},
			bloquoteContent:
				'Un véritable soutien pour traverser avec sérénité les défis de votre journée.',
			category: 'energy healing massage',
		},
		{
			header: (
				<>
					Le massage des 5 Continents{' '}
					<a href='/#disclaimers'>
						<span className='asterix'>*</span>
					</a>
				</>
			),
			description: 'Un massage holistique unique, une relaxation durable.',
			image: {
				path: Massage5Continents,
				alt: 'Une photo de moi, Marie COPHIGNON, en train faire un massage des 5 Continents à un client.',
				className: 'img-massage-assis-eas',
				title:
					'Moi, Marie Cophignon, en train faire un massage des 5 Continents à un client.',
			},
			content: (
				<>
					Le <b>M</b>assage des <b>5</b> <b>C</b>ontinents (<b>M5C</b>) est un
					soin énergétique unique qui combine différentes techniques de massage,
					des huiles végétales et essentielles, ainsi qu'un soin Reiki Usui. Il
					agit à la fois sur le corps et l’esprit, offrant une détente durable
					et une revitalisation profonde.
				</>
			),
			cta: {
				link: '/massage-des-5-continents',
				title:
					'Cliquez ici pour découvrir le massage des cinq continents (M5C).',
			},
			bloquoteContent:
				'Une expérience sensorielle unique pour renouer avec vous-même.',
			category: 'energy healing massage',
		},
		{
			header: 'Le Reiki Usui',
			description: 'Un soin énergétique doux par apposition des mains.',
			image: {
				path: SoinRekiUsui,
				alt: 'Une photo de moi, Marie COPHIGNON, en train de faire un soin Reiki Usui à un client.',
				className: 'img-massage-assis-eas',
				title:
					'Moi, Marie Cophignon, en train de faire un soin Reiki Usui à un client.',
			},
			content: (
				<>
					Le Reki Usui rétablit l’équilibre du corps et de l’esprit, apportant
					détente, confort et bien-être intérieur. Accessible à tous il
					accompagne dans de nombreux domaines : gestion du stress, fatigue,
					insomnie, douleurs chroniques ou blocages émotionnels.
				</>
			),
			cta: {
				link: '/reiki',
				title: 'Cliquez ici pour découvrir les soins Reki Usui.',
			},
			bloquoteContent:
				'Un voyage intérieur qui vous mène à la paix et l’équilibre.',
			category: 'energy healing',
		},
	];

	return (
		<>
			{head()}
			<div className='Accueil'>
				<div className='hero'>
					<div className='hero-main-container'>
						<div className='hero-container'>
							<div className='hero-content '>
								<h1>Massages énergétiques & Reiki Usui dans les Yvelines</h1>
								<p className='hero-description'>
									Réduisez le stress, relâchez les tensions et retrouvez un
									équilibre durable grâce à des massages énergétiques ou soins
									énergétiques personnalisés.
								</p>
								<div className='hero-cta'>
									<Cta
										linkType='tel'
										link='tel:07.73.55.27.70'
										title={'Contactez-moi pour prendre rendez-vous.'}
										ctaLinkClassName='cta-primary phone'
										ctaText='☏ Prendre rendez-vous'
										meta={`itemProp='telephone'`}
										target='_self'
									/>
									<Cta
										link='/contact#prise-rendez-vous'
										title={'Contactez-moi pour prendre rendez-vous.'}
										ctaLinkClassName='cta-primary pc'
										ctaText='Prendre rendez-vous'
										target='_self'
									/>
									<Cta
										link='#offres-massages-energetiques-et-soin-reiki-usui'
										title={
											'Cliquez pour découvrir les massages énergétiques et soin Reiki que je propose.'
										}
										ctaLinkClassName='cta-secondary'
										ctaText='Découvrir mes massages et soin Reki'
										target='_self'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='social-networks-container'>
					<SocialNetworks />
				</div>

				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h2>
									Massage énergétique ou Reiki Usui, <br /> un accompagnement
									holistique personnalisé pour votre bien-être profond.
								</h2>
								<div
									className='header-2-description'
									itemProp='founder'
									itemScope
									itemType='https://schema.org/Person'
								>
									<p>
										Je suis <span itemProp='name'>Marie Cophignon</span>,
										<span itemProp='jobTitle'>massothérapeute énergétique</span>{' '}
										et <span itemProp='jobTitle'>Maître Reiki Usui</span>.
									</p>
									<p>
										Depuis 2022, j’accompagne les adultes en recherche de
										relaxation profonde, de mieux-être et de rééquilibrage
										énergétique, dans un cadre professionnel, doux et
										respectueux. Chaque séance est pensée comme une pause
										régénérante, adaptée à votre état physique, émotionnel et
										énergétique du moment.
									</p>
								</div>
								<div className='header-2-cta'>
									<Cta
										link='/qui-suis-je'
										title={'Cliquez pour venir découvrir mon parcours'}
									/>
									<blockquote className='cta-blockquote'>
										Accordez-vous la douceur d’une pause bienveillante.
									</blockquote>
								</div>
							</div>
							<div className='header-2-image-container'>
								<McImage
									path={ImgMoi}
									className='img-qui-suis-je-moi'
									alt='Une photo de moi, Marie COPHIGNON, Massothérapeute énergétique et Maitre Reiki Usui.'
									title='Moi, Marie Cophignon, Massothérapeute énergétique et Maitre Reiki Usui.'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div
					className='products-header'
					id='offres-massages-energetiques-et-soin-reiki-usui'
				>
					<h2>Mes offres de soins & massages énergétiques</h2>
					<div className='products-header-3-containers'>
						{products.map((p: iProduct, i: number) => (
							<Product
								key={`product-${i}`}
								header={p.header}
								description={p.description}
								image={p.image}
								content={p.content}
								cta={p.cta}
								bloquoteContent={p.bloquoteContent}
								category={p.category}
							/>
						))}
					</div>
				</div>
				<ParagraphSeparator />
				<div className='review-container'>
					<div className='review-main-container'>
						<h2>Témoignages clients</h2>
						<ReviewsCarousel />
						<div className='review-cta'>
							<div className='review-cta-container'>
								<Cta
									link='https://g.page/r/CRSCLVPhWGkwEAE/review'
									title='Cliquez pour ajouter un nouvel avis sur ma fiche Google My Business'
									ctaLinkClassName='cta-secondary'
									ctaText='Ajouter un avis'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div
					className='faq-container'
					itemScope
					itemType='https://schema.org/FAQPage'
				>
					<div className='faq-main-container'>
						<h2>Les questions fréquentes</h2>
						<div className='faq-content'>
							<Faq />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Accueil;
