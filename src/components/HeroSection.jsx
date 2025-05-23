import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "./utilities/AnimatedButton.jsx";
import ParticlesBackground from "./utilities/ParticlesBackground.jsx";

export default function HeroSection() {
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
                        Olá, eu sou <strong>Dieferson</strong>
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

                {/* Botão com animação */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <AnimatedButton>
                        Ver Portfólio
                    </AnimatedButton>
                </motion.div>
            </Box>
        </>
    );
}
