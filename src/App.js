import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Portifolio from './components/Portifolio';
import Skills from './components/Skills';

// Tema escuro personalizado
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00ff88',
        },
        secondary: {
            main: '#61dafb',
        },
        background: {
            default: '#0a0a0a',
            paper: 'rgba(255, 255, 255, 0.05)',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#00ff88 #0a0a0a',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#0a0a0a',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#00ff88',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#00dd77',
                    },
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portifolio" element={<Portifolio />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Rota legada para compatibilidade */}
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
