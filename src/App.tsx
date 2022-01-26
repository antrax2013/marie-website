import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import QuiSuisJe from './components/pages/Qui-suis-je';
import Reiki from './components/pages/Reiki';
import Massage5Continents from './components/pages/Massage-5-continents';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header flex flex-wrap'>
          <Header />
        </header>
        <section className='App-Body'>
          <Routes>
            <Route path='/' element={<QuiSuisJe />} />
            <Route path='qui-suis-je' element={<QuiSuisJe />} />
            <Route index element={<QuiSuisJe />} />
            <Route path='reiki' element={<Reiki />} />
            <Route path='massage-des-5-continents' element={<Massage5Continents />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<QuiSuisJe />} />
          </Routes>
        </section>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
