import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgM5C from '../../assets/M5C/massage-5-continents.png';
import ImgM5CColonne from '../../assets/M5C/m5c-colonne.png';
import ImgM5CDos from '../../assets/M5C/m5c-bas-dos.png';
//import ImgM5CBras from '../../assets/M5C/m5c-bras.png';
import '../../scss/routes/M5C.scss';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import CtaOffres from '../fragments/Ctas/Offres';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';
import McImage from '../fragments/McImage/McImage';
import Cta from '../fragments/Ctas/Cta';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';
import { M5CFaqItems } from '../entities/faq-items/m5c-faq-items';
import { PricesM5C } from '../fragments/Prices/massage-5-continents';
import McLinkSoinDomicile from '../fragments/McLinks/McLink-Soins-Domicile';
import McLinkEnEntreprise from '../fragments/McLinks/McLink-En-Entreprise';
import McLinkReikiUsui from '../fragments/McLinks/McLink-Reiki-Usui';

const Massage5Continents = () => {
	return (
		<>
			<div className='M5C' itemScope itemType='https://schema.org/Offer'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1 itemProp='name'>
									Le Massage des 5 Continents (M5C) - un soin holistique, une
									méthode signature, un bien‑être profond
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Besoin de ralentir, de souffler, de respirer, de lâcher
										prise ?
									</p>
									<p>
										Offrez‑vous un soin complet et unique. Le massage des 5
										continents, entre les mains d’une praticienne certifiée,
										réunit des techniques de massage venues des quatre coins du
										monde, un soin énergétique
										<McLinkReikiUsui text='Reiki Usui' />
										et les propriétés thérapeutiques d’huiles essentielles.
									</p>
									<p>
										Sur Saint‑Quentin‑en‑Yvelines, Élancourt et Guyancourt, à
										<McLinkSoinDomicile text='domicile' />
										ou en <McLinkEnEntreprise text='entreprise' noWrap={true} />
										, offrez‑vous un instant suspendu où le rythme ralentit, où
										l’esprit se libère.
									</p>
									<BgMcImageAlternativeContainer
										path={ImgM5CDos}
										className='img-bas-dos'
										alt='Massothérapeute réalisant un massage des 5 continents sur le bas du dos pour favoriser une détente profonde'
									/>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaRendezVous />
										<CtaOffres />
									</div>
									<blockquote className='cta-blockquote'>
										Un soin complet, profond et biodynamique pour un
										lâcher‑prise physique et mental.
									</blockquote>
								</div>
							</div>
							<BgMcImageContainer
								path={ImgM5CDos}
								className={'img-bas-dos'}
								alt='Massothérapeute réalisant un massage des 5 continents sur le bas du dos pour favoriser une détente profonde'
							/>
						</div>
					</div>
				</div>

				<ParagraphSeparator />
				<div
					className='massage-cinq-continents-description-container'
					itemProp='description'
				>
					<div className='massage-cinq-continents-description-main-content'>
						<BgMcImageContainer
							path={ImgM5C}
							className='img-logo-M5C'
							alt='Logo de la Fédération du Massage des 5 Continents attestant de la certification'
						/>
						<div className='massage-cinq-continents-description-content'>
							<p>
								Le{' '}
								<em>
									<b>M</b>assage des <b>5</b> <b>C</b>ontinents (<b>M5C</b>)
								</em>
								, est un soin unique qui réunit massage, soin énergétique et
								complexes d’huiles essentielles pour agir en profondeur sur le
								corps et l'esprit. Cette combinaison subtile détoxifie, relâche,
								rééquilibre et revitalise, offrant un soin complet aux effets
								durables.
							</p>
							<BgMcImageAlternativeContainer
								path={ImgM5C}
								className='img-logo-M5C'
								alt='Logo de la Fédération du Massage des 5 Continents attestant de la certification'
							/>
							<p>
								Ce massage se pratique en sous‑vêtement et englobe tout le corps
								: dos, jambes, ventre, bras haut du torse, mains et visage. Son
								action biodynamisante soutient les processus naturels
								d’auto‑guérison. Il permet de se libérer des toxines et des
								mémoires émotionnelles, ouvrant la voie à des énergies plus
								légères et plus vivantes.
							</p>
							<p>
								Que ce soit pour un moment de détente, pour prendre soin de vous
								ou simplement pour vous faire plaisir, ce massage offre un temps
								pour souffler et vous recentrer. Il aide à traverser le stress,
								la fatigue ou les tensions accumulées, et permet de retrouver
								calme et harmonie.
							</p>
							<p>
								Je suis aujourd’hui membre de la{' '}
								<i>
									<a
										href='https://massagedes5continents.com/membres/8424/cophignon-marie/'
										title='Cliquez pour accéder à ma fiche praticien de la Fédération du Massage des 5 Continents.'
										target='_blank'
									>
										Fédération du Massage des 5 Continents
									</a>
								</i>
								, engagée à pratiquer cette méthode avec authenticité,
								bienveillance et fidélité à ses valeurs.
							</p>
							<b>Ce massage est destiné exclusivement aux adultes majeurs.</b>
						</div>
					</div>
				</div>
				<ParagraphSeparator />

				<div className='massage-cinq-continents-benefits-containers'>
					<h2 className='center-secondary-title'>
						Les bienfaits du Massage des 5 Continents
					</h2>
					<div className='massage-cinq-continents-benefits'>
						<p>
							Le Massage des 5 Continents agit durablement grâce à l’alliance de
							techniques de massage issues des quatre coins du monde :
							Lomi‑Lomi, massage californien, suédois, Tuina, acupression et
							pratiques ayurvédiques. Combiné à un soin énergétique
							<McLinkReikiUsui text='Reiki Usui' />
							et aux propriétés thérapeutiques d’huiles essentielles
							spécifiques, sélectionnée pour leurs synergies, ce massage
							biodynamique stimule les processus naturels d’auto‑guérison,
							libère les blocages émotionnels et détoxifie l’organisme.
						</p>
						<div className='massage-cinq-continents-benefits-lists'>
							<div className='massage-cinq-continents-benefits-list'>
								<p>Le Massage des 5 Continents apporte :</p>
								<ul>
									<li>Une libération des tensions physiques et musculaires</li>
									<li>Un apaisement mental et une réduction du stress</li>
									<li>Un lâcher‑prise profond</li>
									<li>
										Une stimulation des processus naturels d’auto‑guérison
									</li>
									<li>
										Une détoxification du corps en aidant l'élimination des
										toxines{' '}
									</li>
									<li>
										Une réactivation de la circulation de l’énergie vitale
									</li>
									<li>
										Un Allègement des charges émotionnelles et des blocages
									</li>
									<li>Une amélioration la qualité du sommeil</li>
									<li>Un soutien à la vitalité et une sensation de légèreté</li>
									<li>Un recentrage et une meilleure connexion à soi</li>
								</ul>
							</div>
							<div className='massage-cinq-continents-benefits-disclaimers'>
								<p>Le Massage des 5 Continents n'est pas :</p>
								<ul className='disclaimer'>
									<li>Une pratique de la masso-kinésithérapie</li>
									<li>Une pratique médicale</li>
									<li>Un massage naturiste</li>
									<li>Un massage tantrique</li>
									<li>Un massage à caractère sexuel</li>
								</ul>
							</div>
						</div>
						<blockquote>
							Quand le corps se détend, l’énergie circule et l’esprit respire.
						</blockquote>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='massage-cinq-continents-targets-container'>
					<h3>À qui s’adresse le Massage des 5 Continents ?</h3>
					<p>
						Ce soin holistique convient à toute personne souhaitant s’offrir un
						véritable lâcher‑prise, tant physique que mental.
					</p>
					<b>Ce massage est destiné exclusivement aux adultes majeurs.</b>

					<div className='massage-cinq-continents-targets-lists'>
						<div className='massage-cinq-continents-target-list'>
							<p>Il est particulièrement adapté si vous recherchez : </p>
							<ul>
								<li>une pause ressourçante dans un rythme de vie soutenu</li>
								<li>un soutien pour mieux gérer le stress</li>
								<li>un moment pour vous reconnecter à votre corps</li>
								<li>un soin raffiné et profond</li>
								<li>un massage pensé comme une expérience unique</li>
							</ul>
						</div>
						<div className='massage-cinq-continents-target-disclaimer-list'>
							<p>Il est contre-indiqué pour : </p>
							<ul className='disclaimer'>
								<li>Les femmes enceintes</li>
								<li>Les personnes atteintes de cancer</li>
								<li>
									Les personnes souffrant de troubles psychotiques,
									schizophréniques ou de dissociation de la personnalité
								</li>
								<li>Les enfants</li>
							</ul>
						</div>
					</div>
					<p>
						L’usage des huiles essentielles demande une attention particulière.
						Pour les femmes allaitantes, les personnes épileptiques,
						asthmatiques, hypersensibles, atteintes de cancer ou suivant un
						traitement médical ou homéopathique, certaines huiles essentielles
						peuvent être déconseillées. En cas de doute, ou si votre situation
						le nécessite, j’utiliserai exclusivement des huiles végétales afin
						de garantir un soin adapté et en toute sécurité. N'hésitez pas à me
						le signaler.
					</p>
					<p>
						Par ailleurs, certaines huiles utilisées étant photosensibles, il
						est recommandé de ne pas s’exposer au soleil après un Massage des 5
						Continents. Il est également préférable de manger léger avant le
						soin et de retirer bijoux et piercings afin de profiter pleinement
						de la séance.
					</p>
					<blockquote>
						Chaque séance est une bulle régénérante, accordée à votre état du
						moment pour vous offrir exactement ce dont vous avez besoin.
					</blockquote>
				</div>
				<ParagraphSeparator />
				<div className='massage-cinq-continents-prices-container'>
					<h3>Tarifs 2026 du Massage des 5 Continents</h3>
					<div className='massage-cinq-continents-prices-content'>
						<div className='massage-cinq-continents-prices-image-content'>
							<McImage
								path={ImgM5CColonne}
								className='img-lombaires'
								alt='Massothérapeute effectuant un massage des 5 continents pour détendre le haut du dos et harmoniser l’énergie'
							/>
							<blockquote>
								Un soin qui honore le corps et apaise l’esprit: un moment unique
								pour vous.
							</blockquote>
						</div>
						<div className='massage-cinq-continents-prices-inner-content'>
							<PricesM5C title='Séance de 1h30 - 70 mins de soin' />
							<div className='cta-container-row footer-cta-container massage-cinq-continents-prices-cta'>
								<CtaRendezVous />
								<Cta
									link='/offres-et-tarifs#massage-5-contients-tarifs'
									title={
										'Cliquez ici pour découvrir mes soins offres de soins, carte cadeau, packs et promotions.'
									}
									ctaLinkClassName='cta-secondary'
									ctaText='Découvrir mes offres de soins'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				{/* Avis */}
				<div className='review-container'>
					<ReviewContainer filter='M5C' />
				</div>
				<div className='social-networks-container'>
					<SocialNetworks />
				</div>
				{/* FAQ */}
				<ParagraphSeparator />
				<div
					className='faq-container'
					itemScope
					itemType='https://schema.org/FAQPage'
				>
					<div className='faq-main-container'>
						<h2>Les questions fréquentes</h2>
						<div className='faq-content'>
							<Faq items={M5CFaqItems} />
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='footer-cta'>
					<h2>Envie de découvrir le Massage des 5 Continents ?</h2>
					<p>
						Accordez‑vous une bulle de douceur, un moment pour respirer
						pleinement, relâcher ce qui pèse et vous recentrer. Sur
						Saint‑Quentin‑en‑Yvelines, à Élancourt et Guyancourt, à{' '}
						<McLinkSoinDomicile text='domicile' />
						ou en entreprise, le Massage des 5 Continents invite le corps à se
						détendre, à se resourcer et l’esprit à s’alléger.
					</p>
					<p>
						Contactez-moi pour réserver votre séance ou obtenir plus
						d’informations.
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

export default Massage5Continents;
