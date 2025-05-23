import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Portifolio from './components/Portifolio.jsx';

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/about" element={<div>About</div>} />
                    <Route path="/portifolio" element={<Portifolio />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
