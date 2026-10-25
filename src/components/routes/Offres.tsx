import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/Offres.scss';
import ImgCocooning from '../../assets/Offres/image-serviettes-lampe-de-sel.jpg';
import ImgEspaceDetente from '../../assets/Offres/img-espace-detente-massage-du-dos-assis.jpg';
import { PricesMassageEAS } from '../fragments/Prices/massage-assis-eas-prices';
import { PricesM5C } from '../fragments/Prices/massage-5-continents';
import { PricesReikiH } from '../fragments/Prices/reiki-holistique';
import { PricesReikiC } from '../fragments/Prices/reiki-cible';
// import { Panel } from 'primereact/panel';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';

import { OfrresFaqItems as OffresFaqItems } from '../entities/faq-items/offres-faq-items';
import McLinkSoinDomicile from '../fragments/McLinks/McLink-Soins-Domicile';
import McLinkEnEntreprise from '../fragments/McLinks/McLink-En-Entreprise';
import { PricesMEASTambourUnite } from '../fragments/Prices/massage-eas-tambour-unite';
import McLinkReikiUsui from '../fragments/McLinks/McLink-Reiki-Usui';
import McLinkMEAS from '../fragments/McLinks/McLink-Massage-EAS';
import McLinkM5C from '../fragments/McLinks/McLink-5-Continents';
import McImage from '../fragments/McImage/McImage';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';

const Offres = () => {
	return (
		<>
			<section className='Offres'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1>
									Soins énergétiques & Massages bien‑être à Guyancourt,
									Élancourt et Saint‑Quentin‑en‑Yvelines
								</h1>
								<p>
									Je vous accueille dans mes cabinets de{' '}
									<strong>Guyancourt</strong> et <strong>Élancourt</strong>, et
									je me déplace également à
									<McLinkSoinDomicile text='domicile' />
									ou en <McLinkEnEntreprise text='entreprise' noWrap={true} />,
									sur toute l’agglomération de{' '}
									<strong>Saint‑Quentin‑en‑Yvelines</strong>.
								</p>
								<p>
									Je propose des soins énergétiques{' '}
									<McLinkReikiUsui text='Reiki Usui' noWrap={true} />, des
									<McLinkMEAS text='massages du dos assis méthode EAS®' /> et le{' '}
									<McLinkM5C
										text='Massage des 5 Continents (M5C)'
										noWrap={true}
									/>
									, adaptés à vos besoins physiques, émotionnels et
									énergétiques.
								</p>
								<p className='disclaimer'>
									Un soin énergétique ne remplace jamais un traitement médical.
									Il accompagne, harmonise et soutient votre processus naturel
									de guérison.
								</p>
								<BgMcImageAlternativeContainer
									path={ImgCocooning}
									className='img-cocooning'
									alt='image décorative d’ambiance cocooning aux cristaux : une atmosphère chaleureuse et enveloppante mêlant serviettes douces, bougies, cristaux et lumière tamisée.'
								/>
							</div>
							<BgMcImageContainer
								path={ImgEspaceDetente}
								className='img-cocooning'
								alt='image décorative d’ambiance cocooning aux cristaux : une atmosphère chaleureuse et enveloppante mêlant serviettes douces, bougies, cristaux et lumière tamisée.'
							/>
						</div>
					</div>
				</div>
				{/* <ParagraphSeparator />
				<div className='promotion'>
					<Panel header='Promotion - le retour du coffret Duo'>
						<h2>✨ Coffret Duo — Offre limitée</h2>
						<p>
							Composez votre duo de soins et profitez de{' '}
							<strong>20 € de remise</strong>. Valable 4 mois.
						</p>
						<ul>
							<li>✨ Soin Reiki Usui</li>
							<li>✨ Massage des 5 Continents</li>
							<li>
								✨ Massage du dos assis – méthode EAS® – 45 min{' '}
								<span className='asterix'>*</span>
							</li>
						</ul>
						<p className='m-0'>
							<b>Les soins sont valables 4 mois après l'achat.</b>
						</p>
						<p className='note'>
							<span className='asterix'>*</span> Les massages de 20 et 35
							minutes ne sont pas concernés.
						</p>
						<div className='cta-container-row footer-cta-container'>
							<CtaRendezVous />
						</div>
					</Panel>
				</div> */}
				<ParagraphSeparator />
				<div className='prices-header'>
					<h2 className='center-secondary-title '>
						Tarifs 2026 des soins & massages énergétiques
					</h2>
					<div className='prices-content'>
						<div>
							<p>
								La durée des séances correspond au temps que nous consacrons
								ensemble à votre bien‑être. Elle inclut non seulement le soin en
								lui‑même, mais aussi <b>les échanges indispensables</b> à son
								bon déroulement.
							</p>
							<p>
								Ce moment de dialogue est essentiel : il me permet de comprendre{' '}
								<b>vos attentes</b>, d’identifier <b>vos besoins</b> et de
								vérifier, avec vous, l’absence de contre‑indications. Grâce à
								cela, je peux adapter mes soins afin qu’ils vous soient
								pleinement bénéfiques.{' '}
								<b>
									Dans le cas contraire, il sera préférable de reporter ou
									d’annuler la séance.
								</b>
							</p>
							<p className='note'>
								Majoration domicile : +5 € (déplacement + frais).
							</p>
						</div>
						<div className='prices-container'>
							<h3>Massages énergétiques</h3>
							<section className='prices-paragraph-container'>
								<section
									className='prices-paragraph-content'
									id='massage-5-contients-tarifs'
								>
									<PricesMassageEAS title='Massage assis méthode EAS®' />
									<p>
										Durée au choix : 30, 45 ou 55 minutes. Idéal pour relâcher
										les tensions du dos, de la nuque et des épaules.
									</p>
								</section>
								<section
									className='prices-paragraph-content'
									id='massage-eas-tarifs'
								>
									<PricesM5C title='Massage des 5 Continents (M5C) - 01h30' />
									<p>
										Un soin complet mêlant massage, soin énergétique et
										aromathérapie.
									</p>
									<p className='disclaimer'>Réservé aux personnes majeures.</p>
								</section>
							</section>
							<br />
							<ParagraphSeparator />
							<br />
							<h3>Soins Reiki Usui</h3>
							<section className='prices-paragraph-container' id='reiki-tarifs'>
								<section className='prices-paragraph-content'>
									<PricesReikiH title='Soin Reiki Usui holistique 01h00' />
									<p>Rééquilibrage global du corps et de l’esprit.</p>
								</section>
								<section className='prices-paragraph-content'>
									<PricesReikiC title='Soin Reiki Usui ciblé séance 0h30' />
									<p>Idéal pour une zone ou une problématique précise.</p>
								</section>
							</section>
							<h4 id='reiki-distance-tarifs'>
								Soin Reiki Usui à distance{' '}
								<a href='#asterix'>
									<span className='asterix'>*</span>
								</a>{' '}
								: 60€
							</h4>
							<p>
								<i>
									<span className='asterix' id='asterix'>
										*
									</span>{' '}
									Bien qu'il soit possible, en Reiki Usui, de faire des soins à
									distance. Je ne souhaite pas ouvrir cette pratique à tous mes
									clients.
								</i>
							</p>
							<br />
							<ParagraphSeparator />
							<br />
							<h3>Soin duo massage du dos assis - Tambour Unité</h3>
							<section
								className='prices-paragraph-container'
								id='massage-eas-tamobur-unite-tarifs'
							>
								<section className='prices-paragraph-content'>
									<PricesMEASTambourUnite />
									<p>
										Une expérience sensorielle à deux praticiennes où massage,
										son et vibrations évoluent à l’unisson dans une même
										synergie.
									</p>
									<p className='disclaimer'>
										Soin exclusivement à Plaisir dans les Yvelines.
									</p>
								</section>
								<section className='prices-paragraph-content'>
									<McImage
										path={ImgEspaceDetente}
										className='img-espace-detente'
										alt='image decorative d’un univers bien-être et massage : une scène lumineuse et apaisante associant huiles, fleurs, bougies et matériel de massage dans une ambiance naturelle'
									/>
								</section>
							</section>
							<div className='cta-container-row footer-cta-container'>
								<CtaRendezVous />
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='offres-container'>
					<h2>Les offres découvertes & partages</h2>
					<div className='offres-paragraph-container'>
						<div className='offres-paragraph-content'>
							<h3>Offre Découverte</h3>
							<p>
								Pour votre premier massage ou soin Reiki Usui, bénéficiez d’une
								réduction de 10 € sur toute séance d’un montant supérieur ou
								égal à 50 €.
							</p>
							<blockquote>
								Une invitation à découvrir les bienfaits d’un soin en douceur et
								en toute confiance.
							</blockquote>
						</div>
						<div className='offres-paragraph-content'>
							<h3>Offre Parrainage</h3>
							<p>
								Lors de votre séance, une carte de parrainage peut vous êtes
								remise. La personne qui la présente lors de son soin reçoit une
								réduction immédiate, et vous profitez également d’une remise sur
								votre prochaine séance.
							</p>
							<blockquote>
								Une manière simple de semer le bien‑être autour de vous.
							</blockquote>
						</div>
						<div className='offres-paragraph-content'>
							<h3>Carte Cadeau</h3>
							<p>
								Valable un an, la carte cadeau permet d’offrir à vos proches un
								moment de détente et de reconnexion.
							</p>
							<blockquote>
								Une attention idéale pour célébrer un événement ou simplement
								faire plaisir.
							</blockquote>
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
							<Faq items={OffresFaqItems} />
						</div>
					</div>
				</div>

				<div className='footer-cta'>
					<h2>
						Envie d’un instant bien-être sur Saint-Quentin-en-Yvelines (SQY) ?
					</h2>
					<p>
						Accordez‑vous une parenthèse de douceur, un espace pour respirer
						pleinement, relâcher les tensions et revenir à vous‑même. À
						Saint‑Quentin‑en‑Yvelines, Élancourt et Guyancourt, que ce soit à
						<McLinkSoinDomicile text='domicile' />
						ou en <McLinkEnEntreprise text='entreprise' noWrap={true} />, mes
						soins invitent le corps à se détendre, à se régénérer et l’esprit à
						s’alléger.
					</p>
					<p>
						Contactez-moi pour réserver votre séance ou obtenir plus
						d’informations.
					</p>
					<div className='cta-container-row footer-cta-container'>
						<CtaRendezVous />
					</div>
				</div>
			</section>
		</>
	);
};

export default Offres;
