import { iBlog } from '../../../fragments/Blog/IBlog';

import CtaRendezVous from '../../../fragments/Ctas/RendezVous';
import CtaOffres from '../../../fragments/Ctas/Offres';
import { Adresse } from '../../../fragments/Adresse';

import thumbnail from '../../../../assets/Actualites/grande-salle-cabinet-blowball/grande-salle-caibnet-blowball-4.jpg';
import img1 from '../../../../assets/Actualites/grande-salle-cabinet-blowball/grande-salle-caibnet-blowball-2.jpg';
import img2 from '../../../../assets/Actualites/grande-salle-cabinet-blowball/grande-salle-caibnet-blowball-3.jpg';
import img3 from '../../../../assets/Actualites/grande-salle-cabinet-blowball/grande-salle-caibnet-blowball.jpg';

export const BlogArticleCabinetGrandeSalle: iBlog = {
	h1: 'Nouvelle espace au cabinet Blowball à Guyancourt',
	slug: 'reiki-massage-guyancourt-cabinet-blowball',
	metas: {
		title: 'Massage Guyancourt – Reiki Usui & bien‑être | Cabinet Blowball',
		description:
			'Découvrez mon nouvel espace de massage à Guyancourt chaque jeudi : Reiki Usui, Massage des 5 Continents et massages du dos assis EAS®. À Élancourt ou domicile le reste de la semaine sur SQY.',
		resume: '',
	},
	date: new Date('2026-04-06'),
	tags: ['St Quentin-en-Yvelines', 'Cabinet Blowball', 'Guyancourt'],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Grande salle du cabinet Blowball à Guyancourt, une atmosphère zen et lumineuse.',
		},
		{
			path: img1,
			className: 'img',
			alt: 'Coin discussion du cabinet Blowball à Guyancourt, fauteuils verts confortables, miroir mural et lumière naturelle pour un accueil chaleureux.',
		},
		{
			path: img2,
			className: 'img',
			alt: 'Espace détente du cabinet Blowball à Guyancourt, table de massage beige, motif Fleur de Vie au mur et ambiance apaisante.',
		},
		{
			path: img3,
			className: 'img',
			alt: 'Salle de massage lumineuse du cabinet Blowball à Guyancourt, avec table en bois, coussins colorés et décoration zen pour soins bien-être.',
		},
	],
	content: (
		<>
			<p>
				Je suis ravie de vous annoncer un beau changement au sein du cabinet
				Blowball, depuis début février, au cœur de Guyancourt, dans
				l’agglomération de Saint-Quentin-en-Yvelines. Je m’installe désormais
				dans la grande salle du cabinet, un espace plus vaste, plus lumineux et
				encore plus propice à la détente, offrant un cadre idéal pour profiter
				de séances de bien‑être dans des conditions optimales.
			</p>
			<h2>Un nouvel espace pensé pour votre bien-être</h2>
			<p>
				Cet espace a été pensé pour accueillir mes différentes pratiques : le
				Reiki Usui, le Massage des 5 Continents, ainsi que mes massages du dos
				assis, selon la méthode EAS®. Ces approches complémentaires permettent
				de relâcher les tensions, d’apaiser le mental et de rééquilibrer
				l’énergie, dans un environnement calme et harmonieux au cœur de
				Saint‑Quentin‑en‑Yvelines.
			</p>
			<h2>Pourquoi venir au cabinet Blowball ?</h2>
			<ul>
				<li>
					Situé à Guyancourt, facilement accessible depuis
					Montigny-le-Bretonneux, Voisins-le-Bretonneux, Maurepas et toute
					l’agglomération de Saint-Quentin-en-Yvelines.
				</li>
				<li>
					Un espace pluridisciplinaire dédié au bien-être, à la relaxation et à
					la gestion du stress.
				</li>
				<li>Une approche douce, hollistique et adaptée à chacun.</li>
			</ul>
			<Adresse
				descprition='Cabinet Blowball'
				floor='au rez-de-chaussée'
				streetAddress='1, rue Le Corbusier'
				postalCode='78280'
				addressLocality='Guyancourt'
				map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.4474125145919!2d2.0711613275401377!3d48.76681317927859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e680b8df551913%3A0x4c47046451eeaf2f!2s1%20Rue%20le%20Corbusier%2C%2078280%20Guyancourt!5e0!3m2!1sfr!2sfr!4v1647003179533!5m2!1sfr!2sfr'
				latitude='48.766979'
				longitude='2.071681'
			/>
			<h2>
				Massages à domicile dans toute l’agglomération de
				Saint‑Quentin‑en‑Yvelines
			</h2>
			<p>
				En dehors du jeudi, je propose toujours mes massages et soins
				énergétiques à domicile ou en entreprise sur l’ensemble des communes de
				Saint‑Quentin‑en‑Yvelines : Guyancourt, Montigny‑le‑Bretonneux,
				Voisins‑le‑Bretonneux, Élancourt, Trappes, Maurepas, Coignières et les
				alentours. Ce service permet de bénéficier d’un soin personnalisé sans
				avoir à se déplacer, dans le confort de votre environnement habituel.
				Une solution idéale pour intégrer un moment de détente dans un planning
				chargé.
			</p>
			<h2>Le lundi : séances au cabinet des Nouveaux Horizons à Élancourt</h2>
			<p>
				Chaque lundi, je vous accueille également au cabinet des Nouveaux
				Horizons à Élancourt, un lieu dédié au bien‑être où je propose
				l’ensemble de mes soins énergétiques et massages bien‑être. Cette
				présence hebdomadaire permet de répondre aux besoins des habitants
				d’Élancourt, Maurepas et des communes voisines en matière de relaxation,
				de gestion du stress et d’harmonisation énergétique.
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaRendezVous />
					<CtaOffres />
				</div>
			</div>
		</>
	),
	type: 'Article',
};
