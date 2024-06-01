import MetaTag from '../tools/MetaTag';

const SiteMap = () => {
	const head = () => {
		return (
			<MetaTag
				title='Plan du site'
				description='Le plan du site. Vous trouverez le lien vers les différentes pages qui le compose : Reiki Usui, Massage des 5 Continents et plus encore...'
				resume='Le plan du site pour ne pas vous perdre.'
			/>
		);
	};

	return (
		<>
			{head()}
			<article>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Qui suis-je ?</a>
					</li>
					<li>
						<a href='/massage-assis-methode-eas'>Massage assis méthode EAS®</a>
					</li>
					<li>
						<a href='/reiki'>Reiki Usui</a>
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
						<a href='/offres'>Tarifs et Offres</a>
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
			</article>
		</>
	);
};
export default SiteMap;
