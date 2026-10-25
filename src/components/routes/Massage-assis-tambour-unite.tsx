import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/Massage-assis-tambour-unite.scss';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import CtaOffres from '../fragments/Ctas/Offres';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';
import Cta from '../fragments/Ctas/Cta';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';
import { Adresse } from '../fragments/Adresse';
import { DuoTambUniteEASFaqItems } from '../entities/faq-items/eas-tambour-unite-faq-items';
import { PricesMEASTambourUnite } from '../fragments/Prices/massage-eas-tambour-unite';

import FloMarieMoi from '../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane-en-cours.jpg';
import FloMarie from '../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane.jpg';
import McLink from '../fragments/McLink';

const MassageAssisTambourUnite = () => {
	return (
		<>
			<div className='MassageAssisTambourUnite'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1>
									Soin duo massage du dos assis - Tambour Unité, quand le
									toucher rencontre la vibration sonore
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Et si le massage se prolongeait au-delà du toucher ?
									</p>
									<p>
										Le soin duo massage du dos assis - Tambour Unité est né de
										la fusion de deux pratiques et de la complicité naturelle
										qui unit Marie et Floriane. Gestes et battements s’accordent
										à l’unisson, dans une harmonie où les rythmes du massage et
										du Tambour Unité se répondent et s’enrichissent.
									</p>
									<p>
										Proposé exclusivement à Plaisir, dans les Yvelines, au sein
										de l’atelier Flofa Art & Vibration, ce soin vous invite à
										vivre une expérience unique où toucher, son et vibrations
										s’entremêlent, entre détente corporelle et voyage intérieur.
									</p>
									<BgMcImageAlternativeContainer
										path={FloMarie}
										className='img-flo-marie'
										alt='Marie et Floriane posant en compagnie de la chaise de massage et du Tambour Unité.'
									/>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaRendezVous />
										<CtaOffres />
									</div>
									<blockquote className='cta-blockquote'>
										Vibrations des terres ancestrales, douceurs des terres de
										l'aube.
									</blockquote>
								</div>
							</div>
							<BgMcImageContainer
								path={FloMarie}
								className={'img-flo-marie'}
								alt='Marie et Floriane posant en compagnie de la chaise de massage et du Tambour unité.'
							/>
						</div>
					</div>
				</div>

				<ParagraphSeparator />
				<div className='massage-assis-tambour-unite-description-container'>
					<div className='massage-assis-tambour-unite-description-main-content'>
						<BgMcImageContainer
							path={FloMarieMoi}
							className='img-massage'
							alt='Marie et Floriane en train de faire un soin duo massage du dos assis - Tambour Unité'
						/>
						<div className='massage-assis-tambour-unite-description-content'>
							<p>
								Le soin duo duo massage du dos assis - Tambour Unité, est une
								expérience sensorielle créée et pratiquée à deux par Marie et
								Floriane. Il associe les gestes du massage du dos assis, méthode
								EAS®, aux sons et aux vibrations d’un Tambour Unité de près de
								1,80 m, installé sur son chevalet.
							</p>
							<BgMcImageAlternativeContainer
								path={FloMarieMoi}
								className='img-massage'
								alt='Marie et Floriane en train de faire un soin duo massage du dos assis - Tambour Unité'
							/>
							<p>
								Mais leur soin ne repose pas sur un enchaînement appris à
								l’avance. Leur complicité leur permet de s’écouter, de se
								comprendre et de s’ajuster naturellement tout au long de la
								séance. Pendant que Marie fait évoluer son massage, Floriane
								adapte instinctivement le rythme et l’intensité du Tambour
								Unité.
							</p>
							<p>
								Massage, son et vibrations agissent ainsi simultanément. Le
								toucher apporte sa propre dimension, le son crée une présence
								enveloppante et les vibrations du Tambour Unité ajoutent une
								sensation physique singulière. Ce n’est donc pas un massage
								accompagné d’un tambour, mais un soin construit autour de la
								rencontre et de la synergie de ces trois dimensions.
							</p>
							<p>
								Chaque séance est unique. Elle se construit dans l’instant, au
								rythme du massage, du Tambour Unité et de cette entente
								naturelle entre les deux praticiennes.
							</p>
							<p>
								Ce soin est proposé exclusivement à{' '}
								<b>
									l’atelier Flofa Art & Vibration, à Plaisir dans les Yvelines
								</b>
								.
							</p>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<p className='massage-assis-tambour-unite-story-link'>
					Une idée spontanée, deux amies et deux pratiques qui se rencontrent.
					<McLink
						text='Découvrir comment ce soin est né'
						target={'_blank'}
						href={'/articles/soin-massage-eas-tambour-sqy-plaisir-yvelines'}
					/>
				</p>
				<ParagraphSeparator />
				<div className='massage-assis-tambour-unite-benefits-containers'>
					<h2 className='center-secondary-title'>
						Les bienfaits du soin duo massage du dos assis - Tambour Unité
					</h2>
					<div className='massage-assis-tambour-unite-benefits'>
						<p>
							Le massage, le son et les vibrations se déploient simultanément
							tout au long du soin. Le jeu du Tambour Unité accompagne
							l’évolution du massage : très doux au commencement, il gagne
							progressivement en intensité avant de revenir vers une conclusion
							plus calme. Cette progression n’est jamais figée. Floriane
							l’adapte instinctivement au déroulement de chaque séance.
						</p>
						<div className='massage-assis-tambour-unite-benefits-lists'>
							<div className='massage-assis-tambour-unite-benefits-list'>
								<p>
									Le soin duo massage du dos assis - Tambour Unité apporte :
								</p>
								<ul>
									<li>Détendre rapidement le dos, la nuque et les épaules</li>
									<li>Libérer les tensions liées au stress et à la posture</li>
									<li>Améliorer la circulation énergétique</li>
									<li>
										Favoriser une meilleure respiration et un apaisement mental
									</li>
								</ul>
							</div>
							<div className='massage-assis-tambour-unite-benefits-disclaimers'>
								<p>
									Le soin duo massage du dos assis - Tambour Unité n'est pas :
								</p>
								<ul className='disclaimer'>
									<li>Une pratique de la masso-kinésithérapie</li>
									<li>Une pratique médicale</li>
									<li>Un massage naturiste, tantrique ou à caractère sexuel</li>
								</ul>
							</div>
						</div>
						<p>
							Ce soin ne consiste pas à ajouter un simple fond sonore à un
							massage. Il ne juxtapose pas non plus deux pratiques
							indépendantes.
						</p>
						<p>
							Tout au long de la séance, Marie et Floriane s’ajustent l’une à
							l’autre. Les gestes du massage influencent le rythme et
							l’intensité du Tambour Unité, tandis que les sons et les
							vibrations participent pleinement à l’expérience. C’est cette
							synergie qui donne au soin son caractère singulier.
						</p>

						<blockquote>
							L’alliance de la force qui murmure et de celle qui gronde et
							réveille les mémoires du corps sacré.
						</blockquote>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='massage-assis-tambour-unite-targets-container'>
					<h3>
						À qui s’adresse le soin duo massage du dos assis - Tambour Unité ?
					</h3>
					<p>
						Le soin holistique s’adresse notamment aux personnes curieuses de
						découvrir une expérience sensorielle différente, associant toucher,
						son et vibrations.
					</p>
					<p>
						Aucune connaissance du massage du dos assis ou du Tambour Unité
						n’est nécessaire pour en profiter.
					</p>

					<div className='massage-assis-tambour-unite-targets-lists'>
						<div className='massage-assis-tambour-unite-target-list'>
							<p>Il est particulièrement adapté si vous recherchez : </p>
							<ul>
								<li>Une pause ressourçante dans un rythme de vie soutenu</li>
								<li>Un moment pour vous reconnecter à votre corps</li>
								<li>Un soin énergétique doux et profond</li>
							</ul>
						</div>
						<div className='massage-assis-tambour-unite-target-disclaimer-list'>
							<p>Il est contre-indiqué en cas de : </p>
							<ul className='disclaimer'>
								<li>
									Troubles psychotiques, schizophréniques ou de dissociation de
									la personnalité
								</li>
								<li>
									Douleurs aiguës ou d'une inflammation au niveau des zones
									massées
								</li>
							</ul>
						</div>
					</div>
					<blockquote>Deux sensibilités, une seule expérience.</blockquote>
				</div>
				<ParagraphSeparator />
				<div className='massage-assis-tambour-unite-prices-container'>
					<h2>Le déroulé du soin vibratoire</h2>
					<h3>L’accueil – le seuil du voyage</h3>
					<p>
						Vous arrivez, le cœur encore pris dans le tumulte du quotidien. Ici,
						le temps s’étire. On vous invite à vous poser, à respirer. Un
						échange doux s’installe, sans hâte. Vos mots, vos silences, vos
						ressentis sont accueillis avec bienveillance. Vous vous installez,
						confortablement, sur une chaise de massage ergonomique. Le corps
						commence déjà à se déposer.
					</p>
					<h3>Le soin – la traversée vibratoire</h3>
					<p>
						Marie pose ses mains sur vos épaules, et de ce contact, nait une
						chaleur douce qui se diffuse, comme un souffle qui réveille
						délicatement le corps. Sous ses gestes, les tensions se relâchent,
						les tissus s’assouplissent, et votre esprit s’abandonne. Puis la
						pulsation du tambour Unité s’élève, ample et profonde. Floriane fait
						vibrer l’air, avec la douceur persistante des alizés des grandes
						plaines. La vibration descend dans le bassin, remonte le long de la
						colonne, ouvre la poitrine, jusqu’à atteindre des zones plus
						profondes, plus sensibles. Les mains et le tambour se répondent, se
						mêlent, créant un mouvement qui traverse, enveloppe, réaccorde. On
						se sent porté(e) par un courant intérieur, intensément vivant(e),
						comme si le corps retrouvait sa densité, sa fluidité, sa lumière.
					</p>
					<h3>L’intégration – le retour à soi</h3>
					<p>
						Le tambour s’apaise. Les mains se retirent. Le silence revient,
						dense et habité. Vous restez là, quelques instants, à l’écoute de ce
						qui vibre encore en vous. Un thé, un mot, un regard. Vous repartez,
						plus léger(e), plus aligné(e), comme si quelque chose en vous
						s’était remis à chanter.
					</p>
				</div>
				<ParagraphSeparator />
				<div className='massage-assis-tambour-unite-prices-container'>
					<h3>Tarifs 2026 du soin duo massage du dos assis - Tambour Unité </h3>
					<div className='massage-assis-tambour-unite-prices-content'>
						<div className='massage-assis-tambour-unite-prices-image-content'>
							<p>À Plaisir (78), Atelier Flofa Art & Vibration</p>
							<Adresse
								streetAddress='5, Rue Edmond Rostand'
								postalCode='78370'
								addressLocality='Plaisir'
								map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.2312208092455!2d1.9423647298532734!3d48.81519150469808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e685b4a23f8d5b%3A0xab93794cdf06c3e5!2sCoffret%20d&#39;Alumine%20*2A%20Boutique%20bien-%C3%AAtre%20%26%20%C3%A9sot%C3%A9risme!5e0!3m2!1sfr!2snl!4v1766224688840!5m2!1sfr!2snl'
								latitude='48.815378540410144'
								longitude='1.944225308046599'
							/>
							<blockquote>
								Deux praticiennes, deux univers, un même rythme.
							</blockquote>
						</div>
						<div className='massage-assis-tambour-unite-prices-inner-content'>
							<PricesMEASTambourUnite title='Durée et format' />
							<p>
								Ces temps comprennent l’accueil, l’installation, le soin puis un
								temps d’échange et d’intégration après la séance.
							</p>
							<div className='cta-container-row footer-cta-container massage-assis-tambour-unite-prices-cta'>
								<CtaRendezVous />
								<Cta
									link='/offres-et-tarifs#massage-eas-tamobur-unite-tarifs'
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
					<ReviewContainer />
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
							<Faq items={DuoTambUniteEASFaqItems} />
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='footer-cta'>
					<h2>Vivre l’expérience du soin duo</h2>
					<p>
						Massage, rythme, sons et vibrations ne se succèdent pas : ils
						évoluent ensemble. À travers leur complicité et leurs deux
						pratiques, Marie et Floriane ont créé un soin qu’aucune des deux ne
						pourrait proposer seule.
					</p>
					<p>
						Venez découvrir cette expérience singulière dans l’univers de{' '}
						<b>Flofa Art & Vibration à Plaisir</b> et laissez-vous surprendre
						par la rencontre du toucher et du Tambour Unité.
					</p>
					<p>
						<b>Pour prendre rendez-vous, contactez Marie directement.</b>
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

export default MassageAssisTambourUnite;
