import MetaTag from '../fragments/Tools/MetaTag';
import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/Offres.scss';
//import ImgCarteCadeau from '../../assets/Offres/carte-cadeau.png';
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

const Offres = () => {
	const head = () => {
		return (
			<>
				<MetaTag
					title={'Tarifs et Offres'}
					description='Consultez les tarifs des massages énergétique et séances de Reiki Usui sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise. Des soins adaptés à vos besoins pour un bien‑être durable.'
					resume='Consultez les tarifs des massages énergétique et séances de Reiki Usui sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise. Des soins adaptés à vos besoins pour un bien‑être durable.'
				/>
			</>
		);
	};

	return (
		<>
			{head()}
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
									je me déplace également à domicile, ou en entreprise, sur
									toute l’agglomération de{' '}
									<strong>Saint‑Quentin‑en‑Yvelines</strong>. Je propose des
									soins énergétiques Reiki Usui, des massages assis méthode EAS®
									et le Massage des 5 Continents (M5C), adaptés à vos besoins
									physiques, émotionnels et énergétiques.
								</p>
								<p className='disclaimer'>
									Un soin énergétique ne remplace jamais un traitement médical.
									Il accompagne, harmonise et soutient votre processus naturel
									de guérison.
								</p>
							</div>
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
								lui‑même, mais aussi les échanges indispensables à son bon
								déroulement. Ce moment de dialogue est essentiel : il me permet
								de comprendre vos attentes, d’identifier vos besoins et de
								vérifier, avec vous, l’absence de contre‑indications. Grâce à
								cela, je peux adapter mes soins afin qu’ils vous soient
								pleinement bénéfiques. Dans le cas contraire, il sera préférable
								de reporter ou d’annuler la séance.
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
										Durée au choix : 20, 35 ou 45 minutes. Idéal pour relâcher
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
					<h2>Envie d’un instant bien-être sur SQY ?</h2>
					<p>
						Accordez‑vous une parenthèse de douceur, un espace pour respirer
						pleinement, relâcher les tensions et revenir à vous‑même. À
						Saint‑Quentin‑en‑Yvelines, Élancourt et Guyancourt, que ce soit à
						domicile ou en entreprise, mes soins invitent le corps à se
						détendre, à se régénérer et l’esprit à s’alléger.
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
