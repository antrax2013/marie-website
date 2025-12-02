import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Message from './components/fragments/Message';

// Routes
const Accueil = lazy(() => import('./components/routes/Accueil'));
const Massage5Continents = lazy(
	() => import('./components/routes/Massage-5-continents')
);
const MassageAssisMethodeEAS = lazy(
	() => import('./components/routes/Massage-assis-methode-eas')
);
const Offres = lazy(() => import('./components/routes/Offres'));
const Consultations = lazy(() => import('./components/routes/Consultation'));
const Contact = lazy(() => import('./components/routes/Contact'));
const Error404 = lazy(() => import('./components/routes/Error404'));
const QuiSuisJe = lazy(() => import('./components/routes/Qui-suis-je'));
const Reiki = lazy(() => import('./components/routes/Reiki'));
const PlanDuSite = lazy(() => import('./components/routes/Site-Map'));
const PolitiqueConfidentialite = lazy(
	() => import('./components/routes/Politique-confidentialite')
);

// Menu
const FooterLinks = lazy(() => import('./components/fragments/Footer-Links'));

const Header = lazy(() => import('./components/fragments/Header'));
const Footer = lazy(() => import('./components/fragments/Footer'));
const FooterMenu = lazy(() => import('./components/fragments/Footer-Menu'));
const ScrollButton = lazy(() => import('./components/fragments/Scrollbutton'));

const App = () => {
	return (
		<div className='App' itemScope itemType='https://schema.org/WebPage'>
			<BrowserRouter>
				<Message
					link='https://fb.me/e/1PYGeWXkGl'
					content='Je serai présente aux portes ouvertes des espaces bien-être de Coffret d’Alumine à Plaisir (78), les weekend du 13/14 et 20/21 décembre de 14h00 à 18h00.'
					alt='Cliquez sur ce lien pour plus d’informations.'
				/>
				<header className='flex flex-wrap'>
					<Header />
				</header>
				<div className='App-cp danger'></div>
				<div className='App-body'>
					<main className='content' itemProp='mainEntity'>
						<Routes>
							<Route path='/' element={<Accueil />} />
							<Route index element={<Accueil />} />
							<Route path='qui-suis-je' element={<QuiSuisJe />} />
							<Route
								path='massage-assis-methode-eas'
								element={<MassageAssisMethodeEAS />}
							/>
							<Route path='reiki' element={<Reiki />} />
							<Route
								path='massage-des-5-continents'
								element={<Massage5Continents />}
							/>
							<Route path='consultations' element={<Consultations />} />

							<Route path='offres' element={<Offres />} />
							<Route path='contact' element={<Contact />} />
							<Route
								path='politique-de-confidentialite'
								element={<PolitiqueConfidentialite />}
							/>
							<Route path='erreur-404' element={<Error404 />} />
							<Route path='plan-du-site' element={<PlanDuSite />} />
							<Route path='*' element={<Navigate replace to='/erreur-404' />} />
						</Routes>
						<ScrollButton />
						<FooterLinks />
					</main>
				</div>
				<footer>
					<section className='footer-container'>
						<FooterMenu />
					</section>
					<div className='footer-overlay'>
						<Footer />
					</div>
				</footer>
			</BrowserRouter>
		</div>
	);
};

export default App;
