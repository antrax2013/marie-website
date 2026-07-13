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

const Accueil = () => {
	return (
		<>
			<div className='Accueil'>
				{/* Hero */}
				<div className='hero'>
					<div className='hero-main-container'>
						<div className='hero-container'>
							<div className='hero-content '>
								<h1>Massages énergétiques & Reiki Usui dans les Yvelines</h1>
								<p className='hero-description'>
									Réduisez le stress, relâchez les tensions et retrouvez un
									équilibre durable grâce à des massages énergétiques et des
									soins Reiki Usui personnalisés, sur Saint-Quentin en Yvelines,
									à Élancourt et Guyancourt, à{' '}
									<a
										href='/soins-a-domicile-saint-quentin-en-yvelines'
										title='En savoir plus sur mes soins à domicile sur Saint-Quentin-en-Yvelines'
										className='underline'
									>
										domicile
									</a>{' '}
									ou en entreprise.
								</p>
								<div className='hero-cta'>
									<CtaRendezVous />
									<Cta
										link='#offres-massages-energetiques-et-soin-reiki-usui'
										title={
											'Cliquez pour découvrir les massages énergétiques et soin Reiki que je propose.'
										}
										ctaLinkClassName='cta-secondary size-l-hidden'
										ctaText='Découvrir mes soins'
									/>
									<Cta
										link='#offres-massages-energetiques-et-soin-reiki-usui'
										title={
											'Cliquez pour découvrir les massages énergétiques et soin Reiki que je propose.'
										}
										ctaLinkClassName='cta-secondary hidden size-l-visible'
										ctaText='Découvrir mes massages et soin Reiki Usui'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ParagraphSeparator />
				{/* Marie */}
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
										Je suis <span itemProp='name'>Marie Cophignon</span>,{' '}
										<span itemProp='jobTitle'>massothérapeute énergétique</span>{' '}
										et <span itemProp='jobTitle'>Maître Reiki Usui</span>.
									</p>
									<p>
										Depuis 2022, sur Saint-Quentin en Yvelines, à Élancourt et
										Guyancourt, à{' '}
										<a
											href='/soins-a-domicile-saint-quentin-en-yvelines'
											title='En savoir plus sur mes soins à domicile sur Saint-Quentin-en-Yvelines'
											className='underline'
										>
											domicile
										</a>{' '}
										ou en entreprise, j’accompagne les adultes en recherche de
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
				{/* Offres */}
				<div
					className='products-header'
					id='offres-massages-energetiques-et-soin-reiki-usui'
				>
					<h2 className='center-secondary-title '>
						Mes offres de soins & massages énergétiques
					</h2>
					<div
						className='products-header-3-containers'
						itemScope
						itemType='https://schema.org/ProductCollection'
					>
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
