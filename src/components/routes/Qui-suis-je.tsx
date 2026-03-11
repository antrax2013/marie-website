import MetaTag from '../fragments/Tools/MetaTag';
import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgMoi from '../../assets/moi500x.jpg';
import '../../scss/routes/QuiSuisJe.scss';
import Cta from '../fragments/Ctas/Cta';
import McImage from '../fragments/McImage/McImage';
import { Adresse } from '../fragments/Adresse';
import Faq from '../fragments/FAQ/Faq';
import { QuiSuisJeFaqItems } from '../entities/faq-items/qui-suis-je-faq-items';
import CtaRendezVous from '../fragments/Ctas/RendezVous';

const QuiSuisJe = () => {
	const head = () => {
		return (
			<MetaTag
				title={import.meta.env.VITE_META_MAIN_TITLE}
				description='Découvrez mon parcours et ma philosophie autour des massages énergétiques et du Reiki Usui. Une approche bienveillante et personnalisée sur Saint-Quentin en Yvelines à Élancourt et Guyancourt, à domicile ou en entreprise, pour votre bien‑être.'
				resume='Découvrez mon parcours et ma philosophie autour des massages énergétiques et du Reiki Usui. Une approche bienveillante et personnalisée sur Saint-Quentin en Yvelines à Élancourt et Guyancourt, à domicile ou en entreprise, pour votre bien‑être.'
				forceTitle={true}
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='QuiSuisJe'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1>Massothérapeute énergétique, Maitre Reiki Usui</h1>
								<p className='header-2-sub-title'>
									Un accompagnement holistique personnalisé pour un bien-être
									profond dans les Yvelines.
								</p>
								<div
									className='header-2-description'
									itemProp='founder'
									itemScope
									itemType='https://schema.org/Person'
								>
									<p>
										Je suis <span itemProp='name'>Marie Cophignon</span>,{' '}
										<span itemProp='jobTitle'>massothérapeute énergétique</span>{' '}
										et <span itemProp='jobTitle'>maître Reiki Usui</span>.
									</p>
									<div className='img-moi-l-container size-l-hidden'>
										<McImage
											path={ImgMoi}
											className='img-qui-suis-je-moi'
											alt='Portrait professionnel de Marie COPHIGNON, Massothérapeute énergétique et Maître Reiki Usui'
										/>
									</div>
									<p>
										Depuis mars 2022, sur Saint-Quentin en Yvelines, à Élancourt
										et Guyancourt, à domicile ou en entreprise, j’accompagne les
										adultes en recherche de relaxation profonde, de mieux-être
										et de rééquilibrage énergétique, dans un cadre
										professionnel, doux et respectueux. Chaque séance est pensée
										comme une pause régénérante, adaptée à votre état physique,
										émotionnel et énergétique du moment.
									</p>
									<blockquote className='size-xl-visible hidden cta-blockquote'>
										Pouvoir apporter un soulagement physique, psychique et
										émotionnel aux personnes qui m’entourent est un véritable
										cadeau. Et je souhaite partager cela avec vous.
									</blockquote>
								</div>
								<div className='header-2-cta'>
									<div className='cta-container-row header-2-cta-container'>
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
											ctaText='Découvrir mes massages et soin Reiki'
										/>
									</div>
									<blockquote className='cta-blockquote size-xl-hidden'>
										Accordez-vous la douceur d’une pause bienveillante.
									</blockquote>
								</div>
							</div>
							<div className='header-2-image-container hidden md:inline-block'>
								<McImage
									path={ImgMoi}
									className='img-qui-suis-je-moi'
									alt='Portrait professionnel de Marie COPHIGNON, Massothérapeute énergétique et Maître Reiki Usui'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='career-header'>
					<h2 className='center-secondary-title'>Mon parcours, ma formation</h2>
					<div className='career-header-3-containers'>
						<div className='career-content'>
							<h3>Infirmière, mon métier de cœur</h3>
							<p>
								Infirmière diplômée d’état en 2005, formée à l’IFSI de Reims,
								j’ai passé 18 années à accompagner, écouter, rassurer, soutenir,
								soigner. Être infirmière, pour moi, c’était une vocation, un
								engagement du cœur. Au fil du temps, j’ai senti naître un besoin
								intérieur de prendre soin, mais autrement, en remettant
								pleinement l’humain au centre.
							</p>
							<p>
								En 2022, j’ai suivi cet élan profond. Aujourd’hui, j’ai à cœur
								de créer un espace où chacun peut se sentir accueilli tel qu’il
								est, entendu sans jugement, accompagné avec sincérité et
								bienveillance. Un espace où l’on prend du temps pour soi.
							</p>
							<div className='cta-container-row'>
								<blockquote className='cta-blockquote'>
									Prendre soin, une présence douce, une écoute attentive.
								</blockquote>
							</div>
						</div>
						<div className='career-content'>
							<h3>Maitre Reiki Usui</h3>
							<p>
								En 2020, je me suis formée au Reiki Usui auprès de{' '}
								<em>
									<a
										href='https://www.reflexologie-carolejacob.fr/le-reiki-usui/'
										title='Cliquez pour accéder à la fiche descriptive des initiations au Reiki Usui de Carole Jacob.'
										target='_blank'
									>
										Carole Jacob
									</a>
								</em>
								. Le Reiki Usui m’a offert un nouvel espace de compréhension du
								soin, une autre manière d’accompagner : plus subtile, plus
								intuitive, plus connectée à l’énergie et à l’écoute intérieure.
							</p>
							<p>
								En 2023, j’ai reçu la dernière initiation au Reiki Usui, le
								troisième degré, appelé le degré des Maîtres. Ce chemin
								initiatique m’a permis d’unir mon expérience d’infirmière à une
								approche holistique plus globale, plus subtile, alignée avec ce
								que je souhaite offrir.
							</p>
							<div className='cta-container-row'>
								<Cta
									link='/reiki-usui'
									title={'Cliquez ici pour découvrir les soins Reiki Usui.'}
								/>
								<blockquote className='cta-blockquote'>
									Le Reiki Usui, une énergie douce, un espace où le corps, le
									cœur et l’esprit se retrouvent.
								</blockquote>
							</div>
						</div>
						<div className='career-content'>
							<h3>
								Massage des 5 Continents (M5C){' '}
								<a href='/#disclaimers'>
									<span className='asterix'>*</span>
								</a>
							</h3>
							<p>
								Le Massage des 5 Continents (M5C) s’est naturellement imposé à
								moi comme le complément naturel de mes pratiques. Lorsque je me
								suis formée en 2022, j’ai découvert un soin profondément
								enveloppant, réunissant l’utilisation des huiles essentielles,
								l’énergie du Reiki et différentes techniques de massage du
								monde. Un véritable voyage intérieur, qui libère, apaise et
								réharmonise.
							</p>
							<p>
								Pratiquer le Massage des 5 Continents, pour moi, c’est offrir un
								moment de lâcher-prise, une parenthèse où l’on peut se
								reconnecter à son corps, son cœur et son énergie.
							</p>
							<p>
								Je suis aujourd’hui membre de la{' '}
								<em>
									<a
										href='https://massagedes5continents.com/membres/8424/cophignon-marie/'
										title='Cliquez pour accéder à ma fiche praticien de la Fédération du Massage des 5 Continents.'
										target='_blank'
									>
										Fédération du Massage des 5 Continents
									</a>
								</em>
								, engagée à pratiquer cette méthode avec authenticité,
								bienveillance et fidélité à ses valeurs.
							</p>
							<div className='cta-container-row'>
								<Cta
									link='/massage-des-5-continents'
									title={
										'Cliquez ici pour découvrir le Massage des 5 Continents (M5C).'
									}
								/>
								<blockquote className='cta-blockquote'>
									Le Massage des 5 Continents, un voyage où le corps se libère
									et l’énergie se réveille.
								</blockquote>
							</div>
						</div>
						<div className='career-content'>
							<h3>Massage assis méthode EAS®</h3>
							<p>
								Désireuse d’enrichir mes techniques de massage, je me suis
								formée début 2023, à l’
								<em>
									<a
										href='https://ecoledesartsdusouffle.com/nos-formations/massage-assis-eas/'
										title='Cliquez pour découvrir la formation du massage assis méthode EAS®.'
										target='_blank'
									>
										école des Arts du souffle
									</a>
								</em>
								, de Nouzonville dans les Ardennes, au massage assis méthode
								EAS®. Crée par Jean-Noël Poucet, ce massage énergétique de
								bien‑être, est à la fois relaxant et libérateur. Il m’a séduite
								par sa simplicité et son efficacité. Il propose une approche
								différente du M5C, tout en restant profondément respectueuse du
								corps et de l’énergie.
							</p>
							<p>
								Grâce à sa durée ajustable et à sa pratique sur chaise, il
								s’adapte parfaitement au monde de l’entreprise, offrant une
								pause ressourçante et accessible, même au cœur d’une journée
								chargée.
							</p>
							<div className='cta-container-row'>
								<Cta
									link='/massage-assis-methode-eas'
									title={
										'Cliquez ici pour découvrir le massage assis méthode EAS®.'
									}
								/>
								<blockquote className='cta-blockquote'>
									Le massage assis EAS®, une pause courte qui fait un grand
									bien.
								</blockquote>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<div className='centers-container'>
					<div className='center-header'>
						<h2 className='center-secondary-title'>
							Mes cabinets et lieux de consultations
						</h2>
						<p>
							Uniquement sur rendez-vous du lundi au vendredi de 09h00 à 19h00.
						</p>
					</div>
					<div className='centers-containers'>
						<div className='center-container'>
							<h3>Élancourt, les Nouveaux Horizons</h3>
							<div>
								<Adresse
									descprition='Cabinet des Nouveaux Horizons'
									floor='au rez-de-chaussée'
									streetAddress='6, résidence Les Nouveaux Horizons'
									postalCode='78990'
									addressLocality='Élancourt'
									map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.343185938041!2d1.9488790774768372!3d48.76906750698695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6837147b49e8d%3A0xe05a15fbc09f82fb!2s6%20R%C3%A9s%20les%20Nouveaux%20Horizons%2C%2078990%20%C3%89lancourt%2C%20France!5e0!3m2!1sfr!2snl!4v1766657520421!5m2!1sfr!2snl'
									latitude='48.769486'
									longitude='1.951657'
								/>
							</div>
							<div className='cta-container'>
								<Cta
									link='https://maps.app.goo.gl/yjJe2hbfVJaSamXe8'
									title='CLiquez ici pour accéder à ma fiche Google pour le cabinet des Nouveaux Horizons'
									target='_blank'
								/>
							</div>
						</div>
						<div className='center-container'>
							<h3>Guyancourt, cabinet Blowball</h3>
							<div>
								<Adresse
									descprition='Cabinet Blowball'
									floor='au rez-de-chaussée'
									streetAddress='1, rue Le Corbusier'
									postalCode='78280'
									addressLocality='Guyancourt'
									map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.4474125145919!2d2.0711613275401377!3d48.76681317927859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e680b8df551913%3A0x4c47046451eeaf2f!2s1%20Rue%20le%20Corbusier%2C%2078280%20Guyancourt!5e0!3m2!1sfr!2sfr!4v1647003179533!5m2!1sfr!2sfr'
									latitude='48.766979'
									longitude='2.071681'
								/>
							</div>
							<div className='cta-container'>
								<Cta
									link='https://maps.app.goo.gl/un8yrmpPb5rSUJeo8'
									title='CLiquez ici pour accéder à ma fiche Google pour le cabinet Blowball'
									target='_blank'
								/>
							</div>
						</div>
						<div className='center-container'>
							<h3>Consultations à domicile</h3>
							<div>
								<p>
									Je me déplace à votre domicile sur Saint-Quentin-en-Yvelines
									ses environs :
								</p>
								<div className='center-area'>
									<ul>
										<li>Maurepas</li>
										<li>Élancourt</li>
										<li>Coignières</li>
										<li>La Verrière</li>
										<li>Le Mesnil-Saint-Denis</li>
									</ul>
									<ul>
										<li>Trappes</li>
										<li>Guyancourt</li>
										<li>Montigny-le-Bretonneux</li>
										<li>Voisins-le-Bretonneux</li>
										<li>Plaisir</li>
									</ul>
								</div>
								<p>
									Je peux, ponctuellement, consulter en dehors de ce périmètre.
									Appelez moi pour que l'on voit ce qu'il est possible de faire.
								</p>
								<p className='disclaimer text-third'>
									Lorsque je me déplace à domicile, les tarifs des soins sont
									majorés de 5,00€.
								</p>
								<p>
									Pour travailler dans des conditions optimales, j'ai besoin
									d'un espace calme et dégagé d'environ 2m x 1.5m pour que je
									puisse installer ma table de massage et disposer d'assez de
									place pour circuler autour.
								</p>
							</div>
						</div>
						<div className='center-container'>
							<h3>Plaisir, espaces bien-être Vibration & Libellule</h3>
							<div>
								<Adresse
									descprition='Espaces bien-être Vibration & Libellule'
									floor='1er étages, au dessus du show room Coffret d’Alumine'
									streetAddress='5, rue Edmond Rostand'
									postalCode='78370'
									addressLocality='Plaisir'
									map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.2312208092455!2d1.9423647298532734!3d48.81519150469808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e685b4a23f8d5b%3A0xab93794cdf06c3e5!2sCoffret%20d&#39;Alumine%20*2A%20Boutique%20bien-%C3%AAtre%20%26%20%C3%A9sot%C3%A9risme!5e0!3m2!1sfr!2snl!4v1766224688840!5m2!1sfr!2snl'
									latitude='48.815378540410144'
									longitude='1.944225308046599'
								/>
							</div>
							<div className='cta-container'>
								<Cta
									link='https://www.facebook.com/profile.php?id=61573954084460'
									title={
										'Cliquez ici pour découvrir la page Facebbok des espaces bien-être Vibration et Libellule.'
									}
								/>
							</div>
						</div>
						<div className='center-container'>
							<h3>Maurepas, siège de l’entreprise</h3>
							<div>
								<Adresse
									descprition='Exceptionnellement, je peux vous recevoir au siège de
              l’entreprise qui se trouve à l’adresse suivante :'
									streetAddress='14, place des Ardennes résidence la Villeparc'
									postalCode='78310'
									addressLocality='Maurepas'
									map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.546307818326!2d1.9400818128986803!3d48.771459771200966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6836f3dee7473%3A0x7e1a20a8e00e22a4!2s14%20Pl.%20des%20Ardennes%2C%2078310%20Maurepas%2C%20France!5e0!3m2!1sfr!2snl!4v1717231741310!5m2!1sfr!2snl'
									latitude='48.771601'
									longitude='1.942598'
								/>
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
							<Faq items={QuiSuisJeFaqItems} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuiSuisJe;
