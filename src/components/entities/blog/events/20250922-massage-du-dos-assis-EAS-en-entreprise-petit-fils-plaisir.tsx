import { iBlog } from '../../../fragments/Blog/IBlog';
import CtaContactezMoi from '../../../fragments/Ctas/ContactezMoi';
import CtaDevis from '../../../fragments/Ctas/Devis';
import thumbnail from '../../../../assets/Actualites/20250922-massage-dos-assis-eas-entreprise-petit-fils-plaisir/massage-du-dos-assis-entreprise-petit-fils.jpg';

export const BlogEvent20250922EASPetitfils: iBlog = {
	h1: 'Massage du dos assis en entreprise : une pause bien‑être pour booster l’énergie des équipes',
	slug: '20250922-massage-dos-assis-eas-entreprise-petit-fils-plaisir',
	metas: {
		title:
			'Massage du dos assis méthode EAS® en entreprise, agence Petit-fils Plaisir',
		description:
			'Séance de massage assis méthode EAS® à Plaisir, SQY, Yvelines : bien‑être en entreprise, détente musculaire et regain d’énergie pour vos équipes.',
		resume: '',
	},
	date: new Date('2025-11-25'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Plaisir',
		'QVT',
		'Massage en entreprise',
		'Petit-fils',
	],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
		},
	],
	content: (
		<>
			<h2>
				Une pause déjeuner dédiée au bien‑être <i>(22 septembre 2025)</i>
			</h2>
			<p>
				Le 22 septembre 2025, j’ai eu le plaisir d’intervenir à l’agence
				Petit-Fils de Plaisir pour une session de massage du dos assis méthode
				EAS®.
			</p>
			<p>
				Durant 1h30, sur leur pause déjeuner, j’ai massé l’ensemble de l’équipe,
				leur offrant un moment de détente profonde, de relâchement musculaire et
				de recentrage.
			</p>
			<h2>Le massage du dos assis en entreprise</h2>
			<p>
				Cette parenthèse bien‑être a permis à chacun·e de se ressourcer, de
				relâcher les tensions accumulées et de reprendre leur après‑midi avec
				plus de légèreté, de concentration et d’énergie.
			</p>
			<p>
				Je tiens à remercier chaleureusement toute l’équipe de l’agence
				Petit-fils de Plaisir pour leur accueil, leur bonne humeur et leur
				confiance.
			</p>
			<p>
				Intéressés pour mettre en place ce type d'événement dans votre
				entreprise ou que vous souhaitez en savoir plus, contactez moi.
			</p>

			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaContactezMoi />
					<CtaDevis />
				</div>
			</div>
		</>
	),
	type: 'Evénement',
};
