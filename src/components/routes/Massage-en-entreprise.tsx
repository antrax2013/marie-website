import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/MassageEnEntreprise.scss';
import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import BgMcImageContainer from '../fragments/McImage/BgMcImageContainer';

import ImgMassEntrep1 from '../../assets/Massage-entreprise/massage-du-dos-assis-entreprise-petit-fils.jpg';

import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';

import CtaDevis from '../fragments/Ctas/Devis';
import { SoinEnEntrepriseFaqItems } from '../entities/faq-items/soin-en-entreprise';
import CtaContactezMoi from '../fragments/Ctas/ContactezMoi';
import McLinkMEAS from '../fragments/McLinks/McLink-Massage-EAS';

const MassageEnEntreprise = () => {
	return (
		<>
			<div
				className='MassageEnEntreprise'
				itemScope
				itemType='https://schema.org/Offer'
			>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1 itemProp='name'>
									Massage en entreprise à Saint‑Quentin‑en‑Yvelines - Bien-être,
									détente et qualité de vie au travail
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Pourquoi ne pas faire du bien-être de vos équipes une clé de
										la réussite de votre entreprise ?
									</p>
									<p>
										Offrir un moment de bien-être à vos collaborateurs, c’est
										leur témoigner votre considération, par le massage, tout en
										prenant soin de la richesse la plus précieuse de votre
										entreprise : l’humain.
									</p>
									<p>
										Sur Saint‑Quentin‑en‑Yvelines, Maurepas, Élancourt,
										Guyancourt, Montigny‑le‑Bretonneux, Plaisir et les communes
										voisines, j’interviens directement au sein de votre
										structure afin de proposer des temps de détente adaptés à
										votre organisation et aux besoins de vos équipes.
									</p>

									<BgMcImageAlternativeContainer
										path={ImgMassEntrep1}
										className='img-petit-fils vertical'
										alt='Massage du dos assis dans les locaux de l’agence de Plaisir de l’entreprise Petit-Fils'
									/>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaDevis className={'cta-primary'} />
										<CtaContactezMoi className={'cta-secondary'} />
									</div>
									<blockquote className='cta-blockquote'>
										Quelques minutes pour souffler, créativité, disponibilité et
										énergie renouvelées.
									</blockquote>
								</div>
							</div>
							<BgMcImageContainer
								path={ImgMassEntrep1}
								className={'img-petit-fils'}
								alt='Massage du dos assis dans les locaux de l’agence de Plaisir de l’entreprise Petit-Fils'
							/>
						</div>
					</div>
				</div>

				<ParagraphSeparator />
				<div
					className='massage-a-domicile-description-container'
					itemProp='description'
				>
					<div className='massage-a-domicile-description-main-content'>
						{/* <BgMcImageContainer
							path={ImgM5C}
							className='img-logo-M5C'
							alt='Logo de la Fédération du Massage des 5 Continents attestant de la certification'
						/> */}
						<div className='massage-a-domicile-description-content'>
							<p>
								Stress, tensions musculaires, fatigue mentale ou charge de
								travail importante peuvent avoir un impact sur la concentration,
								la motivation et la qualité de vie au travail. Aujourd’hui, le
								bien-être des collaborateurs constitue un véritable enjeu pour
								les entreprises et le
								<McLinkMEAS text='Massage du dos assis méthode EAS®' />
								un allié efficace.
							</p>
							{/* <BgMcImageAlternativeContainer
								path={ImgM5C}
								className='img-logo-M5C'
								alt='Logo de la Fédération du Massage des 5 Continents attestant de la certification'
							/> */}
							<p>
								Que ce soit à l’occasion d’une journée bien-être, d’une pause
								déjeuner, d’un événement interne, d’une semaine dédiée à la
								Qualité de Vie et des Conditions de Travail (QVCT) ou dans le
								cadre d’interventions régulières, chaque prestation est pensée
								pour offrir une expérience à la fois agréable, accessible et
								bénéfique, respectueuse de l’organisation de votre entreprise et
								des besoins de vos collaborateurs.
							</p>
							<p>
								Ma pratique s’inscrit dans une approche attentive, sur‑mesure et
								respectueuse de votre organisation. Afin de garantir des
								conditions d'intervention optimales, j’interviens directement au
								sein de vos locaux avec tout le matériel nécessaire.
							</p>
							<p>
								Un espace calme et isolé de quelques mètres carrés, une salle de
								réunion, un espace de détente, ou même un bureau, peuvent
								facilement être aménagés pour accueillir les séances. En
								quelques instants, l’endroit se transforme en un espace
								ressourçant, pensé pour offrir à vos collaborateurs une
								véritable pause bien‑être au cœur de leur journée.
							</p>
							<p>
								Grâce à une installation professionnelle et à une présence
								pleinement dédiée, les conditions sont réunies pour favoriser la
								détente, la disponibilité mentale et le relâchement, tout en
								s’intégrant harmonieusement au fonctionnement de votre
								entreprise.
							</p>
						</div>
					</div>
				</div>
				<ParagraphSeparator />

				<div className='massage-a-domicile-benefits-containers'>
					<h2 className='center-secondary-title'>
						Pourquoi proposer des massages du dos assis en entreprise ?
					</h2>
					<div className='massage-a-domicile-benefits'>
						<p>
							Les massages du dos assis en entreprise permettent d’offrir aux
							collaborateurs une véritable parenthèse dans leur journée de
							travail. D'une durée de 15 à 20 minutes, il se pratique habillé,
							sur une chaise ergonomique. Il cible principalement : le dos, la
							nuque, les épaules et les bras.
						</p>
						<p>
							C’est un format idéal en entreprise. Quelques minutes suffisent
							souvent pour :
						</p>
						<ul>
							<li>relâcher les tensions physiques</li>
							<li>diminuer la sensation de stress</li>
							<li>favoriser la concentration</li>
							<li>améliorer la disponibilité mentale</li>
							<li>encourager le bien-être au travail</li>
						</ul>
						<p>
							Ces temps de pause sont particulièrement appréciés lors des
							périodes d’activité soutenue, des événements d’entreprise ou dans
							le cadre d’une démarche de prévention et de qualité de vie au
							travail.
						</p>
						<p>
							Des interventions pensées pour améliorer la qualité de vie au
							travail et valoriser vos collaborateurs. Chaque séance incarne un
							geste de reconnaissance, un engagement sincère envers l’essentiel{' '}
							: préserver la santé et le bien‑être de vos équipes.
						</p>
						<div className='massage-a-domicile-benefits-lists'>
							<div className='massage-a-domicile-benefits-list'>
								<h3>Pourquoi les entreprises font appel à moi ?</h3>
								<p>
									Les entreprises me sollicitent parce que mes interventions
									sont sur‑mesure et s’intègrent naturellement dans leur
									fonctionnement. Je m’adapte à votre organisation pour répondre
									à vos attentes de manière optimale, sans perturber vos équipes
									ni votre rythme de travail.
								</p>
								<p>
									En amont de chaque prestation, nous prenons un temps d’échange
									pour comprendre votre environnement, la manière dont vos
									collaborateurs évoluent au quotidien, ainsi que vos besoins
									spécifiques. Ensemble, nous définissons les modalités
									d’intervention les plus pertinentes afin de garantir une
									expérience fluide, efficace et respectueuse de votre
									organisation.
								</p>
							</div>
						</div>
					</div>
				</div>

				<ParagraphSeparator />
				<div className='massage-a-domicile-prices-container'>
					<h2>Comment se déroule mes interventions ?</h2>
					<p>
						Le jour de l’intervention, je m’installe sur site avec tout le
						matériel nécessaire et réalise les soins selon le planning défini. À
						la fin de la session, je range le matériel et nous pouvons faire un
						débriefing si vous le souhaitez.
					</p>
					<h3>Comment se déroule une session de massage du dos assis ?</h3>
					<p>
						Le collaborateur reste habillé, ce qui permet une mise en place
						rapide et une séance simple à intégrer dans le rythme de travail. La
						séance se déroule en trois temps :
					</p>
					<ul>
						<li>un temps d’accueil et d’installation</li>
						<li>un temps de massage sur ma chaise ergonomique</li>
						<li>un temps de retour à la réalité</li>
					</ul>
					<div className='header-2-cta'>
						<div className='cta-container-row header-2-cta-container'>
							<CtaDevis className={'cta-primary'} />
							<CtaContactezMoi className={'cta-secondary'} />
						</div>
						<blockquote className='cta-blockquote'>
							Allouez-moi un instant : j’ouvre un espace qui détend et régénère.
						</blockquote>
					</div>
				</div>
				<div className='massage-a-domicile-prices-inner-content'>
					<h2>Zone d'intervention</h2>
					<p>
						Je me déplace principalement sur Saint‑Quentin‑en‑Yvelines et ses
						environs :
					</p>
					<ul>
						<li>Maurepas</li>
						<li>Élancourt</li>
						<li>Guyancourt</li>
						<li>Montigny-le-Bretonneux</li>
						<li>Voisins-le-Bretonneux</li>
						<li>Trappes</li>
						<li>Coignières</li>
						<li>Plaisir</li>
						<li>La Verrière</li>
						<li>Le Mesnil-Saint-Denis</li>
					</ul>
					<p>
						Pour les entreprises situées en dehors de ce secteur, n'hésitez pas
						à me contacter afin d'étudier ensemble la faisabilité de
						l'intervention.
						<br />
						<br />
						<CtaDevis />
					</p>
				</div>
				{/* <div className='massage-a-domicile-prices-inner-content'>
					<PricesM5C title='Séance de 1h30 - 70 mins de soin' />
					<div className='cta-container-row footer-cta-container massage-a-domicile-prices-cta'>
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
				</div> */}
			</div>
			{/* </div> */}
			<ParagraphSeparator />
			{/* Avis */}
			<div className='review-container'>
				<ReviewContainer filter='EAS' />
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
						<Faq items={SoinEnEntrepriseFaqItems} />
					</div>
				</div>
			</div>
			<ParagraphSeparator />
			<div className='footer-cta'>
				<h2>
					Prêt(e) à offrir à vos équipes un véritable moment de bien-être à vos
					équipes ?
				</h2>
				<p>
					Que ce soit pour une action ponctuelle ou dans le cadre d'une démarche
					durable de qualité de vie au travail, je vous accompagne dans la mise
					en place d'une prestation adaptée aux besoins de votre entreprise.
				</p>
				<p>
					Contactez-moi pour échanger et convenir ensemble du format le plus
					adapté.
				</p>
				<div className='cta-container-row footer-cta-container'>
					<CtaDevis className={'cta-primary'} />
					<CtaContactezMoi className={'cta-secondary'} />
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default MassageEnEntreprise;
