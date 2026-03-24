import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "./utilities/AnimatedButton.jsx";
import ParticlesBackground from "./utilities/ParticlesBackground.jsx";

export default function HeroSection() {
    const handleNavigate = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <ParticlesBackground />
            <Box
                component="section"
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#e2e8f0",
                    px: 2,
                    pt: { xs: 12, md: 8 },
                    pb: 4,
                }}
            >
                {/* Nome com animação de entrada */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom
                        sx={{ 
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                            mb: 2 
                        }}
                    >
                        Olá, eu sou <span style={{ color: '#8b5cf6' }}>Dieferson de Oliveira</span>
                    </Typography>
                </motion.div>

                {/* Texto com efeito de máquina de escrever */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            mb: 6,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            color: '#cbd5e1'
                        }}
                    >
                        <Typewriter
                            words={["Desenvolvedor Full Stack", "Especialista em Automação", "Apaixonado por Tecnologia 💻"]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </Typography>
                </motion.div>

                {/* Botões com animação aprimorada */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30, rotateY: -15 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{
                                delay: 1.8,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 120
                            }}
                        >
                            <AnimatedButton onClick={() => handleNavigate('experience')}>
                                Ver Experiências
                            </AnimatedButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30, rotateY: 15 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{
                                delay: 2.0,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 120
                            }}
                        >
                            <AnimatedButton
                                variant="outlined"
                                onClick={() => handleNavigate('contact')}
                                sx={{
                                    borderColor: '#8b5cf6',
                                    color: '#8b5cf6',
                                    '&:hover': {
                                        borderColor: '#a78bfa',
                                        backgroundColor: 'rgba(139, 92, 246, 0.1)'
                                    }
                                }}
                            >
                                Entre em Contato
                            </AnimatedButton>
                        </motion.div>
                    </Box>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2.5, duration: 1.5, repeat: Infinity }}
                    style={{ 
                        position: 'absolute', 
                        bottom: 20, 
                        color: '#8b5cf6',
                        fontSize: '1.5rem'
                    }}
                >
                    ↓
                </motion.div>
            </Box>
        </>
    );
}
