import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Portifolio from './components/Portifolio';
import Skills from './components/Skills';

// Tema Dark & Sofisticado
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8b5cf6',
        },
        secondary: {
            main: '#06b6d4',
        },
        background: {
            default: '#0f172a',
            paper: 'rgba(255, 255, 255, 0.04)',
        },
        text: {
            primary: '#e2e8f0',
            secondary: '#cbd5e1',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.125rem',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1rem',
        },
        body1: {
            fontSize: '0.95rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8b5cf6 #0f172a',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#0f172a',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#8b5cf6',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#a78bfa',
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
                <Navbar />

                {/* Single Page Layout */}
                <div id="home">
                    <HeroSection />
                </div>

                <div id="about">
                    <About />
                </div>

                <div id="skills">
                    <Skills />
                </div>

                <div id="experience">
                    <Experience />
                </div>

                <div id="portifolio">
                    <Portifolio />
                </div>

                <div id="certifications">
                    <Certifications />
                </div>

                <div id="contact">
                    <Contact />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
