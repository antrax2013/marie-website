import { events } from '../entities/blog/events/events';
import { iBlog } from '../fragments/Blog/IBlog';
import MetaTag from '../fragments/MetaTags/MetaTag';

const SiteMap = () => {
	const articles: iBlog[] = [...events];

	return (
		<>
			<MetaTag tag='plan-du-site' />
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
						<a href='/contact'>Contact</a>
					</li>
					<li>
						<a href='/offres-et-tarifs'>Offres et Tarifs</a>
					</li>
				</ul>
				<h2>Mes soins et massages énergétiques</h2>
				<ul>
					<li>
						<a href='/massage-assis-methode-eas'>Massage assis méthode EAS®</a>
					</li>
					<li>
						<a href='/reiki-usui'>Reiki Usui</a>
					</li>
					<li>
						<a href='/massage-des-5-continents'>Massage des 5 Continents</a>
					</li>
				</ul>
				<h2>
					Les pages liées à des acutalités, des événements ou des offres
					ponctuelles
				</h2>
				<ul>
					<li>
						<a href='/actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'>
							14/03/2026 - Massage assis méthode EAS® & Tambour Unité : le soin
							duo à Plaisir
						</a>
					</li>
					{articles.map((article: iBlog, i: number) => (
						<li key={`article-${i}`}>
							<a
								href={`articles/${article.slug}`}
							>{`${article.date.toLocaleDateString()} - ${article.h1}`}</a>
						</li>
					))}
				</ul>
				<h2>Autres pages</h2>
				<ul>
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
