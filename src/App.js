// Import dependencies
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import PageHeader from './components/PageHeader.js';
import PageFooter from './components/PageFooter.js';

// Import pages you have completed:
import HomePage from './pages/HomePage.js';
import ServicesPage from './pages/ServicesPage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import ContactPage from './pages/ContactPage.js';

// Define the function that renders the content in Routes, using State.
function App() {

  return (
    <HashRouter >
      <PageHeader />
      <main>
        <section>
            <Routes> 
                <Route path='/' element={ <HomePage />} />
                <Route path="/services" element={ <ServicesPage />} /> 
                <Route path="/portfolio" element={<PortfolioPage />} />                 
                <Route path="/contact" element={<ContactPage />} /> 
            </Routes>
          </section>
      </main>

      <PageFooter />

    </HashRouter>
  );
}

export default App;
