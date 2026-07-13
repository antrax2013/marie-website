import { iFaqItem } from '../../fragments/FAQ/Faq-Item';

export const OfrresFaqItems: Array<iFaqItem> = [
	{
		question: 'Proposez-vous des soins à domicile ou en entreprise ?',
		response: (
			<>
				<p>
					Oui, je me déplace à{' '}
					<a
						href='/soins-a-domicile-saint-quentin-en-yvelines'
						title='En savoir plus sur mes soins à domicile sur Saint-Quentin-en-Yvelines'
						className='underline'
					>
						domicile
					</a>{' '}
					ou en entreprise sur Saint‑Quentin‑en‑Yvelines. Il m’est également
					possible d’intervenir ponctuellement en dehors de ce secteur.
					N’hésitez pas à m’appeler afin que nous voyions ensemble ce qui peut
					être envisagé.
				</p>
				<p>
					Pour garantir un soin de qualité, j’ai besoin d’un espace calme et
					dégagé d’environ 2 m x 1,5 m, suffisant pour installer ma table de
					massage et circuler confortablement autour.
				</p>
				<p>
					Si l’intervention nécessite un déplacement hors zone ou des conditions
					particulières, un devis personnalisé peut être établi sur simple
					demande.
				</p>
				<p className='note'>
					PS : Guyancourt, Élancourt, Montigny‑le‑Bretonneux,
					Voisins‑le‑Bretonneux, Trappes, Maurepas, La Verrière,
					Magny‑les‑Hameaux, Coignières, Plaisir
				</p>
			</>
		),
	},
	{
		question: 'Comment prendre rendez‑vous ?',
		response: (
			<>
				<p>Vous pouvez réserver votre séance de deux façons :</p>
				<ul>
					<li>Par téléphone, en appel ou par SMS.</li>
					<li>
						Via le formulaire de contact, pour une demande écrite ou détaillée.
					</li>
				</ul>
				<p>
					Il se peut que je sois en soin au moment de votre appel. Dans ce cas,
					laissez‑moi simplement un message : je vous rappellerai dès que
					possible.
				</p>
				<p>
					Le premier échange est l’occasion de discuter de vos besoins, de
					comprendre vos attentes et de vous orienter vers le soin le plus
					adapté. C’est aussi le moment idéal pour répondre à vos questions et
					lever d’éventuels doutes, afin que vous puissiez profiter de votre
					séance l’esprit léger
				</p>
			</>
		),
	},
	{
		question: 'Faut‑il préparer quelque chose avant une séance à domicile ?',
		response: (
			<>
				<p>
					Il n’y a pas de préparation particulière à prévoir. Il suffit
					simplement de disposer d’un espace calme et dégagé d’environ 2 m x 1,5
					m pour que je puisse installer la table de massage, ou chaise
					ergonomique, et circuler confortablement autour.
				</p>
				<p>
					Vous restez habillés, allongés confortablement sur la table de soin.
					J’effectue alors une série d’appositions douces des mains sur
					différentes zones du corps. Vous n’avez rien à faire : laissez-vous
					porter, relâchez les tensions, accueillez ce temps de calme. L’énergie
					du Reiki se diffuse naturellement là où votre organisme en a besoin.
				</p>
				<p>
					Assurez‑vous également que l’environnement soit propice à la détente :
					une pièce tempérée, un éclairage doux, et la possibilité de limiter
					les interruptions. Je m’occupe du reste pour que vous puissiez
					profiter pleinement de votre séance.
				</p>
			</>
		),
	},
];
