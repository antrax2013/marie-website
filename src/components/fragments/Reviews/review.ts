interface iAvis {
	auteur: string;
	note: string;
	date: Date;
	cabinet: string;
	avatar: string;
	profil: string;
	url: string;
	commentaire: string;
}

interface iReviews {
	avis: iAvis[];
	icone: string;
}
