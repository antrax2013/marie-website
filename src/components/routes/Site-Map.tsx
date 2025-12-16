import MetaTag from '../../modules/MetaTag';

const SiteMap = () => {
	const head = () => {
		return (
			<MetaTag
				title='Plan du site'
				description='Plan des sites marie.cophignon.net, massage‑reiki.fr, massages‑reiki.fr, praticienne en massages bien‑être et Reiki Usui sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise.'
				resume='Plan des sites marie.cophignon.net, massage‑reiki.fr, massages‑reiki.fr, praticienne en massages bien‑être et Reiki Usui sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='article'>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Accueil</a>
					</li>
					<li>
						<a href='/qui-suis-je'>Qui suis-je ?</a>
					</li>
					<li>
						<a href='/massage-assis-methode-eas'>Massage assis méthode EAS®</a>
					</li>
					<li>
						<a href='/reiki-usui'>Reiki Usui</a>
					</li>
					<li>
						<a href='/massage-des-5-continents'>Massage des 5 Continents</a>
					</li>
					<li>
						<a href='/consultations'>Consultations</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
					<li>
						<a href='/offres-et-tarifs'>Offres et Tarifs</a>
					</li>
					<li>
						<a href='/mentions-legales'>Mentions legales</a>
					</li>
					<li>
						<a href='/politique-de-confidentialite'>
							Politique de confidentialite
						</a>
					</li>
					<li>
						<a href='/erreur-404'>Erreur 404</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default SiteMap;
