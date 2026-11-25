import { iBlog } from '../../../fragments/Blog/IBlog';

import affiche from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/412ca9cd-5c5d-4ff0-b0e1-22ebdbe53f79.jpg';
import surprises from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/f6bba122-b197-4559-bca0-75902768e607.jpg';
import thumbnail from '../../../../assets/Actualites/20261122-porte-ouvert-blowball/b53aa23a-6b44-4eaf-b892-6fb649b17ad8.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
import McLinkMEAS from '../../../fragments/McLinks/McLink-Massage-EAS';
import CtaEAS from '../../../fragments/Ctas/EAS';
import CtaM5C from '../../../fragments/Ctas/M5C';

export const BlogEvent20261122PortesOuvertesBlowball: iBlog = {
	h1: 'Massage des 5 Continents à Guyancourt : retour sur ma première conférence',
	slug: 'portes-ouvertes-blowball-guyancourt-22-novembre-2026',
	date: new Date('2026-11-25'),
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
					Le dimanche 22 novembre 2026, le cabinet Blowball ouvrait ses portes à
					Guyancourt pour une matinée de rencontres et de découvertes autour du
					bien-être.
				</p>
				<p>
					Malgré la pluie, une quinzaine de personnes sont venues à notre
					rencontre. Les visiteurs ont pu assister aux conférences proposées par
					les praticiens et échanger avec nous. Chaque intervention a été bien
					accueillie.
				</p>{' '}
				<h2>
					Ma première conférence : le Massage des 5 Continents, un allié pour
					l’hiver
				</h2>
				<p>
					Cette matinée avait une signification particulière pour moi : j’y ai
					donné ma première conférence. J’étais un peu stressée avant de prendre
					la parole.
				</p>
				<p>
					Je souhaitais aborder les bienfaits du massage et parler de
					l’utilisation des huiles essentielles, particulièrement à l’approche
					de l’hiver. De 12 h à 12 h 20, j’ai ainsi pu présenter le Massage des
					5 Continents et partager les sujets que je souhaitais faire découvrir
					au public.
				</p>
				<CtaM5C />
				<p>
					Il y a eu peu de questions pendant ou après la présentation.
					Apparemment, j’ai été assez claire. Les échanges se sont ensuite
					poursuivis avec de nombreuses personnes. J’ai apprécié ces
					conversations, qui ont prolongé la présentation dans un cadre simple
					et convivial.
				</p>
				<h2>Des conférences pour découvrir plusieurs pratiques</h2>
				<p>
					La matinée réunissait plusieurs approches. Jérémy Bordes a parlé de
					médecine traditionnelle chinoise et de l’entrée dans l’hiver. Cyril
					Cophignon a présenté la fontaine Saint-Sauveur de Maurepas et la
					géobiologie. Après ma conférence, Carole Jacob a abordé la
					réflexologie palmaire et partagé des conseils pour l’hiver. Elle
					proposait également des créations artisanales en céramique.
				</p>
				<p>
					La diversité des sujets a offert aux visiteurs plusieurs occasions de
					découvrir les praticiens du cabinet et leurs activités.
				</p>
				<blockquote>
					« Avant de découvrir un soin, il y a parfois simplement une
					rencontre.»
				</blockquote>
				<ParagraphSeparator />
				<h2>Trois massages du dos assis réalisés pendant la matinée</h2>
				<p>
					En plus de ma conférence, j’ai réalisé trois{' '}
					<McLinkMEAS
						text='massages du dos assis, méthode EAS®'
						className='strong'
					/>
					. Ce massage se pratique habillé, sans huile et sur une chaise
					ergonomique. Il concerne le dos, les épaules et la nuque.
				</p>
				<p>
					Ces séances ont permis de faire découvrir une autre facette de mon
					activité. La conférence présentait le Massage des 5 Continents et les
					sujets qui lui sont associés, tandis que le massage assis permettait
					de découvrir concrètement un soin que je propose également à
					Guyancourt.
				</p>
				<CtaEAS />
				<ParagraphSeparator />
				<h2>Une expérience que je suis contente d’avoir vécue</h2>
				<p>
					La présence des visiteurs malgré la pluie m’a fait plaisir. J’ai eu le
					sentiment que les personnes venues avaient des attentes et l’envie de
					découvrir ce que nous proposions. Je garde un bon souvenir de cette
					première expérience, même si je ne sais pas encore si je referai une
					conférence.
				</p>
				<ParagraphSeparator />
				<p>
					Je remercie Carole et toute l’équipe du cabinet Blowball pour
					l’organisation de ces portes ouvertes, ainsi que les visiteurs d’être
					venus à notre rencontre et d’avoir partagé cette matinée avec nous.
				</p>
				<p>
					Pour en savoir plus sur le Massage des 5 Continents, découvrez la page
					qui lui est consacrée.
				</p>
				<CtaM5C />
			</div>
		</>
	),
	type: 'Evénement',
};
