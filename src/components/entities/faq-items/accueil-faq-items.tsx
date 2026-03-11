import { iFaqItem } from '../../fragments/FAQ/Faq-Item';

export const AccueilFaqItems: Array<iFaqItem> = [
	{
		question: 'Pourquoi prendre rendez-vous avec moi ?',
		response: (
			<>
				<p>
					Après 18 années d’expérience en tant qu’infirmière, un métier qui a
					toujours été une véritable vocation, j’ai choisi en 2022 de mettre mon
					savoir-faire au service de votre <em>bien-être</em>.
				</p>
				<p>
					Grâce à mes <em>massages énergétiques</em>, mes{' '}
					<em>soins Reiki Usui</em>, mon sens de l’empathie et ma capacité
					d’accompagnement, je propose des séances, sur-mesure, adaptées à vos
					besoins.
				</p>
				<p>
					Mon objectif est de vous offrir un espace où vous pouvez vous sentir
					entendu(e), compris(e) et accompagné(e) avec respect, bienveillance et
					authenticité.
				</p>
			</>
		),
	},
	{
		question: 'Quels sont mes horaires d’ouverture et où me trouver ? ',
		response: (
			<>
				<p>
					Je vous accueille{' '}
					<u className='underline'>uniquement sur rendez-vous</u> du lundi au
					vendredi de 09h00 à 19h00.
				</p>
				<p>
					Je consulte en cabinet, le lundi sur <em>Élancourt</em> et le jeudi
					sur <em>Guyancourt</em>. Je me déplace également à{' '}
					<strong>domicile</strong> et en <strong>entreprise</strong>, sur les
					communes de l’agglomération de{' '}
					<strong>Saint-Quentin-en-Yvelines</strong> et ses alentours (
					<em>Maurepas</em>, <em>Montigny-le-Bretonneux</em>, <em>Plaisir</em>,{' '}
					<em>Voisins-le-Bretonneux</em>, <em>Coignières</em>,{' '}
					<em>La Verrière</em>, <em>Trappes</em>, <em>Le Mesnil-Saint-Denis</em>
					, <em>Élancourt</em>, <em>Guyancourt</em>...).
				</p>
				<p>
					Ponctuellement, je peux aussi vous recevoir dans les espaces de
					bien-être de Coffret d’Alumine à <em>Plaisir</em>.
				</p>
				<p>
					Pour rester en contact et suivre mon actualité, retrouvez-moi sur{' '}
					<a href={import.meta.env.VITE_URLFB} target='_blank'>
						Facebook
					</a>
					,{' '}
					<a href={import.meta.env.VITE_URLInstagram} target='_blank'>
						Instagram
					</a>
					,{' '}
					<a href={import.meta.env.VITE_URLTwitter} target='_blank'>
						Twitter
					</a>{' '}
					et{' '}
					<a href={import.meta.env.VITE_URLLinkedIn} target='_blank'>
						LinkedIn
					</a>{' '}
					.
				</p>
			</>
		),
	},
	{
		question: 'Quels bienfaits puis-je attendre ?',
		response: (
			<>
				<p>
					Mes soins favorisent la détente, la libération des tensions,
					l’équilibre énergétique et émotionnel, ainsi qu’un regain de vitalité.
					Chaque personne vit l’expérience de manière unique, selon ses besoins
					du moment.
				</p>
				<p>
					Il est essentiel de rappeler que mes soins Reiki Usui et massages
					énergétiques ne se substitutent pas un traitement médical ou
					thérapeutique. Ils n’ont pas pour vocation de guérir une maladie ou
					une pathologie mais à vous accompagner sur votre chemin vers la
					guérison et le mieux-être. Leur rôle est de soutenir, d’apaiser et
					d’harmoniser, en complément d’un suivi ou traitement médical ou
					thérapeutique.
				</p>
			</>
		),
	},
];
