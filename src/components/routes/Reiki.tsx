import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgReiki from '../../assets/Reiki/Reiki.svg';
import ImgReikiVentre from '../../assets/Reiki/Reiki-ventre.png';
//import ImgReikiGenou from '../../assets/Reiki/Reiki-genou.png';
//import ImgReikiPied from '../../assets/Reiki/Reiki-pied.png';
import '../../scss/routes/Reiki.scss';
import MetaTag from '../fragments/Tools/MetaTag';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import CtaOffres from '../fragments/Ctas/Offres';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';
import { ReikiFaqItems } from '../entities/faq-items/reiki-faq-items';
//import McImage from '../fragments/McImage';
import { PricesReikiH } from '../fragments/Prices/reiki-holistique';
import { PricesReikiC } from '../fragments/Prices/reiki-cible';
import Cta from '../fragments/Ctas/Cta';

const Reiki = () => {
	const head = () => {
		return (
			<MetaTag
				title='Reiki Usui'
				description='Séances de Reiki Usui sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise, pour réduire le stress, apaiser l’esprit et rééquilibrer vos énergies. Un moment de douceur et de recentrage.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='Reiki' itemScope itemType='https://schema.org/Offer'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1 itemProp='name'>
									Le Reiki Usui – un soin énergétique doux, libérateur et
									universel
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Besoin de relâcher la pression, de calmer le mental, de
										retrouver une sensation d’unité, de paix intérieure ?
									</p>
									<p>
										Offrez‑vous un soin Reiki Usui avec un Maître Reiki : une
										expérience subtile où l’énergie circule, apaise, rééquilibre
										et vous accompagne vers un mieux‑être global.
									</p>
									<p>
										À Saint‑Quentin‑en‑Yvelines, Élancourt et Guyancourt, en
										cabinet ou à domicile, ouvrez un espace de calme où le
										mental se pose, le corps se relâche et l’énergie retrouve
										son chemin naturel.
									</p>
									<BgMcImageAlternativeContainer
										path={ImgReikiVentre}
										className='img-ventre-reiki'
										alt='Maître Reiki Usui posant les mains sur le ventre du patient dans un soin Reiki favorisant l’apaisement intérieur'
									/>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaRendezVous />
										<CtaOffres />
									</div>
									<blockquote className='cta-blockquote'>
										Un soin énergétique qui réinstalle l’harmonie et libère
										l’énergie vitale.
									</blockquote>
								</div>
							</div>
							<BgMcImageContainer
								path={ImgReikiVentre}
								className={'img-ventre-reiki'}
								alt={
									'Maître Reiki Usui posant les mains sur le ventre du patient dans un soin Reiki favorisant l’apaisement intérieur'
								}
							/>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div
					className='reiki-usui-description-container'
					itemProp='description'
				>
					<div className='reiki-usui-description-main-content'>
						<BgMcImageContainer
							path={ImgReiki}
							className='img-logo-reiki vertical'
							alt='Kanji japonais représentant le mot Reiki'
						/>
						<div className='reiki-usui-description-content'>
							<p>
								Le Reiki Usui est une méthode énergétique japonaise douce et
								naturelle qui soutient l’équilibre du corps, du mental et des
								émotions. Par l’apposition des mains, il favorise la détente,
								apaise les tensions et accompagne vers un mieux‑être global.
							</p>
							<BgMcImageAlternativeContainer
								path={ImgReiki}
								className='img-logo-reiki vertical'
								alt='Kanji japonais représentant le mot Reiki'
							/>
							<p>
								Ma pratique s’inscrit dans la lignée traditionnelle du Reiki
								Usui, dans le respect des enseignements transmis depuis Mikao
								Usui, par Carole Jacob, ma formatrice et amie. Je veille à
								préserver la simplicité, l’authenticité et l’esprit originel de
								cette méthode du XIX<sup>éme</sup> siècle, en offrant un soin
								fidèle à ses valeurs et à sa philosophie.
							</p>
							<p>
								Recevoir un soin Reiki Usui, c’est s’offrir un moment de calme
								où l’énergie circule à nouveau, où les tensions se relâchent et
								où l’harmonie intérieure peut se réinstaller. Que ce soit pour
								apaiser le stress, retrouver de la vitalité, accompagner un
								changement ou simplement prendre soin de soi, le Reiki Usui
								ouvre un espace de douceur et de rééquilibrage profond.
							</p>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='reiki-usui-benefits-containers'>
					<h2 className='center-secondary-title'>
						Les bienfaits du Reiki Usui
					</h2>
					<div className='reiki-usui-benefits'>
						<p>
							Le Reiki Usui est un soin énergétique holistique doux par
							apposition des mains. Il offre de nombreux bienfaits en agissant
							en douceur sur les tensions physiques, émotionnelles et mentales.
							Il apporte un supplément d'énergie à l'organisme et participe au
							retour à l'équilibre du corps et de l'esprit.
						</p>
						<div className='reiki-usui-benefits-lists'>
							<div className='reiki-usui-benefits-list'>
								<p>Le Reiki Usui permet de :</p>
								<ul>
									<li>Libérer les blocages et les tensions</li>
									<li>Renforcer le système immunitaire</li>
									<li>Favoriser un lâcher‑prise profond</li>
									<li>Atténuer les douleurs et élimine les toxines</li>
									<li>Stimuler les processus naturels d’auto‑guérison</li>
									<li>Réharmoniser et apaiser le corps et l'esprit</li>
								</ul>
							</div>
							<div className='reiki-usui-benefits-disclaimers'>
								<p>Le Reiki Usui n'est pas :</p>
								<ul className='disclaimer'>
									<li>Un massage ou une technique de manipulation du corps</li>
									<li>
										Un substitut à un traitement médical ou à un suivi
										thérapeutique
									</li>
									<li>
										Une méthode qui exige d’adhérer à un système de pensée
										particulier
									</li>
									<li>
										Un diagnostic, une analyse ou une interprétation de
										symptômes
									</li>
								</ul>
							</div>
						</div>
						<blockquote>
							Un souffle bienveillant qui accompagne vos forces intérieures,
							sans jamais s’y substituer.
						</blockquote>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='reiki-usui-targets-container'>
					<h3>À qui s’adresse le Reiki Usui ?</h3>
					<p>
						Le Reiki Usui est un soin énergétique holistique doux qui convient à
						tous : bébés, enfants, adultes, personnes âgées, les animaux, les
						plantes...
					</p>

					<div className='reiki-usui-targets-lists'>
						<div className='reiki-usui-target-list'>
							<p>
								Il est particulièrement adaptée si vous recherchez un soutien
								pour faire face :
							</p>
							<ul>
								<li>Au stress, à l'anxiété ou au burn-out</li>
								<li>A la fatigue, l'insomnie ou manque de vitalité</li>
								<li>
									A des états émotionnels, la perte de confiance, des blocages
									ou des schémas répétitifs
								</li>
								<li>
									A des tensions musculaires, des douleurs chroniques,
									articulaires ou inflamatoires
								</li>
								<li>
									Au changement que ce soit dans la vie personnelle ou
									professionnelle
								</li>
							</ul>
						</div>
						<div className='reiki-usui-target-disclaimer-list'>
							<p>Il ne covient pas en cas : </p>
							<ul className='disclaimer'>
								<li>
									De troubles psychotiques, schizophréniques ou de dissociation
									de la personnalité
								</li>
							</ul>
						</div>
					</div>
					<blockquote>
						Chaque séance est une halte bienfaisante, adaptée à ce que votre
						corps, votre cœur et votre énergie traversent ici et maintenant.
					</blockquote>
				</div>
				<ParagraphSeparator />
				<div className='reiki-usui-prices-container'>
					<h3>Tarifs 2026 des soins énergétiques Reiki Usui</h3>
					<div className='reiki-usui-prices-content'>
						<div className='reiki-usui-prices-inner-content'>
							<div className='reiki-usui-prices-panel'>
								<PricesReikiH title='Soin Reiki Usui holistique séance 1h00 - 45 mins de soin' />
								<br />
								<p>
									<h4 className='inline'>Soin Reiki Usui à distance</h4>{' '}
									<span className='asterix'>*</span> :{' '}
									<span itemProp='price'>60,00</span>
									<span itemProp='priceCurrency'>€</span>
								</p>
							</div>
							<div className='reiki-usui-prices-panel'>
								<PricesReikiC title='Soin Reiki Usui ciblé séance 0h30 - 25 mins de soin' />
							</div>
						</div>
						<div className='cta-container-row footer-cta-container'>
							<div className='cta-container-row footer-cta-container reiki-usui-prices-cta'>
								<CtaRendezVous />
								<Cta
									link='/offres-et-tarifs#reiki-tarifs'
									title={
										'Cliquez ici pour découvrir mes soins offres de soins, carte cadeau, packs et promotions.'
									}
									ctaLinkClassName='cta-secondary'
									ctaText='Découvrir mes offres de soins'
								/>
							</div>
							<blockquote className='cta-blockquote'>
								Là où la douceur s’installe, l’équilibre renaît.
							</blockquote>
						</div>
						<div className='reiki-usui-prices-legende'>
							<p>
								<i>
									<span className='asterix'>*</span> Le Reiki Usui peut se
									pratiquer à distance, mais seulement lorsque cette approche
									est pertinente pour la personne.
								</i>
							</p>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				{/* Avis */}
				<div className='review-container'>
					<ReviewContainer filter='Reiki' />
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
							<Faq items={ReikiFaqItems} />
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='footer-cta'>
					<h2>Prêt(e) à vous offrir un moment rien que pour vous ?</h2>
					<p>
						Si vous ressentez l’élan de vous accorder un temps de calme, de
						recentrage et de douceur, je vous invite à prendre rendez‑vous. Une
						séance de Reiki Usui peut être l’occasion de vous reconnecter à
						vous‑même et de laisser votre énergie retrouver son chemin naturel
						vers l’équilibre.
					</p>
					<div className='cta-container-row footer-cta-container'>
						<CtaRendezVous />
						<CtaOffres />
					</div>
				</div>
			</div>
		</>
	);
};

export default Reiki;
