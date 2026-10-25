import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';

import affiche from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/412ca9cd-5c5d-4ff0-b0e1-22ebdbe53f79.jpg';
import surprises from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/f6bba122-b197-4559-bca0-75902768e607.jpg';
import thumbnail from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/b53aa23a-6b44-4eaf-b892-6fb649b17ad8.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
import McLinkMEAS from '../../../fragments/McLinks/McLink-Massage-EAS';
import CtaEAS from '../../../fragments/Ctas/EAS';
import CtaM5C from '../../../fragments/Ctas/M5C';

export const BlogEvent20261122PortesOuvertesBlowball: iBlog = {
	h1: 'Portes ouvertes au cabinet Blowball : ma première conférence à Guyancourt',
	slug: 'portes-ouvertes-blowball-guyancourt-22-novembre-2026',
	date: new Date('2026-10-24'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Portes ouvertes',
		'Conférence',
		'Guyancourt',
		'Cabinet Blowball',
	],
	images: [
		{
			/*640-426*/
			path: affiche,
			className: 'img',
			alt: 'Portes ouvertes du cabinet Blowball à Guyancourt, dimanche 22 novembre 2026 de 9 h 30 à 13 h. Inscription gratuite sur Billetweb.',
		},
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Marie Cophignon présente sa conférence « Le Massage des 5 Continents, un allié pour l’hiver », de 12 h à 12 h 20, et le massage du dos assis EAS®, 15 minutes à 15 €.',
		},

		{
			/*640-426*/
			path: surprises,
			className: 'img',
			alt: 'Jeu de la chance des portes ouvertes : massage Tui Na de 30 minutes, découverte de la réflexologie de 30 minutes, massage assis de 20 minutes, lobe de Hartmann et fleur de vie en grès émaillé à gagner.',
		},
	],
	content: (
		<>
			<div>
				<p>
					Le dimanche 22 novembre 2026, je vous donne rendez-vous au cabinet
					Blowball à Guyancourt pour une matinée de rencontres et de découvertes
					autour du bien-être.
				</p>
				<p>
					Cette édition aura une saveur particulière pour moi : j’y donnerai ma
					première conférence, consacrée au Massage des 5 Continents. Une
					nouvelle façon de partager ma pratique avec vous, de vous la présenter
					et de répondre à vos questions.
				</p>{' '}
				<h2>
					Ma première conférence : le Massage des 5 Continents, un allié pour
					l’hiver
				</h2>
				<p>
					De 12 h à 12 h 20, je vous invite à découvrir le Massage des 5
					Continents à travers une courte conférence ouverte à toutes et à tous.
				</p>
				<CtaM5C />
				<p>
					À l’approche de l’hiver, ce sera l’occasion de parler de cette
					pratique et de la place que l’on peut accorder à un moment de détente
					dans son quotidien.
				</p>
				<p>
					Vous connaissez peut-être déjà ce massage, ou son nom vous intrigue
					simplement. Cette rencontre vous permettra de mieux comprendre ce que
					je propose et d’échanger avec moi avant d’envisager une séance.
				</p>
				<p>
					Prendre la parole devant vous sera une première. Je suis heureuse de
					préparer ce moment de partage et de vous faire découvrir autrement un
					soin qui tient une place importante dans mon activité.
				</p>
				<blockquote>
					« Avant de découvrir un soin, il y a parfois simplement une
					rencontre.»
				</blockquote>
				<ParagraphSeparator />
				<h2>Découvrir le massage du dos assis méthode EAS®</h2>
				<p>
					Pendant la matinée, vous pourrez également recevoir une séance de
					<McLinkMEAS
						text='Massage du dos assis méthode EAS®'
						className='strong'
					/>
					, au tarif de 15 € pour 15 minutes.
				</p>
				<p>
					Ce massage se reçoit habillé, sans huile, sur une chaise ergonomique.
					Il concerne le dos, les épaules et la nuque.
				</p>
				<p>
					Un format court pour découvrir mes gestes et vous accorder une pause.
					Nous prendrons le temps d’échanger au préalable pour vérifier que ce
					massage convient à votre situation.
				</p>
				<CtaEAS />
				<ParagraphSeparator />
				<h2>Une matinée pour rencontrer les praticiens du cabinet</h2>
				<p>
					Les portes ouvertes sont aussi l’occasion de découvrir le cabinet
					Blowball, un espace chaleureux où se rencontrent plusieurs pratiques.
				</p>
				<p>
					Au fil de la matinée, vous pourrez assister aux conférences proposées
					:
				</p>
				<ul>
					<li>
						10 h à 10 h 30,{' '}
						<b>
							<a
								href='https://www.medoucine.com/consultation/guyancourt/jeremy-bordes/687'
								title='Découvrir le site de Jérémy'
								target='_blank'
							>
								Jérémy Bordes
							</a>
						</b>
						, autour de la médecine traditionnelle chinoise et de l’entrée dans
						l’hiver.
					</li>
					<li>
						10 h 45 à 11 h 45,{' '}
						<b>
							<a
								href='https://cyril.cophignon.net'
								title='Découvrir le site de Cyril'
								target='_blank'
							>
								Cyril Cophignon
							</a>
						</b>
						, autour de la{' '}
						<a
							href='https://cyril.cophignon.net/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas'
							target='_blank'
						>
							fontaine Saint-Sauveur de Maurepas
						</a>{' '}
						et de la{' '}
						<a href='https://cyril.cophignon.net/geobiologie' target='_blank'>
							géobiologie
						</a>
						.
					</li>
					<li>
						12 h à 12 h 20, ma conférence sur le Massage des 5 Continents.
					</li>
					<li>
						12 h 30 à 13 h,{' '}
						<b>
							<a
								href='https://www.reflexologie-carolejacob.fr'
								title='Découvrir le site de Carole'
								target='_blank'
							>
								Carole Jacob
							</a>
						</b>
						, autour de la réflexologie palmaire et de conseils pour l’hiver.
					</li>
				</ul>
				<p>
					Carole proposera également des créations artisanales en céramique à
					découvrir à l’approche de Noël.
				</p>
				<ParagraphSeparator />
				<h2>Informations pratiques et inscription</h2>
				<h3>📅 Dimanche 22 novembre 2026, de 9 h 30 à 13 h</h3>
				<ul>
					<li>📍 Cabinet Blowball, 1 rue Le Corbusier, 78280 Guyancourt</li>
					<li>
						🎟️ Entrée gratuite, inscription obligatoire. Les séances de massage
						du dos assis sont payantes, au tarif de 15 € pour 15 minutes.
					</li>
				</ul>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={
								'https://www.billetweb.fr/porte-ouverte-cabinet-blowball-22-novembre-2026'
							}
							title={
								'M’inscrire aux portes ouvertes pour pouvoir accéder au cabinet.'
							}
							ctaText={'🎟️ M’inscrire aux portes ouvertes'}
							ctaLinkClassName='cta-secondary'
						/>
					</div>
				</div>
				<p>
					Que vous veniez pour une conférence, pour découvrir un massage ou
					simplement pour faire connaissance, je serai heureuse de vous
					accueillir et de partager ce moment avec vous.
				</p>
			</div>
		</>
	),
	type: 'Evénement',
};
