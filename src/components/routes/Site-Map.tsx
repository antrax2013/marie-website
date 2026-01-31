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
			<div className='article'>
				<h1>Le plan du site</h1>
				<h2>
					Les pages de présentations de mon activité de massages énergétiques et
					de soin Reiki Usui{' '}
				</h2>
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
				</ul>
				<h2>
					Les pages liées à des acutalités, des événements ou des offres
					ponctuelles
				</h2>
				<ul>
					<ul>
						<li>
							<a href='/portes-ouvertes-bien-etre-reiki-massage-saint-quentin-en-yvelines-janvier-2026'>
								Portes ouvertes du cabinet Blowball 25/01/2026
							</a>
						</li>
						<li>
							<a href='/soin-massage-eas-tambour-sqy-plaisir-yvelines'>
								Le soin duo massages assis méthode EAS® - Tambour Unité -
								Plaisir
							</a>
						</li>
					</ul>
				</ul>
				<h1>Les autres pages</h1>
				<ul>
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
