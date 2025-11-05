import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Offres.scss';
import ImgCarteCadeau from '../../assets/Offres/carte-cadeau.png';
// import { Panel } from 'primereact/panel';

const Offres = () => {
	const head = () => {
		return (
			<MetaTag
				title={'Tarifs et Offres'}
				description='Maitre Reiki Usui, je vous propose, sur Saint Quentin en Yvelines, différentes offres pour mes soins énergétiques Reiki Usui, massage assis méthode EAS® et Massage des 5 Continents (M5C). Venez les découvrir.'
				resume='Mes offres de soins énergétiques Reiki Usui, massage assis méthode EAS® et Massage des 5 Continents, ou M5C, sont ajustées au plus près de vos besoins.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='Offres'>
				<article>
					<h1>Mes offres de soins</h1>
					<section className='paragraphe-1'>
						<section className='paragraphe-content'>
							<p>
								Dans cette espace, vous allez retrouver mes tarifs, offres et
								promotions pour mes soins énergétiques <em>Reiki</em>,{' '}
								<em>massage assis méthode EAS®</em> et{' '}
								<em>Massage des 5 Continents</em> (<em>M5C</em>).
							</p>
							<p>
								<b>
									En aucun cas, un soin énergétique ne se substitue à un
									traitement médical allopathique. Mes soins énergétiques ne
									soignent pas, ils vous accompagnent vers la guérison.
								</b>
							</p>
							<p>
								La durée des séances est aproximativement le temps que nous
								allons consacrer ensemble à votre bien être. Elle comprend à la
								fois la durée du soin mais également, le temps d'échanges
								nécessaires à leur bon déroulement. Ce temps, est important. Il
								me permet de connaitre vos souhaits, vos besoins et de
								déterminer, ensemble, vos éventuelles contre-indications. Ainsi,
								je peux personnaliser mes soins et m'assurer qu'il vous sera
								profitable. Dans le cas contraire, il sera plus sage d'annuler
								la séance.
							</p>
							<i>Règlement par chèque ou espèces uniquement.</i>
							<h2>Les soins energétiques</h2>
							{/* <div id='promotion'>
								<Panel header='Promotion - le retour du coffret Duo'>
									<p className='m-0'>
										Le coffret Duo est de retour jusqu'à fin février... Mixez
										vos envies.
									</p>
									<p className='m-0'>
										20€ de remise si vous prenez 2 soins au choix, identiques ou
										différents, parmi :
									</p>
									<ul>
										<li>✨ Soin Reiki Usui</li>
										<li>✨ Massage des 5 continents</li>
										<li>
											✨ Massage du dos assis méthode EAS® de 45 min<sup>*</sup>
											<br />
											<i>
												<sup>*</sup> Les massages du dos de 20 min et de 35 min
												ne bénéficient pas de la réduction.
											</i>
										</li>
									</ul>
									<p className='m-0'>
										<b>Les soins sont valables 4 mois après l'achat.</b>
									</p>
									<p className='m-0'>
										Mixez vos envies, pour vous ou pour offrir 🎁.
									</p>
								</Panel>
							</div> */}
							<ul>
								<ol>Les massages energétiques</ol>
								<li>
									<a href='#massage-assis-methode-EAS-tarifs'>
										Massage assis méthode EAS® - durée variable
									</a>
								</li>
								<li>
									<a href='#m5c-tarifs'>
										<em className='asterix text-third'>*</em> Massage des 5
										Continents (M5C) - 01h30
									</a>
								</li>
								<br />
								<ol>Les soins Reiki Usui</ol>
								<li>
									<a href='#reiki-holistique-tarifs'>
										Soin énergétique holistique - 01h00
									</a>
								</li>
								<li>
									<a href='#reiki-cible-tarifs'>
										Soin énergétique ciblé - 0h30
									</a>
								</li>
							</ul>
							<p>
								<i className='text-third'>
									(*) Le Massage des 5 Continents n'est accessible qu'aux
									personnes majeures.
								</i>
							</p>
							<br />
							<h2>Les offres découvertes et partages</h2>
							<li>
								<a href='#decouverte'>Offre découverte</a>
							</li>
							<li>
								<a href='#parrainage'>Parrainage</a>
							</li>
							<li>
								<a href='#carte-cadeau'>Carte cadeau</a>
							</li>
							<p>
								Mon savoir-faire, mes qualités d'écoute et d'empathie sont à
								votre service pour vous accompagner durant vos séances. J'adapte
								mes soins énergétiques à vos besoins et contre-indications,
								faisant de chaque soin un instant unique. Votre instant.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<h2>Tarifs et préstations</h2>
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								Pour tous mes soins énergétiques à domicile, j'applique une
								majoration de 5€, sur le tarif de la séance, pour le temps de
								déplacement et les frais d'essence. Je peux, ponctuellement,
								consulter en dehors de mon périmètre. Auquel cas appelez moi
								pour que l'on convienne à l'avance du tarif de la consultation.
							</p>
						</section>
					</section>
					<h3>Massages énergétiques</h3>
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h4 id='massage-assis-methode-EAS-tarifs'>
								Massage assis méthode EAS®
							</h4>
							<table>
								<tbody>
									<tr>
										<th>&nbsp;</th>
										<th>Cabinet</th>
										<th>Domicile</th>
										<th colSpan={5}>
											Entreprise{' '}
											<span className='asterix' id='asterix'>
												*
											</span>
										</th>
									</tr>
									<tr>
										<td>durée 0h20</td>
										<td>25 €</td>
										<td>30 €</td>
									</tr>
									<tr>
										<td>durée 0h35</td>
										<td>40 €</td>
										<td>45 €</td>
									</tr>
									<tr>
										<td>durée 0h45</td>
										<td>50 €</td>
										<td>55 €</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</section>
						<section className='paragraphe-content'>
							<h4 id='m5c-tarifs'>Massage des 5 Continents (M5C) - 01h30</h4>
							<table>
								<tbody>
									<tr>
										<th>&nbsp;</th>
										<th>Cabinet</th>
										<th>Domicile</th>
									</tr>
									<tr>
										<td>à l’unité</td>
										<td>90 €</td>
										<td>95 €</td>
									</tr>
									<tr>
										<td>pack 3 soins</td>
										<td>260 €</td>
										<td>275 €</td>
									</tr>
									<tr>
										<td>pack 6 soins</td>
										<td>500 €</td>
										<td>530 €</td>
									</tr>
									<tr>
										<td>pack 12 soins</td>
										<td>990 €</td>
										<td>1&nbsp;050 €</td>
									</tr>
								</tbody>
							</table>
						</section>
					</section>
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<p>
								<i>
									<span className='asterix' id='asterix'>
										*
									</span>{' '}
									Massage assis méthode EAS® en entreprise, tarif de la
									prestation sur devis.
								</i>
							</p>
						</section>
					</section>
					<br />

					<h3>Soins Reiki Usui</h3>
					<section className='paragraphe-3' id='#reiki-tarifs'>
						<section className='paragraphe-content'>
							<h4 id='reiki-holistique-tarifs'>
								Soin énergétique holistique - 01h00
							</h4>
							<table>
								<tbody>
									<tr>
										<th>&nbsp;</th>
										<th>Cabinet</th>
										<th>Domicile</th>
									</tr>
									<tr>
										<td>à l’unité</td>
										<td>70 €</td>
										<td>75 €</td>
									</tr>
									<tr>
										<td>pack 3 soins</td>
										<td>200 €</td>
										<td>235 €</td>
									</tr>
									<tr>
										<td>pack 6 soins</td>
										<td>390 €</td>
										<td>420 €</td>
									</tr>
									<tr>
										<td>pack 12 soins</td>
										<td>770 €</td>
										<td>830 €</td>
									</tr>
								</tbody>
							</table>
						</section>
						<section className='paragraphe-content'>
							<h4 id='reiki-cible-tarifs'>Soin énergétique ciblé - 0h30</h4>
							<table>
								<tbody>
									<tr>
										<th>&nbsp;</th>
										<th>Cabinet</th>
										<th>Domicile</th>
									</tr>
									<tr>
										<td>à l’unité</td>
										<td>40 €</td>
										<td>45 €</td>
									</tr>
									<tr>
										<td>pack 3 soins</td>
										<td>115 €</td>
										<td>130 €</td>
									</tr>
									<tr>
										<td>pack 6 soins</td>
										<td>225 €</td>
										<td>255 €</td>
									</tr>
									<tr>
										<td>pack 12 soins</td>
										<td>440 €</td>
										<td>500 €</td>
									</tr>
								</tbody>
							</table>
						</section>
					</section>
					<h4 id='#reiki-distance-tarifs'>
						Soin Reiki Usui à distance{' '}
						<a href='#asterix'>
							<span className='asterix'>*</span>
						</a>
						: 60€
					</h4>
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
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
						</section>
					</section>
					<ParagraphSeparator />
					<h2>Les offres découvertes et partages</h2>
					<h3 id='decouverte'>Offre découverte</h3>
					<section className='paragraphe-8'>
						<section className='paragraphe-content'>
							<p>
								Pour votre premier soin énergétique, vous bénéficierez de
								l'offre découverte. A ce titre une réduction de 10€ sera
								appliquée lors de votre première séance pour tout soin d'un
								montant supérieur ou égal à 50€.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<h3 id='parrainage'>Parrainage</h3>
					<section className='paragraphe-6'>
						<section className='paragraphe-content'>
							<p>
								Lors de votre soin énergétique, vous recevrez une carte de
								parrainage à votre nom. Si quelqu'un, lors d'une séance, me
								remet votre carte, il profitera d'une réduction immédiate pour
								le soin énergétique en cours et vous bénéficierez d'une remise
								sur votre prochaine séance.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<h3 id='carte-cadeau'>Carte cadeau</h3>
					<section className='paragraphe-7'>
						<section className='paragraphe-content'>
							<p>
								D'une validté de un an, la carte cadeau vous permet d'offir un
								moment de douceur, hors du temps, à de vos proches.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={ImgCarteCadeau}
									className='img-carte-cadeau'
									alt='Carte cadeau'
									title='carte cadeau'
									loading='lazy'
								/>
							</div>
						</aside>
					</section>
				</article>
			</div>
		</>
	);
};

export default Offres;
