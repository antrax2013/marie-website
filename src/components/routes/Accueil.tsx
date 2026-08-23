import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgMoi from '../../assets/Accueil/moi500x.jpg';

import '../../scss/routes/Accueil.scss';

import Faq from '../fragments/FAQ/Faq';
import SocialNetworks from '../fragments/Social-Neworks';
import Product, { iProduct } from '../fragments/Product';
import McImage from '../fragments/McImage/McImage';
import Cta from '../fragments/Ctas/Cta';
import { AccueilFaqItems } from '../entities/faq-items/accueil-faq-items';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import { products } from '../entities/product-items/products';
import McLinkSoinDomicile from '../fragments/McLinks/McLink-Soins-Domicile';
import McLinkEnEntreprise from '../fragments/McLinks/McLink-En-Entreprise';

const Accueil = () => {
	return (
		<>
			<div className='Accueil'>
				{/* Hero */}
				<div className='hero'>
					<div className='hero-main-container'>
						<div className='hero-container'>
							<div className='hero-content '>
								<h1>
									Massages énergétiques & Reiki Usui
									<br />à Saint-Quentin en Yvelines
								</h1>
								<p className='hero-description'>
									Réduisez le stress, relâchez les tensions et retrouvez un
									équilibre durable grâce à des massages énergétiques et des
									soins Reiki Usui personnalisés à Saint-Quentin en Yvelines. Je
									vous accueille en cabinet à Élancourt et Guyancourt.
									J'interviens également
									<McLinkSoinDomicile text='à domicile' />
									et <McLinkEnEntreprise text='en entreprise' noWrap={true} />.
								</p>
								<div className='hero-cta'>
									<CtaRendezVous />
								</div>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				{/* Offres */}
				<div
					className='products-header'
					id='offres-massages-energetiques-et-soin-reiki-usui'
				>
					<h2 className='center-secondary-title '>
						Mes offres de soins & massages énergétiques
					</h2>
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
				{/* Marie */}
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h2>
									Massage énergétique ou Reiki Usui,
									<br />
									un accompagnement holistique pour votre bien-être.
								</h2>
								<div className='header-2-description'>
									<p>
										Je suis Marie Cophignon, massothérapeute énergétique et{' '}
										Maître Reiki Usui.
									</p>
									<p>
										Après 18 ans comme infirmière, j'ai choisi en 2022 de
										prendre soin des autres autrement. Prendre le temps, être à
										l'écoute et vous accompagner avec douceur et bienveillance
										sont devenus le cœur de ma pratique.
										<br />
										Chaque séance est pensée comme une parenthèse régénérante,
										adaptée à votre état physique, émotionnel et énergétique du
										moment.
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
							<div className='header-2-image-container hidden md:inline-block'>
								<McImage
									path={ImgMoi}
									className='img-qui-suis-je-moi'
									alt='Portrait professionnel de Marie COPHIGNON, Massothérapeute énergétique et Maître Reiki Usui.'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				{/* Avis */}
				<div className='review-container'>
					<ReviewContainer />
				</div>
				<div className='social-networks-container'>
					<SocialNetworks />
				</div>
				<ParagraphSeparator />
				{/* FAQ */}
				<div
					className='faq-container'
					itemScope
					itemType='https://schema.org/FAQPage'
				>
					<div className='faq-main-container'>
						<h2>Les questions fréquentes</h2>
						<div className='faq-content'>
							<Faq items={AccueilFaqItems} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Accueil;
