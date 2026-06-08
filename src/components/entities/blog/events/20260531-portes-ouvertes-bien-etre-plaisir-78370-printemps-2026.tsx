import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';

import thumbnail from '../../../../assets/Actualites/2026-portes-ouvertes-printemps-coffret-alumine/20260531-annonce-porte-ouverte-massages.jpg';
import conf from '../../../../assets/Actualites/2026-portes-ouvertes-printemps-coffret-alumine/20260531-annonce-porte-ouverte-conferences.jpg';
import bracelets from '../../../../assets/Actualites/2026-portes-ouvertes-printemps-coffret-alumine/20260531-annonce-porte-ouverte-attelier-bracelet.jpg';
import remise from '../../../../assets/Actualites/2026-portes-ouvertes-printemps-coffret-alumine/20260531-annonce-porte-ouverte-remise.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';

export const BlogEvent20260531PortesOuvertesPrintemps2026: iBlog = {
	h1: 'Massages & Bien‑Être à Plaisir – Portes Ouvertes Printemps 2026',
	slug: 'portes-ouvertes-bien-etre-plaisir-78370-printemps-2026',
	date: new Date('2026-05-21'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Portes Ouvertes',
		'Duo Massage - Tambour Unité',
		'Plaisir',
	],
	images: [
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Affiche des massages bien‑être à Plaisir 78370 pour les Portes Ouvertes du Coffret d’Alumine, présentant les offres de massage du dos assis EAS et du duo Tambour‑Massage avec Marie Cophignon.',
		},
		{
			/*640-426*/
			path: bracelets,
			className: 'img',
			alt: 'Affiche présentant l’atelier de création de bracelet en pierres naturelles animé par Floriane Fagot du Coffret d’Alumine lors des Portes Ouvertes à Plaisir 78370.',
		},
		{
			/*640-426*/
			path: conf,
			className: 'img',
			alt: 'Affiche présentant les conférences de Cyril lors des Portes Ouvertes bien‑être à Plaisir 78370, incluant une conférence sur la monnaie libre et une introduction à la géobiologie.',
		},
		{
			/*640-426*/
			path: remise,
			className: 'img',
			alt: 'Affiche des Portes Ouvertes bien‑être à Plaisir 78370 au Coffret d’Alumine, présentant massages, atelier bracelets, conférences et offres de destockage.',
		},
	],
	content: (
		<>
			<div>
				<p>
					Les espaces Vibration et Libellule, situés au sein du Coffret
					d’Alumine, organisent deux journées Portes Ouvertes les dimanche 31
					mai et dimanche 14 juin, de 10h30 à 17h30.
				</p>
				<p>📍 5 rue Edmond Rostand, 78370 Plaisir</p>
				<p>
					Ces journées sont pensées comme un moment de découverte, de rencontre
					et de bien‑être, réunissant praticiens, créateurs et passionnés.
				</p>
				<ParagraphSeparator />
				<h2>Massages & Soins proposés</h2>
				<h3>Massage du dos assis – Méthode EAS®</h3>
				<ul>
					<li>Séance de 15 minutes</li>
					<li>Tarif : 15 € </li>
				</ul>

				<p>
					Un massage court, précis, idéal pour relâcher les tensions du haut du
					corps et retrouver une respiration plus fluide.
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
				<h3>Duo vibratoire : Massage du dos assis + Tambour Unité</h3>
				<ul>
					<li>Séance de 5 minutes</li>
					<li>Tarif : 5 € </li>
				</ul>
				<p>
					Une expérience brève mais puissante, mêlant toucher, vibration et
					ancrage énergétique, idéale pour découvrir ce nouveau soin singature.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'/actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'}
							title={
								'En savoir plus sur le duo vibratoire : Massage du dos assis + Tambour Unité'
							}
							ctaText={'Découvrir le soin'}
						/>
					</div>
				</div>
				<ParagraphSeparator />
				<h2>Atelier Création de Bracelet en Pierres Naturelles</h2>
				<p>Animé par Floriane – Coffret d’Alumine</p>
				<ul>
					<li>🕚 11h00 – 12h00 </li>
					<li>Tarif : 20 € </li>
				</ul>
				<p>
					Un atelier pour créer son bracelet personnalisé en pierres naturelles,
					choisir ses minéraux et comprendre leurs propriétés.
				</p>
				<ParagraphSeparator />
				<h2>Conférences de l’après‑midi</h2>
				<h3>Changer la monnaie pour changer notre rapport au monde</h3>
				<p>Animé par Cyril – Explorateur des mondes subtils</p>
				<ul>
					<li>🕚 14h30 </li>
				</ul>
				<p>
					Une exploration accessible et vivante des monnaies alternatives, de la
					G1 et de la manière dont nos systèmes d’échange influencent nos
					relations, nos choix et notre vision du monde.
				</p>
				<h3>Changer la monnaie pour changer notre rapport au monde</h3>
				<p>Animé par Cyril – Explorateur des mondes subtils</p>
				<ul>
					<li>🕚 15h30 </li>
				</ul>
				<p>
					Exploration à la découverte des phénomènes énergétiques subtils qui
					influencent un lieu, notre équilibre, notre ressenti, notre vie au
					quotidien.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'https://cyril.cophignon.net/'}
							title={
								'Découvrir le site de Cyril et des activités qu’il propose autour des mondes subtils.'
							}
							ctaText={'Découvrir le site de Cyril'}
						/>
					</div>
				</div>
				<ParagraphSeparator />
				<h2>Destockage exceptionnel du Coffret d’Alumine</h2>
				<p>Pendant les Portes Ouvertes :</p>
				<ul>
					<li>-10% sur les achats (hors sonothérapie)</li>
					<li>-30% sur les minéraux bruts et polis</li>
					<li>-40% sur les bijoux en argent 925 </li>
				</ul>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={'https://coffret-alumine.art/fr/'}
							title={
								'Accéder à la boutique du Coffret d’Alumine pour tous ces trésors bien‑être, sonothérapie et minéraux.'
							}
							ctaText={'Découvrir Coffret d’Alumine'}
						/>
					</div>
				</div>
				<blockquote>
					Une belle occasion de découvrir la boutique et de se faire plaisir.
				</blockquote>

				<p>
					Un moment idéal pour découvrir les pratiques bien‑être locales. Au
					plaisir de vous y retrouver !
				</p>
			</div>
		</>
	),
	type: 'Evénement',
};
