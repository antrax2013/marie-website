import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';
import CtaRendezVous from '../../../fragments/Ctas/RendezVous';

import thumbnail from '../../../../assets/Actualites/20260425-salon-bien-etre-4-edition-manet-montigny/salon-bien-etre-le-manet-2026.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';

export const BlogEvent20260412RetourSalonSensEveil4: iBlog = {
	h1: 'Retour sur le Salon du Bien‑Être Les Sens en Éveil à la Ferme du Manet',
	slug: '20260425-retour-salon-bien-etre-manet-montigny-78',
	metas: {
		title: 'Retour sur le Salon du Bien‑Être à la Ferme du Manet – SQY',
		description:
			'Découvrez mon retour sur le salon Les Sens en Éveil à la Ferme du Manet : massages assis EAS®, duo massage‑tambour et rencontres à Saint‑Quentin‑en‑Yvelines.',
	},
	date: new Date('2026-04-25'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Salon',
		'Montigny-le-bretonneux',
		'Duo Massage - Tambour Unité',
	],
	images: [
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Praticien bien‑être sur son stand au salon Les Sens en Éveil à la Ferme du Manet à Montigny‑le‑Bretonneux – massages assis EAS® et soins à Saint‑Quentin‑en‑Yvelines',
		},
	],
	content: (
		<>
			<div>
				<h2>
					Une belle rencontre autour du mieux‑être à Saint‑Quentin‑en‑Yvelines
				</h2>
				<p>
					Le week‑end dernier, j’ai eu le plaisir de participer au salon du
					bien‑être "Les Sens en Éveil", organisé à la Ferme du Manet à
					Montigny‑le‑Bretonneux, au cœur de Saint‑Quentin‑en‑Yvelines. Cet
					événement, organisé par l’équipe de La Fabrique des Événements, a
					rassemblé de nombreux visiteurs curieux de découvrir différentes
					pratiques de relaxation, de massage et d’accompagnement énergétique.
					Une belle occasion de faire connaître mon activité auprès des
					habitants de Guyancourt, Maurepas, Élancourt et des communes voisines.
				</p>
				<h2>6 massages assis EAS® : un moment de détente immédiat</h2>
				<p>
					Durant le salon, j’ai eu la joie de réaliser 6 massages assis EAS®,
					une méthode douce et efficace pour relâcher les tensions du dos, des
					épaules et de la nuque. Ce format court est idéal lors d’événements,
					en entreprise ou pour toute personne souhaitant un moment de détente
					rapide mais profond.
				</p>
				<p>
					Les retours des visiteurs ont été très positifs : sensation de
					légèreté, diminution des tensions, respiration plus fluide,
					relâchement immédiat du haut du corps.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'/massage-assis-methode-eas'}
							title={'En savoir plus sur le massage du dos assis méthode EAS®'}
							ctaText={'Découvrir le soin'}
						/>
					</div>
				</div>
				<blockquote>
					Ces échanges chaleureux donnent tout leur sens à ma pratique.
				</blockquote>
			</div>
			<ParagraphSeparator />
			<div>
				<h2>3 expériences Duo Massage – Tambour Unité avec Floriane</h2>
				<p>
					J’ai également eu le plaisir de proposer, avec Floriane, 3 séances du{' '}
					<a href='/actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'>
						duo "massage du dos assis ‑ tambour unité"
					</a>
					. Ce soin unique combine le toucher du massage du dos assis méthode
					EAS® et la vibration du tambour unité, créant une expérience immersive
					qui favorise l’ancrage, la détente profonde et la reconnexion à soi.
				</p>
				<p>
					Les personnes qui ont testé ce duo ont partagé des ressentis très
					forts : apaisement global, sensation d’harmonie, vibrations
					enveloppantes, moment hors du temps.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'/actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'}
							title={
								'En savoir plus sur le duo massage du dos assis ‑ tambour unité'
							}
							ctaText={'Découvrir le soin'}
						/>
					</div>
				</div>
				<blockquote>
					Un grand merci à celles et ceux qui ont osé vivre cette expérience
					singulière.
				</blockquote>
				<ParagraphSeparator />
				<h2>Merci pour votre présence, vos échanges et votre confiance</h2>
				<p>
					Je tiens à remercier chaleureusement toutes les personnes qui sont
					venues à ma rencontre : que vous ayez testé un massage, échangé
					quelques mots, posé des questions ou simplement partagé un sourire,
					votre présence a rendu ce salon vivant et lumineux.
				</p>
				<p>
					Participer à ce type d’événement est toujours une belle occasion de :
					faire découvrir mes pratiques, rencontrer les habitants de
					Saint‑Quentin‑en‑Yvelines, créer du lien autour du bien‑être, partager
					des moments authentiques.
				</p>

				<p>
					Ce salon du bien‑être à la Ferme du Manet a été un moment riche,
					humain et vibrant. Merci encore à toutes celles et ceux qui ont
					contribué à cette belle énergie. Je suis impatiente de vous retrouver
					en séance individuelle, en événement ou lors d’un prochain salon dans
					la région de Saint‑Quentin‑en‑Yvelines.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<CtaRendezVous />
					</div>
				</div>
			</div>
		</>
	),
	type: 'Evénement',
};
