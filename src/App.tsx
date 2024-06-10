import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { lazy } from 'react';

const Consultations = lazy(() => import('./components/routes/Consultation'));
const Contact = lazy(() => import('./components/routes/Contact'));
const Error404 = lazy(() => import('./components/routes/Error404'));
const Massage5Continents = lazy(
	() => import('./components/routes/Massage-5-continents')
);
const MassageAssisMethodeEAS = lazy(
	() => import('./components/routes/Massage-assis-methode-eas')
);
const Offres = lazy(() => import('./components/routes/Offres'));
const PanneauLateral = lazy(() => import('./components/Panneau-lateral'));
const PolitiqueConfidentialite = lazy(
	() => import('./components/routes/Politique-condfidentialite')
);
const QuiSuisJe = lazy(() => import('./components/routes/Qui-suis-je'));
const Reiki = lazy(() => import('./components/routes/Reiki'));
const FooterMenu = lazy(() => import('./components/tools/Footer-Menu'));
const ScrollButton = lazy(() => import('./components/tools/Scrollbutton'));
const PlanDuSite = lazy(() => import('./components/routes/Site-Map'));

const App = () => {
	// const message: any = useRef(null);

	// useEffect(() => {
	//   if (
	//     message.current &&
	//     !JSON.parse(sessionStorage.getItem('hiddeMessage') ?? 'false')
	//   ) {
	//     message.current.show([
	//       {
	//         severity: 'info',
	//         detail:
	//           ' Fermé pour congés annuels du 29/07/2023 au 15/08/2023 inclus',
	//         sticky: true,
	//       },
	//     ]);
	//   }
	// }, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<header className='flex flex-wrap'>
					<Header />
				</header>
				<div className='App-cp danger'>
					{/* <Messages
            ref={message}
            onRemove={() =>
              sessionStorage.setItem('hiddeMessage', JSON.stringify(true))
            }
          /> */}
				</div>
				<div className='App-body'>
					<main className='content'>
						<Routes>
							<Route path='/' element={<QuiSuisJe />} />
							<Route path='qui-suis-je' element={<QuiSuisJe />} />
							<Route index element={<QuiSuisJe />} />
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
					</main>
					<aside className='content'>
						<PanneauLateral />
					</aside>
				</div>
				<section className='article-footer'>
					<FooterMenu />
				</section>
			</BrowserRouter>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default App;
