import ImgSoin1 from '../../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane-en-cours.jpg';
import ImgSoin2 from '../../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane.jpg';
import MetaTag from '../../fragments/MetaTags/MetaTag';
import '../../../scss/routes/Blog.scss';
import { Adresse } from '../../fragments/Adresse';
import ParagraphSeparator from '../../fragments/Tools/Paragraph-Separator';

const DuoTambourEAS = () => {
	return (
		<>
			<MetaTag tag='actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines' />
			<div className='Blog'>
				<div className='article' itemScope itemType='https://schema.org/Event'>
					<h1>
						<span itemProp='name' className='p-button-label'>
							Massage assis méthode EAS® & Tambour Unité
						</span>{' '}
						: le soin duo à Plaisir
					</h1>
					<div className='hero'>
						<div className='hero-container'>
							<div className='hero-description-container'>
								<p>
									Offrez-vous un moment de reconnexion profonde avec ce soin
									unique, entre Empire du Milieu et Grand Nord, proposé par{' '}
									<em>Marie Cophignon</em>, praticienne en{' '}
									<a
										href='/massage-assis-methode-eas'
										title='En savoir plus sur le massage assis méthode EAS®'
									>
										massage assis méthode EAS®
									</a>{' '}
									à Saint-Quentin-en-Yvelines, et <em>Floriane Fagot</em> (Flofa
									Art et Vibration), sonothérapeute à Plaisir, et son tambour
									unité.
								</p>
								<div className='hero-description-footer'>
									<div className='ctas-container'>
										<a href='/contact' className='cta-button'>
											📋 Réserver
										</a>
										{'  '}
										<a href='tel:+33773552770' className='cta-button'>
											📞 Appeler
										</a>
									</div>
								</div>
							</div>
							<div className='hero-illustration-container'>
								<img
									className='image-soin-1'
									src={ImgSoin1}
									alt='Massage EAS® et soin vibratoire au tambour Unité à Plaisir (SQY - 78) avec Marie et Floriane, séance sur chaise de massage ergonomique'
								/>
								<blockquote className='citation'>
									Vibrations des terres ancestrales, douceurs des terres de
									l'aube.
								</blockquote>
							</div>
						</div>
					</div>
					<h2>Un voyage intérieur à deux voix des Yvelines.</h2>
					<div itemProp='description'>
						<p>
							Fermez les yeux. Vous êtes confortablement installé(e), le dos
							soutenu, le corps relâché sur une chaise de massage enveloppante.
							L’air est doux, le silence habité. Autour de vous, le temps
							ralentit.
						</p>
						<p>
							Marie pose ses mains avec justesse. Par le massage assis méthode
							EAS®, elle invite votre corps à se délester de ses tensions, à se
							réancrer, à respirer à nouveau. Chaque pression, chaque mouvement
							est une clé qui ouvre une porte vers plus de présence.
						</p>
						<p>
							Derrière vous, un souffle ancien s’élève. Le tambour Unité,
							immense et vibrant, résonne sous les mains de Floriane. Venu du
							Canada et fabriqué en peau de wapiti, il repose sur un chevalet
							comme un totem. Ses vibrations profondes traversent l’espace,
							caressent vos cellules, réveillent des mémoires oubliées.
						</p>
						<p>
							Les gestes de Marie et les battements de Floriane s’entrelacent.
							C’est un dialogue sans mots, une danse subtile entre le corps et
							l’âme. Vous êtes là, au centre de ce soin, bercé(e) par la
							pulsation du vivant, entre ciel et terre.
						</p>
						<p>
							Un soin, deux présences, une seule intention : vous ramener à
							vous-même.
						</p>
					</div>
					<ParagraphSeparator />
					<h2>Dates et horaires sur Plaisir (SQY - Yvelines)</h2>
					<div className='dates'>
						<div className='dates-container'>
							<div>
								<h3 itemScope itemType='https://schema.org/Offer'>
									Durée et format
								</h3>
								<meta
									itemProp='name'
									content='Massage assis méthode EAS® & Tambour Unité'
								></meta>
								<ul>
									<li>
										Séance de 30 mins, 15 mins de soin à{' '}
										<meta itemProp='priceCurrency' content='EUR' />
										<span itemProp='price' content='50.00'>
											50 €
										</span>
									</li>
									<li>
										Séance de 45 mins, 30 mins de soin à{' '}
										<meta itemProp='priceCurrency' content='EUR' />
										<span itemProp='price' content='90.00'>
											90 €
										</span>
									</li>
								</ul>
								<h3>Dates</h3>
								<ul>
									<li>
										<strong>
											<meta itemProp='startDate' content='2026-01-31' />
											Samedi 31 janvier 2026
										</strong>{' '}
										– de 14h à 18h
									</li>
									<li>
										<strong>
											<meta itemProp='startDate' content='2026-03-14' />
											Samedi 14 mars 2026
										</strong>{' '}
										– de 14h à 18h
									</li>
								</ul>
								<p className='rdv'>
									<em>Uniquement sur rendez-vous</em>
								</p>
								<div className='date-description-footer'>
									<div className='ctas-container'>
										<a href='/contact' className='cta-button'>
											📋 Réserver
										</a>
										{'  '}
										<a href='tel:+33773552770' className='cta-button'>
											📞 Appeler
										</a>
									</div>
								</div>
							</div>
							<div className='dates-illustration-container'>
								<img
									className='image-soin-2'
									src={ImgSoin2}
									alt='Massage EAS® et soin vibratoire au tambour Unité à Plaisir (SQY - 78) avec Marie et Floriane, séance sur chaise de massage ergonomique'
								/>
							</div>
						</div>
						<blockquote className='citation'>
							L’alliance de la force qui murmure et de celle qui gronde et
							réveille les mémoires du corps sacré.
						</blockquote>
					</div>
					<ParagraphSeparator />
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
					<ParagraphSeparator />
					<h3>Lieu du soin : Plaisir, Yvelines (78)</h3>
					<div
						className='location'
						itemProp='location'
						itemScope
						itemType='https://schema.org/Place'
					>
						<p>
							<span itemProp='name'>
								À Plaisir (78), Atelier Flofa Art & Vibration
							</span>
						</p>
						<Adresse
							streetAddress='5, Rue Edmond Rostand'
							postalCode='78370'
							addressLocality='Plaisir'
							map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.2312208092455!2d1.9423647298532734!3d48.81519150469808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e685b4a23f8d5b%3A0xab93794cdf06c3e5!2sCoffret%20d&#39;Alumine%20*2A%20Boutique%20bien-%C3%AAtre%20%26%20%C3%A9sot%C3%A9risme!5e0!3m2!1sfr!2snl!4v1766224688840!5m2!1sfr!2snl'
							latitude='48.815378540410144'
							longitude='1.944225308046599'
						/>
					</div>
					<ParagraphSeparator />
					<div>
						<p>
							Envie d'un soin énergétique inédit à Plaisir (78) : la douceur
							subtile de l'empire du milieu rencontre la vibration brute du
							tambour ancestral.
						</p>
						<div className='reservation-description-footer'>
							<div className='ctas-container'>
								<a href='/contact' className='cta-button'>
									📋 Réserver
								</a>
								{'  '}
								<a href='tel:+33773552770' className='cta-button'>
									📞 Appeler
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DuoTambourEAS;
