export const getBadgeSeverityFromTag = (
	tag: string,
):
	| 'info'
	| 'danger'
	| 'success'
	| 'warning'
	| 'secondary'
	| 'contrast'
	| null
	| undefined => {
	switch (tag) {
		case 'Massage du dos assis méth. EAS®':
			return 'info';
		case 'Massage des 5 continents':
			return 'danger';
		case 'Reiki Usui':
			return 'success';
		case 'Salon':
		case 'Portes ouvertes':
		case 'Porte ouverte':
		case 'Atelier':
		case 'Massage en entreprise':
			return 'warning';
		case 'Offre':
		case 'Promo':
			return 'contrast';
		default:
			return 'secondary';
	}
};
