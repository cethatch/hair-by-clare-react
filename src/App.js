// Import dependencies
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import PageHeader from './components/header/PageHeader';
import PageFooter from './components/footer/PageFooter';

// Import pages you have completed:
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

// Define the function that renders the content in Routes, using State.
function App() {

  return (
    <BrowserRouter >
      <PageHeader />
      <main>
            <Routes> 
                <Route path='/' element={ <HomePage />} />
                <Route path="/services" element={ <ServicesPage />} /> 
                <Route path="/portfolio" element={<PortfolioPage />} />                 
                <Route path="/contact" element={<ContactPage />} /> 
            </Routes>
      </main>

      <PageFooter />

    </BrowserRouter>
  );
}

export default App;
