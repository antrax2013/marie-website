import { iFaqItem } from '../../fragments/FAQ/Faq-Item';

export const SoinDomicileFaqItems: Array<iFaqItem> = [
	{
		question: 'Dois-je prévoir du matériel ?',
		response: (
			<>
				<p>
					Non. Je me déplace avec tout le matériel nécessaire au bon déroulement
					de la séance : table de massage professionnelle ou chaise ergonomique
					pour les massages assis, linge adapté et matériel de soin.
				</p>
				<p>
					Mon objectif est de recréer, à votre domicile, les mêmes conditions de
					confort et de qualité que dans mes cabinets. Vous n'avez qu'à prévoir
					un espace suffisant pour l’installation et vous laisser guider.
				</p>
			</>
		),
	},
	{
		question: 'Combien d’espace faut-il prévoir ?',
		response: (
			<>
				<p>
					Dans la plupart des situations, un espace d’environ 2,5 mètres sur 1,5
					mètre est suffisant pour installer une table de massage et permettre
					une circulation confortable autour de celle-ci. 2 mètres sur 1,5 mètre
					est suffisant pour un massage assis.
				</p>
				<p>
					Un salon, une chambre spacieuse, un jardin, une véranda ou même une
					terrasse abritée peuvent parfaitement convenir. Si vous avez un doute,
					nous pourrons en discuter ensemble lors de la prise de rendez-vous.
				</p>
			</>
		),
	},
	{
		question:
			'Puis-je recevoir un soin si je n’habite pas dans l’une des communes indiquées ?',
		response: (
			<>
				<p>
					J’interviens principalement sur l’agglomération de
					Saint-Quentin-en-Yvelines : Élancourt, Guyancourt, Maurepas, Plaisir,
					Montigny-le-Bretonneux, Voisins-le-Bretonneux, Trappes, Coignières, La
					Verrière, Le Mesnil-Saint-Denis et les communes environnantes.
				</p>
				<p>
					Si vous résidez en dehors de ce secteur, n’hésitez pas à me contacter
					afin que nous puissions étudier ensemble la possibilité d’un
					déplacement.
				</p>
			</>
		),
	},
	{
		question: 'Quels soins peuvent être réalisés à domicile ?',
		response: (
			<p>
				La plupart de mes soins et massages peuvent être réalisés chez vous :{' '}
				<a href='/reiki-usui'>Reiki Usui</a>,{' '}
				<a href='/massage-des-5-continents'>Massage des 5 Continents</a> et{' '}
				<a href='/massage-assis-methode-eas'>
					massage du dos assis méthode EAS®
				</a>
				. Lors de notre premier échange, nous déterminerons ensemble le soin le
				plus adapté à vos besoins, à vos attentes du moment et à l’espace
				disponible.
			</p>
		),
	},
];
