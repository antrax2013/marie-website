import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';
import { Adresse } from '../../../fragments/Adresse';
import CtaRendezVous from '../../../fragments/Ctas/RendezVous';

import thumbnail from '../../../../assets/Actualites/20260412-salon-bien-etre-manet-montigny-le-bretonneux/affiche.jfif';
import stand from '../../../../assets/Actualites/20260412-salon-bien-etre-manet-montigny-le-bretonneux/stand-2025.jpg';
import drapreau from '../../../../assets/Actualites/20260412-salon-bien-etre-manet-montigny-le-bretonneux/drapeau-2025.jpg';

export const BlogEvent20260412SalonSensEveil4: iBlog = {
	h1: 'Salon du bien-être, les Sens En Eveil – 4ème édition',
	slug: '20260412-salon-bien-etre-manet-montigny-le-bretonneux',
	metas: {
		title:
			'Salon du bien-être, les Sens En Eveil – 4ème édition, Montigny-le-bretonneux 12 avril 2026',
		description:
			'Retrouvez-moi au salon Les Sens en Éveil à Montigny-le-Bretonneux et découvrez le massage du dos assis EAS®, 15 minutes pour relâcher les tensions.',
	},
	date: new Date('2026-03-21'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Salon',
		'Montigny-le-bretonneux',
		'La Fabrique des Événements',
	],
	images: [
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Affiche du Salon du bien-être Les Sens en Éveil, 4ᵉ édition à la Ferme du Manet à Montigny-le-Bretonneux, événement bien-être du 12 avril 2026',
		},
		{
			path: stand,
			className: 'img',
			alt: 'Mon stand lors de la 3ᵉ édition du Salon du bien-être Les Sens en Éveil à la Ferme du Manet à Montigny-le-Bretonneux en 2025',
		},
		{
			path: drapreau,
			className: 'img',
			alt: 'La signalétique de la 3ᵉ édition du Salon du bien-être Les Sens en Éveil à la Ferme du Manet à Montigny-le-Bretonneux en 2025',
		},
	],
	content: (
		<>
			<div>
				<p>
					Une journée entièrement dédiée au bien‑être vous attend à la 4ᵉ
					édition du salon <i>Les Sens en Éveil</i>, organisé par{' '}
					<i>La Fabrique des Événements</i> à la Ferme du Manet.
				</p>
				<ul>
					<ol>
						📅 <b>Dimanche 12 avril 2026</b>
					</ol>
					<ol>🎫 Entrée libre de 11h à 19h</ol>
					<ol>
						📍 <b>Ferme du Manet - Montigny-le-Bretonneux</b> –{' '}
						<i>(Saint‑Quentin‑en‑Yvelines)</i>
					</ol>
				</ul>
				<p>
					Je serai présente, pour la seconde fois, parmi les professionnels du
					bien‑être de Saint‑Quentin‑en‑Yvelines pour vous faire découvrir mon
					activité, échanger avec vous et répondre à toutes vos questions.
				</p>
				<p>
					À cette occasion, je proposerai le massage du dos assis, méthode EAS®,
					une approche douce, efficace et accessible à tous.
				</p>
			</div>
			<div>
				<h2>Massage du dos assis, méthode EAS®</h2>
				<h3>Version Découverte – 15 minutes / 15 € (tarif salon)</h3>
				<p>
					Une belle occasion de tester cette méthode énergétique issue de la
					médecine traditionnelle chinoise.
				</p>
				<h4>Au programme : un massage découverte de 15 minutes</h4>
				<p>Une pause courte, habillée, sans huile, idéale pour :</p>
				<ul>
					<li>relâcher les tensions du dos, de la nuque et des épaules</li>
					<li>apaiser le mental</li>
					<li>retrouver une sensation de légèreté et de détente profonde</li>
				</ul>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<CtaRendezVous />
						<Cta
							link={'/massage-assis-methode-eas'}
							title={'En savoir plus sur le massage du dos assis méthode EAS®'}
							ctaText={'Découvrir le soin'}
						/>
					</div>
				</div>

				<p>
					Un soin parfait pour découvrir la méthode EAS® et profiter d’un moment
					de bien‑être au cœur du salon.
				</p>
				<h2>Lieu de l’événement</h2>
				<Adresse
					floor='La ferme du Manet'
					streetAddress='61 Av. du Manet'
					postalCode='78180'
					addressLocality='Montigny-le-Bretonneux'
					map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.862296753743!2d2.0157783966615277!3d48.7641111333913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e681410ebbd535%3A0xa83eda8dbeb18cfa!2sLa%20Ferme%20du%20Manet!5e0!3m2!1sfr!2snl!4v1774169318083!5m2!1sfr!2snl'
					latitude='48.76440108562742'
					longitude='2.020992611004064'
				/>
			</div>
			<div>
				<p>
					J’ai hâte de vous accueillir, de vous faire découvrir cette pratique
					et de partager avec vous un moment de détente lors de cet événement
					dédié au bien‑être.
				</p>
				<Cta
					link={
						'https://lafabriquedesevenements.fr/les-sens-en-eveil-salon-bien-etre/'
					}
					title={
						'En savoir plus sur le salon `Les Sens en Éveil` - 4ᵉ édition du salon'
					}
					ctaText={'Découvrir le salon'}
				/>
			</div>
		</>
	),
	type: 'Evénement',
};
