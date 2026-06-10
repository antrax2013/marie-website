import { iBlog } from '../../../fragments/Blog/IBlog';
import thumbnail from '../../../../assets/Actualites/20260125-portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines/po-bien-etre-cabinet-blowball-affiche.jpg';
import image1 from '../../../../assets/Actualites/20260125-portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines/po-bien-etre-cabinet-blowball-presentation.jpg';
import image2 from '../../../../assets/Actualites/20260125-portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines/po-bien-etre-cabinet-blowball-equipe.jpg';
import image3 from '../../../../assets/Actualites/20260125-portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines/po-bien-etre-cabinet-blowball-marie.jpg';

export const BlogEvent20260125POCabinetBlowBall: iBlog = {
	h1: 'Portes ouvertes du cabinet Blowball à Guyancourt',
	slug: '20260125-portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines',
	date: new Date('2026-01-30'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Reiki Usui',
		'Portes ouvertes',
		'Guyancourt',
		'Cabinet Blowball',
	],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Flyer des portes ouvertes du cabinet Blowball à Guyancourt présentant massages assis méthode EAS® et Reiki Usui, événement bien‑être à Saint‑Quentin‑en‑Yvelines',
		},
		{
			path: image1,
			className: 'img',
			alt: 'Flyer du cabinet Blowball à Guyancourt mettant en avant les massages assis EAS® et le Reiki Usui proposés par Marie à Saint‑Quentin‑en‑Yvelines',
		},
		{
			path: image2,
			className: 'img',
			alt: 'Photo de l’équipe des thérapeutes et praticiens bien-être oeuvrant au cabinet Blowball de Guyancourt à Saint‑Quentin‑en‑Yvelines',
		},
		{
			path: image3,
			className: 'img',
			alt: 'Photo prise lors des portes ouvertes du cabinet Blowball de Guyancourt à Saint‑Quentin‑en‑Yvelines où Marie échange avec une visiteuse',
		},
		{
			path: image3,
			className: 'img',
			alt: 'Photo prise lors des portes ouvertes du cabinet Blowball de Guyancourt à Saint‑Quentin‑en‑Yvelines où Marie échange avec une visiteuse',
		},
		{
			path: image3,
			className: 'img',
			alt: 'Photo prise lors des portes ouvertes du cabinet Blowball de Guyancourt à Saint‑Quentin‑en‑Yvelines où Marie échange avec une visiteuse',
		},
	],
	content: (
		<>
			<h2>
				Une matinée dédiée au bien‑être <i>(25 janvier 2026)</i>
			</h2>
			<p>
				Le cabinet Blowball, situé à Guyancourt au cœur de
				Saint‑Quentin‑en‑Yvelines, a organisé le dimanche 25 janvier une matinée
				portes ouvertes entièrement consacrée au bien‑être, aux pratiques
				énergétiques, aux massages et à l’accompagnement thérapeutique.
			</p>
			<p>
				L’événement, a rassemblé plusieurs praticiens passionnés venus présenter
				leurs activités et proposer des ateliers découverte et animer des
				conférences.
			</p>
			<h2>Mon intervention : massages & Reiki Usui</h2>
			<p>
				En tant que massothérapeute énergétique et Maître Reiki Usui, j’ai
				présenté mon activité et proposé des séances découvertes de massage du
				dos assis (méthode EASⓇ).
			</p>
			<p>
				Ce format court de 15 minutes permet de relâcher rapidement les tensions
				du haut du corps, d’apaiser le mental et d’offrir une pause ressourçante
				aux visiteurs.
			</p>
			<p>Les participants ont apprécié :</p>
			<ul>
				<li>Une détente immédiate ressentie dès les premières minutes.</li>
				<li>Une posture assise simple et confortable, accessible à tous.</li>
				<li>
					Une technique rapide et efficace pour découvrir les bienfaits du
					massage.
				</li>
			</ul>
			<p>
				Envie de découvrir le massage du dos assis pour vous, vos proches, vos
				amis ou vos collaborateurs ?
			</p>
		</>
	),
	type: 'Evénement',
};
