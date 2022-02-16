import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/elements/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import QuiSuisJe from './components/pages/Qui-suis-je';
import Reiki from './components/pages/Reiki';
import Massage5Continents from './components/pages/Massage-5-continents';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Adresse from './components/pages/Adresse';
import PlanDuSite from './components/pages/Site-Map';
import PolitiqueConfidentialite from './components/pages/Politique-condfidentialite';
import FooterMenu from './components/tools/Footer-Menu';
import ScrollButton from './components/tools/Scrollbutton';
import Consultations from './components/pages/Consultation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='flex flex-wrap'>
          <Header />
        </header>
        <div className='App-body'>
          <main className='content'>
            <Routes>
              <Route path='/' element={<QuiSuisJe />} />
              <Route path='qui-suis-je' element={<QuiSuisJe />} />
              <Route index element={<QuiSuisJe />} />
              <Route path='reiki' element={<Reiki />} />
              <Route
                path='massage-des-5-continents'
                element={<Massage5Continents />}
              />
              <Route path='consultations' element={<Consultations />} />
              <Route path='contact' element={<Contact />} />
              <Route
                path='politique-de-confidentialite'
                element={<PolitiqueConfidentialite />}
              />
              <Route path='plan-du-site' element={<PlanDuSite />} />
              <Route path='*' element={<QuiSuisJe />} />
            </Routes>
            <ScrollButton />
          </main>
          <aside className='content'>
            <Adresse />
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
