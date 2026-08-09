import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';

import thumbnail from '../../../../assets/Actualites/2026-08-30-Jouars-Ponchartrain-GMarche-Massage-assis/affiche-gmarche.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
import McLinkMEAS from '../../../fragments/McLinks/McLink-Massage-EAS';
import JsonLd from '../../../fragments/JsonLd/JsonLd';

import * as EventLd from '../../../entities/json-ld/blog/20260830-gmarche-jouars-pontchartrain-massages-assis-june-bien-etre.json';

export const BlogEvent20260830GmarcheEtBienEtre: iBlog = {
	h1: 'Massage assis à Jouars-Pontchartrain : Découvrez la méthode EAS® au Ğmarché d’août 2026',
	slug: '20260830-gmarche-jouars-pontchartrain-massages-assis-june-bien-etre',
	date: new Date('2026-08-09'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Ğmarché',
		'Ğ1',
		'June',
		'Jouars-Pontchartrain',
	],
	images: [
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Affiche du Ğmarché de Pontchartrain du 30 août 2026 où Marie Cophignon, pour la première fois, participera et proposera des massegs du dos assis méthode EAS.',
		},
	],
	content: (
		<>
			<JsonLd data={EventLd} />
			<div>
				<p>
					Besoin de relâcher les tensions du dos et des épaules ? Le{' '}
					<b>dimanche 30 août 2026</b>, je serai présente au{' '}
					<b>Ğmarché de Jouars-Pontchartrain</b> pour vous faire découvrir les
					bienfaits du{' '}
					<McLinkMEAS
						text='massage du dos assis selon la méthode EAS®'
						noWrap={true}
					/>
					.
				</p>
				<p>
					Lors de cet événement local au cœur des Yvelines, je proposerai des
					sessions individuelles de 15 minutes, entièrement réglables en{' '}
					<b>Ğ1 (June)</b>, la monnaie libre locale. Une occasion idéale de
					combiner détente corporelle, convivialité et économie alternative.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'https://is.gd/june78'}
							title={
								'S’inscrire pour participer au Ğmarché en tant que visiteur ou exposant'
							}
							ctaText={'S’inscrire pour participer au Ğmarché'}
							ctaLinkClassName={'cta-primary'}
						/>
						<Cta
							link={
								'https://forum.monnaie-libre.fr/t/78-jouars-pontchartrain-gmarche-dimanche-30-aout-2026/34008'
							}
							title={'En savoir plus le Ğmarché de Jouars-Pontchartrain'}
							ctaText={'Infos pratiques Ğmarché'}
						/>
					</div>
				</div>
				<ParagraphSeparator />
				<h2>Les bienfaits du massage assis méthode EAS® en 15 minutes</h2>
				<p>
					Le massage assis est un soin particulièrement adapté aux événements
					publics et au cadre professionnel. Pratiqué sur une chaise ergonomique
					et par-dessus les vêtements, il permet une relaxation rapide et
					efficace du haut du corps.
				</p>
				<ul>
					<li>
						<b>Libération immédiate des tensions :</b> Action ciblée sur les
						cervicales, les épaules, les omoplates et les lombaires.
					</li>
					<li>
						<b>Sur-mesure et adapté :</b> La méthode EAS® ajuste la pression et
						les gestes en fonction de vos besoins spécifiques.
					</li>
					<li>
						<b>Soin court et bienfaisant :</b> 15 minutes suffisent pour
						retrouver de la mobilité, apaiser le mental et recharger vos
						batteries.
					</li>
				</ul>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'/massage-assis-methode-eas'}
							title={'En savoir plus sur le massage du dos assis méthode EAS®'}
							ctaText={'Découvrir le massage'}
						/>
					</div>
				</div>
				<ParagraphSeparator />
				<h2>Pourquoi associer soin bien-être et monnaie libre Ğ1 ?</h2>
				<p>
					La pratique du bien-être et la philosophie de la Ğ1 (June) partagent
					une vision commune :{' '}
					<b>remettre l’humain et la proximité au centre des échanges</b>.
				</p>

				<h3>Une circulation fluide des énergies</h3>
				<p>
					Tout comme la circulation de l'énergie dans le corps lors d'un
					massage, la Ğ1 favorise une circulation fluide de la valeur au sein de
					la communauté locale, sans pression ni compétition.
				</p>

				<h3>Rendre le bien-être accessible</h3>
				<p>
					En acceptant les June pour mes massages du dos, je participe à une
					économie solidaire qui permet à chacun d'accéder à des soins corporels
					de qualité dans les Yvelines.
				</p>

				<ParagraphSeparator />
				<h2>📅 Programme de la journée du 30 août à Jouars-Pontchartrain</h2>
				<p>
					Rendez-vous de 10h00 à 18h00 pour profiter des stands, des ateliers et
					des animations :
				</p>
				<ul>
					<li>
						<b>10h00 :</b> Ouverture du Ğmarché — Découverte des exposants et
						échanges en Ğ1.
					</li>
					<li>
						<b>12h00 :</b> Repas partagé et convivial.
					</li>
					<li>
						<b>14h00 à 18h00 :</b>{' '}
						<b>Séances de massage du dos assis méthode EAS®</b> de 15 min.
					</li>
					<li>
						<b>14h30 :</b> Conférence :{' '}
						<i>« Changer la monnaie pour changer notre r-apport au monde »</i>.
					</li>
					<li>
						<b>18h00 :</b> Clôture de l'événement.
					</li>
				</ul>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'https://is.gd/june78'}
							title={
								'S’inscrire pour participer au Ğmarché en tant que visiteur ou exposant'
							}
							ctaText={'S’inscrire pour participer au Ğmarché'}
							ctaLinkClassName={'cta-primary'}
						/>
						<Cta
							link={
								'https://forum.monnaie-libre.fr/t/78-jouars-pontchartrain-gmarche-dimanche-30-aout-2026/34008'
							}
							title={'En savoir plus le Ğmarché de Jouars-Pontchartrain'}
							ctaText={'Infos pratiques Ğmarché'}
						/>
					</div>
				</div>

				<ParagraphSeparator />
				<h2>
					Praticienne massage à Jouars-Pontchartrain : Venez me rencontrer !
				</h2>
				<p>
					Que vous soyez déjà utilisateur de la monnaie libre ou simplement
					curieux de découvrir le massage assis méthode EAS®, je serai ravie de
					vous accueillir sur mon stand. Un moment privilégié pour échanger sur
					le bien-être, relâcher votre stress et vivre une expérience humaine
					enrichissante.
				</p>
			</div>
		</>
	),
	type: 'Evénement',
};
