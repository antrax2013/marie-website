import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/M5C.scss';
// import BgMcImageAlternativeContainer from '../fragments/McImage/BgMcImageAlternativeContainer';
import CtaRendezVous from '../fragments/Ctas/RendezVous';
import CtaOffres from '../fragments/Ctas/Offres';
import ReviewContainer from '../fragments/Reviews/Reviews-Container';
import SocialNetworks from '../fragments/Social-Neworks';
import Faq from '../fragments/FAQ/Faq';
import { SoinDomicileFaqItems } from '../entities/faq-items/soin-a-domicile';
import CtaDevis from '../fragments/Ctas/Devis';

const SoinADomicile = () => {
	return (
		<>
			<div
				className='SoinDomicile'
				itemScope
				itemType='https://schema.org/Offer'
			>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1 itemProp='name'>
									Les soins à domicile – toute la qualité d’un accompagnement
									professionnel chez vous
								</h1>
								<div className='header-2-description'>
									<p className='header-2-sub-title'>
										Imaginez enfin un moment rien que pour vous, chez vous...
									</p>
									<p>
										Offrez-vous un véritable moment pour vous, dans le confort
										de votre domicile et avec toute l'exigence d’un soin
										professionnel.
									</p>
									<p>
										Sur Saint‑Quentin‑en‑Yvelines, Maurepas, Élancourt,
										Guyancourt, Plaisir et les communes voisines, je viens
										directement à votre rencontre afin que vous puissiez vous
										accorder une véritable parenthèse de bien‑être sans les
										contraintes liées aux déplacements.
									</p>
									{/* <BgMcImageAlternativeContainer
										path={ImgM5CDos}
										className='img-bas-dos'
										alt='Massothérapeute réalisant un massage des 5 continents sur le bas du dos pour favoriser une détente profonde'
									/> */}
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
										<CtaRendezVous />
										<CtaOffres />
									</div>
									<blockquote className='cta-blockquote'>
										Installez-vous, respirez, relaxez-vous... le reste, je
										m’occupe.
									</blockquote>
								</div>
							</div>
							{/* <BgMcImageContainer
								path={ImgM5CDos}
								className={'img-bas-dos'}
								alt='Massothérapeute réalisant un massage des 5 continents sur le bas du dos pour favoriser une détente profonde'
							/> */}
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
								Que vous choisissiez un{' '}
								<a href='/massage-assis-methode-eas'>
									massage assis du dos méthode EAS®
								</a>{' '}
								, un{' '}
								<a href='/massage-des-5-continents'>Massage des 5 Continents</a>{' '}
								ou un soin énergétique <a href='/reiki-usui'>Reiki Usui</a>, ces
								pratiques agissent sur le corps, les tensions et le mental, pour
								vous permettre de vous poser, de respirer et de retrouver une
								sensation d’équilibre dans un espace de bien-être, le vôtre.
							</p>
							{/* <BgMcImageAlternativeContainer
								path={ImgM5C}
								className='img-logo-M5C'
								alt='Logo de la Fédération du Massage des 5 Continents attestant de la certification'
							/> */}
							<p>
								Ma pratique s’inscrit dans une approche attentive, personnalisée
								et respectueuse de votre environnement. Je me déplace à votre
								domicile avec tout le matériel nécessaire : table de massage
								professionnelle, chaise ergonomique selon le soin, linge adapté
								et matériel de soin. Grâce au confort de votre foyer et à une
								installation professionnelle, les conditions sont réunies pour
								favoriser la détente, le lâcher-prise et le rééquilibrage du
								corps et de l’esprit.
							</p>
							<p>
								Quelques touches apaisantes viennent compléter cet espace de
								bien-être afin que vous puissiez profiter pleinement de votre
								séance. Vous n’avez rien à prévoir : je m’occupe de tout.
							</p>
							<p>
								Cette approche convient à une grande majorité des personnes,
								qu’il s'agisse de s'accorder un moment de bien-être, de soulager
								les tensions du quotidien, de retrouver de l'énergie ou
								simplement de prendre soin de soi en toute sérénité.
							</p>
						</div>
					</div>
				</div>
				<ParagraphSeparator />

				<div className='massage-a-domicile-benefits-containers'>
					<h2 className='center-secondary-title'>
						Pourquoi choisir un soin à domicile ?
					</h2>
					<div className='massage-a-domicile-benefits'>
						<p>
							Recevoir un soin à domicile, c’est s’offrir un moment de bien-être
							sans les contraintes liées aux déplacements. Une fois la séance
							terminée, vous pouvez prolonger pleinement les bienfaits du soin
							dans le calme de votre environnement, sans avoir à reprendre la
							route ou à affronter les sollicitations du quotidien.
						</p>
						<p>Il est particulièrement adapté si vous recherchez : </p>
						<ul>
							<li>une pause ressourçante dans un rythme de vie soutenu</li>
							<li>un soutien pour mieux gérer le stress</li>
							<li>un moment pour vous reconnecter à votre corps</li>
							<li>un soin raffiné et profond</li>
							<li>un massage pensé comme une expérience unique</li>
						</ul>
						<p>
							Le domicile constitue souvent un cadre rassurant et familier qui
							favorise le relâchement physique et émotionnel. Vous restez dans
							votre propre espace, à votre rythme, tout en bénéficiant d'un
							accompagnement personnalisé réalisé dans des conditions
							professionnelles.
						</p>
						<p>
							Selon vos envies et lorsque les conditions le permettent, la
							séance peut également être réalisée sur une terrasse, dans un
							jardin ou dans tout autre espace calme de votre choix.
						</p>
						<div className='massage-a-domicile-benefits-lists'>
							<div className='massage-a-domicile-benefits-list'>
								<ul>
									<li>Pas de temps perdu dans les trajets</li>
									<li>Confort et intimité de votre domicile</li>
									<li>Installation professionnelle complète</li>
									<li>Accompagnement personnalisé</li>
									<li>Détente prolongée après la séance</li>
								</ul>
							</div>
						</div>
						<blockquote>
							La douceur de votre domicile, l’exigence d’un soin professionnel.
						</blockquote>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='massage-a-domicile-targets-container'>
					<h2>Quels soins puis-je réaliser à votre domicile ?</h2>

					<div className='massage-a-domicile-targets-lists'>
						<div className='massage-a-domicile-target-list'>
							<p>
								La plupart de mes prestations peuvent être réalisées directement
								chez vous.
							</p>

							<ul>
								<li>
									<strong>
										<a href='/reiki-usui'>Reiki Usui</a>
									</strong>
									<br />
									Un soin énergétique doux favorisant détente, équilibre et
									harmonisation.
								</li>

								<li>
									<strong>
										<a href='/massage-des-5-continents'>
											Massage des 5 Continents
										</a>
									</strong>
									<br />
									Un massage complet alliant différentes techniques de massage,
									huiles essentielles et Reiki Usui.
								</li>

								<li>
									<strong>
										<a href='/massage-assis-methode-eas'>
											Massage du dos assis méthode EAS®
										</a>
									</strong>
									<br />
									Un massage énergétique rapide permettant de relâcher les
									tensions et de retrouver vitalité et disponibilité.
								</li>
							</ul>
						</div>
					</div>
					<blockquote>
						Le plus beau voyage est parfois celui que l'on entreprend dans le
						confort de son domicile.
					</blockquote>
				</div>
				<ParagraphSeparator />
				<div className='massage-a-domicile-prices-container'>
					<h2>Comment se déroule une séance à domicile ?</h2>
					<ol>
						<li>Prise de rendez-vous et échange sur vos besoins.</li>
						<li>Installation du matériel dans l'espace prévu.</li>
						<li>Réalisation du soin choisi.</li>
						<li>Temps d'échange après la séance si vous le souhaitez.</li>
						<li>
							Vous profitez pleinement des bienfaits du soin dans le confort de
							votre domicile.
						</li>
					</ol>
					<div className='header-2-cta'>
						<div className='cta-container-row header-2-cta-container'>
							<CtaRendezVous />
							<CtaOffres />
						</div>
						<blockquote className='cta-blockquote'>
							Là où vous vous sentez le mieux commence souvent le chemin du
							bien-être.
						</blockquote>
					</div>
				</div>
				<div className='massage-a-domicile-prices-inner-content'>
					<h2>Zone d'intervention à domicile</h2>
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
						En dehors de cette zone, n’hésitez pas à me contacter pour que nous
						puissions étudier ensemble la possibilité d’un déplacement.
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
						<Faq items={SoinDomicileFaqItems} />
					</div>
				</div>
			</div>
			<ParagraphSeparator />
			<div className='footer-cta'>
				<h2>Prêt(e) à vous accorder un moment pour vous ?</h2>
				<p>
					Que vous souhaitiez découvrir le Reiki Usui, profiter d’un Massage des
					5 Continents ou bénéficier d’un massage du dos assis méthode EAS®, je
					me déplace directement à votre domicile sur Saint‑Quentin‑en‑Yvelines
					et ses environs.
				</p>
				<p>
					Contactez-moi pour échanger sur vos besoins et convenir ensemble du
					rendez-vous le plus adapté.
				</p>
				<div className='cta-container-row footer-cta-container'>
					<CtaRendezVous />
					<CtaOffres />
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default SoinADomicile;
