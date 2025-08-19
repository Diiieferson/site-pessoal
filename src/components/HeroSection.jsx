import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "./utilities/AnimatedButton.jsx";
import ParticlesBackground from "./utilities/ParticlesBackground.jsx";

export default function HeroSection() {
    // Controlar o overflow do body quando o componente está ativo
    useEffect(() => {
        document.body.classList.add('hero-page');
        return () => {
            document.body.classList.remove('hero-page');
        };
    }, []);
    return (
        <>
            <ParticlesBackground />
            <Box
                component="section"
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#ffffff",
                    px: 2,
                }}
            >
                {/* Nome com animação de entrada */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        Olá, eu sou <strong>Dieferson de Oliveira</strong>
                    </Typography>
                </motion.div>

                {/* Texto com efeito de máquina de escrever */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <Typography variant="h5" sx={{ mb: 4 }}>
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
                            <AnimatedButton href="/experience">
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
                                href="/contact"
                                sx={{
                                    borderColor: '#00ff88',
                                    color: '#00ff88',
                                    '&:hover': {
                                        borderColor: '#00dd77',
                                        backgroundColor: 'rgba(0, 255, 136, 0.1)'
                                    }
                                }}
                            >
                                Entre em Contato
                            </AnimatedButton>
                        </motion.div>
                    </Box>
                </motion.div>
            </Box>
        </>
    );
}
