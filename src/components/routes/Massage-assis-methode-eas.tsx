import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgMA_EAS from '../../assets/Massage-assis-EAS/massage-assis-eas-chaise.png';
import ImgMA_EAS_Trapezes from '../../assets/Massage-assis-EAS/massage-assis-eas-cou.png';
import ImgMA_EAS_Epaules from '../../assets/Massage-assis-EAS/massage-assis-eas-épaule.png';
import ImgMA_EAS_Lombaires from '../../assets/Massage-assis-EAS/massage-assis-eas-lombaires.png';
import '../../scss/routes/Massage-assis-EAS.scss';
import MetaTag from '../fragments/MetaTags/MetaTag';
import Cta from '../fragments/Ctas/Cta';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import Faq from '../fragments/FAQ/Faq';
import { EASFaqItems } from '../entities/faq-items/eas-faq-items';
import McImage from '../fragments/McImage/McImage';
import { PricesMassageEAS } from '../fragments/Prices/massage-assis-eas-prices';
import CtaOffres from '../fragments/Ctas/Offres';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';

const MassageAssisMethodeEAS = () => {
	return (
		<>
			<MetaTag tag='massage-assis-methode-eas' />
			<div className='MA-EAS' itemScope itemType='https://schema.org/Offer'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1 itemProp='name'>
									Le massage du dos assis méthode EAS® - un massage essentiel et
									efficace, une détente profonde immédiate
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Besoin de ralentir, de souffler, de respirer, de lâcher
										prise ?
									</p>
									<p>
										Offrez‑vous quelques minutes de massage du dos assis Méthode
										EAS® : une vague de détente profonde, une libération
										délicate des tensions et une réharmonisation subtile de
										l’énergie du corps.
									</p>
									<p>
										Sur Saint‑Quentin‑en‑Yvelines, Élancourt et Guyancourt, à
										domicile ou en entreprise, ouvrez une parenthèse de douceur
										où le temps ralentit et où le quotidien s’efface.
									</p>
									<BgMcImageAlternativeContainer
										path={ImgMA_EAS}
										className='img-chaise vertical'
										alt='Chaise ergonomique conçue pour offrir un soutien optimal lors des massages assis'
									/>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaRendezVous />
										<CtaOffres />
									</div>
									<blockquote className='cta-blockquote'>
										Un massage énergétique rapide aux effets immédiats.
									</blockquote>
								</div>
							</div>
							<BgMcImageContainer
								path={ImgMA_EAS}
								className={'img-chaise'}
								alt={
									'Chaise ergonomique conçue pour offrir un soutien optimal lors des massages assis'
								}
							/>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div
					className='massage-assis-eas-description-container'
					itemProp='description'
				>
					<div className='massage-assis-eas-description-main-content'>
						<BgMcImageContainer
							path={ImgMA_EAS_Trapezes}
							className='img-trapezes'
							alt='Massothérapeute réalisant massage assis méthode EAS® ciblant les trapèzes pour relâcher les tensions'
						/>
						<div className='massage-assis-eas-description-content'>
							<p>
								Le <em>massage assis méthode EAS®</em>, est un soin énergétique,
								doux, créé par Jean‑Noël Poucet au sein de l’
								<a
									href='https://ecoledesartsdusouffle.com/nos-formations/massage-assis-eas/'
									target={'_blank'}
								>
									<b>É</b>cole des <b>A</b>rts du <b>S</b>ouffle (EAS®)
								</a>{' '}
								de Nouzonville dans les Ardennes.
							</p>
							<BgMcImageAlternativeContainer
								path={ImgMA_EAS_Trapezes}
								className='img-trapezes'
								alt='Massothérapeute réalisant massage assis méthode EAS® ciblant les trapèzes pour relâcher les tensions'
							/>
							<p>
								Ce massage se pratique habillé et se concentre sur le dos, la
								nuque et les bras, zones clés de tension liées au stress et à la
								posture. Grâce à son action à la fois relaxante et dynamisante,
								il permet de relâcher les tensions musculaires, de libérer
								l’esprit et de retrouver une meilleure connexion à son corps.
							</p>
							<p>
								Par son approche ciblée, permet à ce qu'une grande majorité des
								personnes en bénéficie, que ce soit pour un moment de détente,
								pour relâcher des tensions musculaires ou pour retrouver une
								meilleure disponibilité corporelle et mentale.
							</p>
						</div>
					</div>
					<ParagraphSeparator />
					<div>
						<div className='massage-assis-eas-benefits-containers'>
							<h2 className='center-secondary-title'>
								Les bienfaits du massage assis méthode EAS®
							</h2>
							<div className='massage-assis-eas-benefits'>
								<p>
									Le massage assis méthode EAS® agit en profondeur grâce à des
									pétrissages, lissages, étirements et pressions sur des points
									énergétiques situés le long des méridiens. Cette approche
									permet de relâcher les tensions physiques tout en apaisant le
									mental.
								</p>
								<div className='massage-assis-eas-benefits-lists'>
									<div className='massage-assis-eas-benefits-list'>
										<p>Le massage assis méthode EAS® apporte :</p>
										<ul>
											<li>
												Détendre rapidement le dos, la nuque et les épaules
											</li>
											<li>
												Libérer les tensions liées au stress et à la posture
											</li>
											<li>Améliorer la circulation énergétique</li>
											<li>
												Favoriser une meilleure respiration et un apaisement
												mental
											</li>
											<li>
												Redonner tonus, clarté et disponibilité corporelle
											</li>
											<li>
												Offrir une pause ressourçante, même en peu de temps
											</li>
										</ul>
									</div>
									<div className='massage-assis-eas-benefits-disclaimers'>
										<p>Le massage assis méthode EAS® n'est pas :</p>
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
									Impact positif reconnu sur le bien‑être au travail.
								</blockquote>
							</div>
						</div>
						<ParagraphSeparator />
						<div className='massage-assis-eas-targets-container'>
							<h3>À qui s’adresse le massage assis méthode EAS® ?</h3>
							<p>
								Cette méthode convient à toute personne souhaitant prendre soin
								d’elle, relâcher les tensions du quotidien et retrouver une
								harmonie intérieure.
							</p>

							<div className='massage-assis-eas-targets-lists'>
								<div className='massage-assis-eas-target-list'>
									<p>Elle est particulièrement adaptée si vous recherchez : </p>
									<ul>
										<li>
											Une pause ressourçante dans un rythme de vie soutenu
										</li>
										<li>Un soutien pour mieux gérer le stress</li>
										<li>Un moment pour vous reconnecter à votre corps</li>
										<li>Un soin énergétique doux et profond</li>
										<li>Une détente rapide et durable</li>
									</ul>
								</div>
								<div className='massage-assis-eas-target-disclaimer-list'>
									<p>Elle ne covient pas en cas : </p>
									<ul className='disclaimer'>
										<li>
											de troubles psychotiques, schizophréniques ou de
											dissociation de la personnalité
										</li>
										<li>
											de douleurs aigües ou d'une inflamation au niveau des
											zones massées
										</li>
									</ul>
								</div>
							</div>
							<blockquote>
								Chaque séance est pensée comme une pause régénérante, adaptée à
								votre état physique, émotionnel et énergétique du moment.
							</blockquote>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='massage-assis-eas-prices-container'>
					<h3>Tarifs 2026 du massage assis méthode EAS®</h3>
					<div className='massage-assis-eas-prices-content'>
						<div className='massage-assis-eas-prices-image-content'>
							<McImage
								path={ImgMA_EAS_Lombaires}
								className='img-lombaires'
								alt='Massothérapeute réalisant un massage assis méthode EAS® ciblant les lombaires pour soutenir la détente du bas du dos'
							/>
							<blockquote>
								L’essentiel du bien‑être, concentré en quelques minutes.
							</blockquote>
						</div>
						<div className='massage-assis-eas-prices-inner-content'>
							<PricesMassageEAS />
							<div className='cta-container-row footer-cta-container massage-assis-eas-prices-cta'>
								<CtaRendezVous />
								<Cta
									link='/offres-et-tarifs#massage-eas-tarifs'
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
					<ReviewContainer filter='EAS' />
				</div>
				<div className='social-networks-container'>
					<SocialNetworks />
				</div>
				<ParagraphSeparator />
				<div className='eas-entreprise'>
					<div className='eas-entreprise-container'>
						<BgMcImageContainer
							path={ImgMA_EAS_Epaules}
							className='img-epaules'
							alt='Massothérapeute réalisant un massage assis méthode EAS® ciblant l’épaule pour améliorer le confort musculaire'
						/>
						<div className='eas-entreprise-content-container'>
							<div className='eas-entreprise-header'>
								<h2 id='massage-en-entreprise'>
									Le massage assis méthode EAS® en entreprise sur Saint-Quentin
									en Yvelines et ses alentours.
								</h2>
							</div>
							<div className='eas-entreprise-content'>
								<p>
									Le massage assis en entreprise est bien plus qu’un simple
									moment de détente : c’est un véritable levier de bien‑être et
									de performance pour vos équipes. En quelques minutes
									seulement, vos collaborateurs profitent d’une pause
									revitalisante qui libère les tensions, apaise le stress et
									redonne de l’énergie.
								</p>
								<BgMcImageAlternativeContainer
									path={ImgMA_EAS_Epaules}
									className='img-epaules vertical'
									alt='Massothérapeute réalisant un massage assis méthode EAS® ciblant l’épaule pour améliorer le confort musculaire'
								/>
								<p>
									Facile à intégrer dans le quotidien professionnel, le temps
									d’une pause, 20 minutes, le massage assis méthode EAS® crée
									une atmosphère plus sereine, renforce la cohésion et valorise
									l’attention que vous portez à vos talents.
								</p>
								<div className='eas-entreprise-cta cta-container-row'>
									<Cta
										link='/massage-en-entreprise'
										title={
											'CLiquez ici pour découvrir les biens-faits du massage en entreprise'
										}
										ctaLinkClassName='cta-tertiary'
									/>
									<Cta
										link='/contact?sujet=demande-de-devis'
										title={'Demandez un devis'}
										ctaLinkClassName='cta-tertiary'
										ctaText='Demandez un devis'
									/>
									<blockquote className='cta-blockquote'>
										Confiez‑moi un petit espace, et j’en ferai un refuge
										apaisant où vos collaborateurs viendront puiser énergie,
										apaisement et inspiration.
									</blockquote>
								</div>
							</div>
						</div>
					</div>
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
							<Faq items={EASFaqItems} />
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='footer-cta'>
					<h2>Envie de découvrir le massage assis méthode EAS® ?</h2>
					<p>
						Offrez-vous une parenthèse de douceur, un moment pour respirer,
						relâcher et vous recentrer. Sur Saint-Quentin en Yvelines, à
						Élancourt et Guyancourt, à domicile ou en entreprise, le massage
						assis méthode EAS® est une invitation à renouer avec votre corpset
						lâcher le mental.
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

export default MassageAssisMethodeEAS;
