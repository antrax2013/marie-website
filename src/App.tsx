import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Consultations from './components/routes/Consultation';
import Contact from './components/routes/Contact';
import { Error404 } from './components/routes/Error404';
import Massage5Continents from './components/routes/Massage-5-continents';
import MassageAssisMethodeEAS from './components/routes/Massage-assis-methode-eas';
import Offres from './components/routes/Offres';
import PanneauLateral from './components/Panneau-lateral';
import PolitiqueConfidentialite from './components/routes/Politique-condfidentialite';
import QuiSuisJe from './components/routes/Qui-suis-je';
import Reiki from './components/routes/Reiki';
import FooterMenu from './components/tools/Footer-Menu';
import ScrollButton from './components/tools/Scrollbutton';
import PlanDuSite from './components/routes/Site-Map';

function App() {
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
}

export default App;
