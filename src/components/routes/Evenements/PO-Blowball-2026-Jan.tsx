import { Adresse } from '../../tools/Adresse';
import MetaTag from '../../tools/MetaTag';
import ParagraphSeparator from '../../tools/Paragraph-Separator';
import '../../../scss/routes/Event.scss';

const POBlowball2026Jan = () => {
	const head = () => {
		return (
			<MetaTag
				title='Portes ouvertes du cabinet Blowball 25/01/26 – Bien-être & Énergies à Saint‑Quentin‑en‑Yvelines'
				description='Portes ouvertes du cabinet Blowball près de Saint‑Quentin‑en‑Yvelines : massages, Reiki, géobiologie, naturopathie, sophrologie, PNL, yoga. Entrée gratuite sur inscription.'
				resume='Découvrez massages, Reiki, géobiologie, naturopathie, sophrologie et plus encore lors de la journée portes ouvertes du cabinet Blowball.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='Event'>
				<div
					className='article'
					itemProp='event'
					itemScope
					itemType='https://schema.org/Event'
				>
					<h1>
						Portes ouvertes du cabinet Blowball - Bien-être & Énergies à
						Saint‑Quentin‑en‑Yvelines
					</h1>
					<p>
						Le cabinet Blowball, situé à Guynacourt, commune de
						<span itemProp='location'>Saint‑Quentin‑en‑Yvelines</span>, organise
						une <span itemProp='name'>matinée portes ouvertes</span> dédiée au
						bien‑être, aux pratiques énergétiques, aux massages et à
						l’accompagnement thérapeutique, le dimanche{' '}
						<span itemProp='startDate' content='2026-01-25'>
							25 janvier
						</span>{' '}
						de 09h30 à 13h00.
					</p>
					<p>
						<b>L’entrée est gratuite, mais l’inscription est obligatoire.</b>
						<br />
						<strong>Inscription : </strong>
						<a
							itemProp='offers'
							href='https://www.billetweb.fr/porte-ouverte-cabinet-blowball-25-janvier-2026'
							target='_blank'
						>
							https://www.billetweb.fr/porte-ouverte-cabinet-blowball-25-janvier-2026
						</a>
					</p>
					<ParagraphSeparator />
					<h2>Programme complet de la journée</h2>
					<h3>🏵️ Marie Cophignon – Massages & Maître Reiki Usui</h3>
					<p>
						Massothérapeute énergétique à Saint‑Quentin‑en‑Yvelines, je
						présenterai mon activité et proposerai des séances découvertes.
					</p>
					<ul itemScope itemType='https://schema.org/Offer'>
						<li>
							<span itemProp='name'>Massage du dos assis méthode EASⓇ</span> –
							15 min / <meta itemProp='priceCurrency' content='EUR'></meta>
							<span itemProp='price'>15 €</span>
						</li>
					</ul>
					<br />
					<h3>🌀 Cyril Cophignon (mon mari) – Géobiologie</h3>
					<h4>Conférence interactive (10h – 11h)</h4>
					<ul>
						<li>Qu’est‑ce que la géobiologie</li>
						<li>À quoi ça sert</li>
						<li>Quels outils utiliser</li>
						<li>Pour qui est‑ce destiné</li>
					</ul>
					<p>
						Cette présentation permettra de mieux comprendre comment
						l’environnement influence notre bien‑être, notre sommeil, notre
						énergie et même notre équilibre émotionnel.
					</p>
					<h4>Initiation à la géobiologie – 4 modules</h4>
					<p>
						Dates : 15 mars et 19 avril 2026 – Tarif : 200 € les 4 modules (60 €
						le module). Inscription sur place le jour de la porte ouverte.
					</p>
					<a
						href='https://cyril.cophignon.net/geobiologie#invisible'
						target='_blank'
					>
						Plus d'informations
					</a>
					<br />
					<h3>🏵️ Sophie de Baglion – Naturopathe</h3>
					<ul>
						<li>Pourquoi accompagner les femmes tout au long de leur vie</li>
						<li>
							Mini‑conférence (12h15 – 13h) :{' '}
							<em>Naturopathie et désir de grossesse après 35 ans</em>
						</li>
					</ul>
					<br />
					<h3>🏵️ Jaroslava Bitu – Psychopraticienne en PNL</h3>
					<p>
						<em>
							Qu’est‑ce que la PNL et comment peut‑elle vous accompagner sur
							votre chemin thérapeutique ?
						</em>
					</p>
					<br />
					<h3>🏵️ Carole Jacob – Réflexologue & Maître enseignante Reiki</h3>
					<ul>
						<li>Réflexologie plantaire, crânienne, auriculothérapie</li>
						<li>Cycle “Détente du corps et de l’esprit” – 18€/séance</li>
						<li>Initiation Reiki – 14 & 15 mars 2026</li>
					</ul>
					<br />
					<h3>🏵️ Sandrine Kesler – Coach en développement personnel</h3>
					<p>
						Mini‑conférence (11h30 – 12h) :{' '}
						<em>
							Le coaching en développement personnel : un éclairage révélateur
							de vos potentiels
						</em>
					</p>
					<br />
					<h3>🏵️ Marion Lanoes – Sophrologie</h3>
					<ul>
						<li>Gérer son stress – 30 janvier (18h30 – 19h30) – 25 €</li>
						<li>Booster son énergie – 6 février (18h30 – 19h30) – 25 €</li>
						<li>
							Mémoriser ses cours (étudiants) – 15 février (16h – 17h) – 25 €
						</li>
					</ul>
					<br />
					<h3>🏵️ Valérie Le Viol – Yoga & Méditation</h3>
					<p>
						Atelier “La confiance” – 11 avril 2026 (10h – 12h) – Tarif : 35 €
						Inscription sur place
					</p>
					<br />
					<ParagraphSeparator />
					<h2>Les conférences</h2>
					<p>
						Durant le matiné, trois conférences, gratuites, sont organisées :
					</p>
					<ul>
						<li>10h : Introduction à la Géobiologie avec Cyril Cophignon</li>
						<li>
							11h30 : coaching en développement personnel, éclairage différent
							et révélateur de vos potentiels avec Sandrine Kesler
						</li>
						<li>
							12h15 : Naturopathie et désir de grosses après 35 ans avec Sophie
							de Baglion
						</li>
					</ul>
					<ParagraphSeparator />
					<h2>Pourquoi venir ?</h2>
					<ul>
						<li>Découvrir de nouvelles pratiques</li>
						<li>Rencontrer des professionnels passionnés</li>
						<li>Prendre un moment pour vous</li>
						<li>Explorer des solutions naturelles et énergétiques</li>
						<li>Trouver l’accompagnement qui vous correspond</li>
					</ul>
					<ParagraphSeparator />
					<h2>Localisation</h2>
					<p>
						Le cabinet Blowball se situe à Guynacourt, commune de
						Saint‑Quentin‑en‑Yvelines, à proximité d’Élancourt, Maurepas,
						Montigny‑le‑Bretonneux, Trappes et Voisins‑le‑Bretonneux.
					</p>
					<div
						className='location'
						itemProp='location'
						itemScope
						itemType='https://schema.org/Place'
					>
						<h3>
							<span itemProp='name'>Cabinet Blowball</span>
						</h3>
						<Adresse
							floor='au rez-de-chaussée'
							streetAddress='1, rue Le Corbusier'
							postalCode='78280'
							addressLocality='Guyancourt'
							map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.4474125145919!2d2.0711613275401377!3d48.76681317927859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e680b8df551913%3A0x4c47046451eeaf2f!2s1%20Rue%20le%20Corbusier%2C%2078280%20Guyancourt!5e0!3m2!1sfr!2sfr!4v1647003179533!5m2!1sfr!2sfr'
							latitude='48.766979'
							longitude='2.071681'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default POBlowball2026Jan;
