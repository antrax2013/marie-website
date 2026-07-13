import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Message from './components/fragments/Message';

// Menu
const Accueil = lazy(() => import('./components/routes/Accueil'));
const Massage5Continents = lazy(
	() => import('./components/routes/Massage-5-continents'),
);
const MassageAssisMethodeEAS = lazy(
	() => import('./components/routes/Massage-assis-methode-eas'),
);
// const MassageEnEntreprise = lazy(
// 	() => import('./components/routes/Massage-en-entreprise'),
// );
const SoinADomicile = lazy(() => import('./components/routes/Soin-a-domicile'));
const MassageAssisTambourUnite = lazy(
	() => import('./components/routes/Massage-assis-tambour-unite'),
);

const Offres = lazy(() => import('./components/routes/Offres'));
const Contact = lazy(() => import('./components/routes/Contact'));
const QuiSuisJe = lazy(() => import('./components/routes/Qui-suis-je'));
const Reiki = lazy(() => import('./components/routes/Reiki'));

// Blog
const ActusEtNews = lazy(() => import('./components/routes/Actus-et-News'));
const BlogArticle = lazy(
	() => import('./components/fragments/Blog/BlogArticle'),
);
const SoinMassageTambour = lazy(
	() => import('./components/routes/actualites/SoinMassageTambour'),
);

// Autres routes
const PlanDuSite = lazy(() => import('./components/routes/Site-Map'));
const MentionsLegales = lazy(
	() => import('./components/routes/Mentions-Legales'),
);
const Error404 = lazy(() => import('./components/routes/Error404'));
const PolitiqueConfidentialite = lazy(
	() => import('./components/routes/Politique-confidentialite'),
);

// Elements de mise en page
const FooterLinks = lazy(() => import('./components/fragments/Footer-Links'));
const Header = lazy(() => import('./components/fragments/Header'));

const Footer = lazy(() => import('./components/fragments/Footer'));
const FooterMenu = lazy(() => import('./components/fragments/Footer-Menu'));
const ScrollButton = lazy(
	() => import('./components/fragments/Tools/Scrollbutton'),
);

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <Message
					link='/offres-et-tarifs'
					content='Le coffret duo est de retour et disponible jusqu’à fin février.'
					alt='Cliquez sur ce lien pour plus d’informations.'
				/> */}
				<Message
					link='/actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'
					content='Nouveau - Massage assis méthode EAS® & Tambour Unité : le soin duo à Plaisir'
					alt='Cliquez sur ce lien pour plus d’informations.'
				/>
				<header className='flex flex-wrap'>
					<Header />
				</header>
				<div className='App-body'>
					<main className='content' itemProp='mainEntity'>
						<Routes>
							<Route path='/' element={<Accueil />} />
							<Route path='/accueil' element={<Accueil />} />
							<Route index element={<Accueil />} />
							<Route path='qui-suis-je' element={<QuiSuisJe />} />
							<Route path='offres-et-tarifs' element={<Offres />} />
							<Route path='contact' element={<Contact />} />

							{/* Soins */}
							<Route
								path='massage-assis-methode-eas'
								element={<MassageAssisMethodeEAS />}
							/>
							<Route path='reiki-usui' element={<Reiki />} />
							<Route
								path='massage-des-5-continents'
								element={<Massage5Continents />}
							/>
							<Route
								path='massage-assis-tambour-unite'
								element={<MassageAssisTambourUnite />}
							/>

							{/* Préstations */}
							{/* <Route
								path='massage-en-entreprise'
								element={<MassageEnEntreprise />}
							/> */}
							<Route
								path='soins-a-domicile-saint-quentin-en-yvelines'
								element={<SoinADomicile />}
							/>

							{/* Actualités */}
							<Route path='articles-et-actualites' element={<ActusEtNews />} />
							<Route path='/articles/:slug' element={<BlogArticle />} />
							<Route
								path='actualites/soin-massage-eas-tambour-sqy-plaisir-yvelines'
								element={<SoinMassageTambour />}
							/>

							{/* Divers */}
							<Route
								path='politique-de-confidentialite'
								element={<PolitiqueConfidentialite />}
							/>
							<Route path='mentions-legales' element={<MentionsLegales />} />
							<Route path='plan-du-site' element={<PlanDuSite />} />
							<Route path='erreur-404' element={<Error404 />} />
							<Route path='*' element={<Navigate replace to='/erreur-404' />} />
						</Routes>
						<ScrollButton />
						<FooterLinks />
					</main>
				</div>
				<footer>
					<div className='footer-container'>
						<FooterMenu />
					</div>
					<div className='footer-overlay'>
						<Footer />
					</div>
				</footer>
			</BrowserRouter>
		</div>
	);
};

export default App;
