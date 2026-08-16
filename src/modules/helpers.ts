import { iBlog } from '../components/fragments/Blog/IBlog';

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
	switch (tag.toUpperCase()) {
		case 'Massage du dos assis méth. EAS®'.toUpperCase():
			return 'info';
		case 'Massage des 5 continents'.toUpperCase():
		case 'M5C':
			return 'danger';
		case 'Reiki Usui'.toUpperCase():
		case 'Reiki'.toUpperCase():
			return 'success';
		case 'Salon'.toUpperCase():
		case 'Initiation'.toUpperCase():
		case 'Portes ouvertes'.toUpperCase():
		case 'Atelier'.toUpperCase():
		case 'Massage à domicile'.toUpperCase():
		case 'Massage en entreprise'.toUpperCase():
			return 'warning';
		case 'Offre'.toUpperCase():
		case 'Promo'.toUpperCase():
			return 'contrast';
		default:
			return 'secondary';
	}
};

export const getSimilarArticles = (
	currentArticle: iBlog,
	allArticles: iBlog[],
) => {
	const { tags, slug } = currentArticle;

	return (
		allArticles
			.filter((article: iBlog) => article.slug !== slug)
			.map((article: iBlog) => {
				const tagsEnCommun = article.tags.filter((tag) => tags.includes(tag));
				return {
					...article,
					publishDate: article.date,
					score: tagsEnCommun.length, // Nombre de tags identiques
				};
			})
			// 3. Trier par score décroissant, puis par date la plus récente en cas d'égalité
			.sort((a, b) => {
				if (b.score !== a.score) {
					return b.score - a.score; // Plus haut score en premier
				}
				return b.date.getTime() - a.date.getTime(); // Plus récent en premier
			})
			.slice(0, 2)
	);
};
