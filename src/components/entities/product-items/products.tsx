import MassageAssisEAS from '../../../assets/Massage-assis-EAS/massage-assis-eas-cou.png';
import Massage5Continents from '../../../assets/Accueil/m5c-colonne.jpg';
import SoinReikiUsui from '../../../assets/Accueil/Reiki-genou.jpg';
import { iProduct } from '../../fragments/Product';

export const products: iProduct[] = [
	{
		header: 'Le massage du dos assis méthode EAS®',
		description: 'Un massage énergétique rapide aux effets immédiats.',
		image: {
			path: MassageAssisEAS,
			alt: 'Massothérapeute réalisant massage assis méthode EAS® ciblant les trapèzes pour relâcher les tensions',
			className: 'img-massage-assis-eas',
		},
		content:
			'Allié idéal au quotidien comme en entreprise, le massage du dos assis EAS® apaise le stress, libère les tensions et invite à une détente profonde. Sur une chaise ergonomique, en quelques minutes, ce massage du dos et de la nuque, redonne vitalité, clarté d’esprit et une disponibilité intérieure précieuse.',

		cta: {
			link: '/massage-assis-methode-eas',
			title: 'Cliquez ici pour découvrir le massage du dos assis méthode EAS®.',
		},
		bloquoteContent:
			'Un véritable soutien pour traverser avec sérénité les défis de votre journée.',
		category: 'energy healing massage',
	},
	{
		header: (
			<>
				Le massage des 5 Continents{' '}
				<a href='/#disclaimers'>
					<span className='asterix'>*</span>
				</a>
			</>
		),
		description: 'Un massage holistique unique, une relaxation durable.',
		image: {
			path: Massage5Continents,
			alt: 'Massothérapeute effectuant un massage des 5 continents pour détendre le haut du dos et harmoniser l’énergie',
			className: 'img-massage-assis-eas',
		},
		content: (
			<>
				Le <b>M</b>assage des <b>5</b> <b>C</b>ontinents (<b>M5C</b>) est un
				soin énergétique unique qui combine différentes techniques de massage,
				des huiles végétales et essentielles, ainsi qu'un soin Reiki Usui. Il
				agit à la fois sur le corps et l’esprit, offrant une détente durable et
				une revitalisation profonde.
			</>
		),
		cta: {
			link: '/massage-des-5-continents',
			title: 'Cliquez ici pour découvrir le massage des cinq continents (M5C).',
		},
		bloquoteContent:
			'Une expérience sensorielle unique pour renouer avec vous-même.',
		category: 'energy healing massage',
	},
	{
		header: 'Le Reiki Usui',
		description: 'Un soin énergétique doux par apposition des mains.',
		image: {
			path: SoinReikiUsui,
			alt: 'Maître Reiki Usui réalisant un soin Reiki Usui ciblant les genoux pour rétablir la circulation énergétique',
			className: 'img-massage-assis-eas',
		},
		content: (
			<>
				Le Reiki Usui rétablit l’équilibre du corps et de l’esprit, apportant
				détente, confort et bien-être intérieur. Accessible à tous il accompagne
				dans de nombreux domaines : gestion du stress, fatigue, insomnie,
				douleurs chroniques ou blocages émotionnels.
			</>
		),
		cta: {
			link: '/reiki-usui',
			title: 'Cliquez ici pour découvrir les soins Reiki Usui.',
		},
		bloquoteContent:
			'Un voyage intérieur qui vous mène à la paix et l’équilibre.',
		category: 'energy healing',
	},
];
