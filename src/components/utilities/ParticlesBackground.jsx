// src/components/ParticlesBackground.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ParticlesBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 10, y: window.innerHeight / 10 });
    const [smoothMousePosition, setSmoothMousePosition] = useState({ x: window.innerWidth / 10, y: window.innerHeight / 10 });
    const animationFrameRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Smooth interpolation para movimento suave
    useEffect(() => {
        const smoothUpdate = () => {
            setSmoothMousePosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) / 10, // Interpolação mais lenta (10%)
                y: prev.y + (mousePosition.y - prev.y) / 10
            }));
            animationFrameRef.current = requestAnimationFrame(smoothUpdate);
        };

        animationFrameRef.current = requestAnimationFrame(smoothUpdate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePosition]);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 0,
                overflow: "hidden"
            }}
        >
            {/* Partículas de fundo com movimento muito lento */}
            {Array.from({ length: 15 }, (_, index) => {
                const size = Math.random() * 4 + 2; // 2-6px (menor)
                const initialX = Math.random() * window.innerWidth;
                const initialY = Math.random() * window.innerHeight;
                const duration = Math.random() * 30 + 20; // 20-50 seconds (muito mais lento)
                const delay = index * 1; // Delay ainda maior
                const isGreen = Math.random() > 0.7; // Menos partículas verdes

                // Movimento muito sutil e lento
                const moveRange = 20; // Movimento muito pequeno

                return (
                    <motion.div
                        key={index}
                        style={{
                            position: "absolute",
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            background: isGreen ? "#00ff8820" : "#ffffff15", // Muito mais transparente
                            boxShadow: `0 0 ${size * 2}px ${isGreen ? "#00ff8810" : "#ffffff10"}`,
                        }}
                        initial={{
                            x: initialX,
                            y: initialY,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: [
                                initialY,
                                initialY - moveRange,
                                initialY + moveRange,
                                initialY
                            ],
                            x: [
                                initialX,
                                initialX + moveRange,
                                initialX - moveRange,
                                initialX
                            ],
                            opacity: [0, 0.3, 0.2, 0.3, 0], // Opacidade muito baixa
                            scale: [0, 0.5, 0.7, 0.5, 0], // Escala pequena
                            rotate: [0, 45, 90] // Rotação mínima
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}

            {/* Orbs de ambiente muito sutis */}
            {Array.from({ length: 4 }, (_, index) => {
                const size = Math.random() * 8 + 6; // 6-14px (menor)
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const duration = Math.random() * 40 + 30; // 30-70 seconds (extremamente lento)

                return (
                    <motion.div
                        key={`orb-${index}`}
                        style={{
                            position: "absolute",
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, #00ff8820, #00ff8805)",
                            boxShadow: `0 0 ${size * 1.5}px #00ff8810`,
                        }}
                        initial={{ x, y, opacity: 0 }}
                        animate={{
                            x: [x, x + 40, x - 30, x], // Movimento muito pequeno
                            y: [y, y - 30, y + 40, y],
                            opacity: [0, 0.2, 0.1, 0.2, 0], // Opacidade muito baixa
                            scale: [0.2, 0.4, 0.3, 0.4, 0.2] // Escala muito pequena
                        }}
                        transition={{
                            duration,
                            delay: index * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}

            {/* Partículas que seguem o mouse - principais */}
            {Array.from({ length: 4 }, (_, index) => {
                const size = 4 + index; // 4px, 5px, 6px, 7px

                // Movimento orbital mais visível
                const orbitRadius = 25 + index * 12; // 25px, 37px, 49px, 61px
                const speed = 0.0008 + index * 0.0003; // Velocidades diferentes
                const targetX = smoothMousePosition.x + (Math.sin(Date.now() * speed + index * Math.PI * 0.7) * orbitRadius);
                const targetY = smoothMousePosition.y + (Math.cos(Date.now() * speed + index * Math.PI * 0.7) * orbitRadius);

                return (
                    <motion.div
                        key={`follower-${index}`}
                        style={{
                            position: "absolute",
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            background: `rgba(0, 255, 136, ${0.8 - index * 0.15})`,
                            boxShadow: `0 0 ${size * 5}px rgba(0, 255, 136, ${0.6 - index * 0.1})`,
                            filter: "blur(0.2px)",
                        }}
                        animate={{
                            x: targetX,
                            y: targetY,
                            scale: [0.8, 1.3, 0.8],
                            opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{
                            x: { duration: 2.5 + index * 0.5, ease: "easeOut" },
                            y: { duration: 2.5 + index * 0.5, ease: "easeOut" },
                            scale: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                );
            })}

            {/* Partículas que reagem diretamente ao mouse */}
            {Array.from({ length: 3 }, (_, index) => {
                const size = 3 + index * 0.8; // 3px, 3.8px, 4.6px
                const reactivity = 0.4 - index * 0.08; // 0.4, 0.32, 0.24

                // Posição baseada no mouse com offset
                const offsetAngle = (index * Math.PI * 2) / 3; // Distribuir em triângulo
                const offsetDistance = 80 + index * 25;
                const baseX = window.innerWidth / 2 + Math.cos(offsetAngle) * offsetDistance;
                const baseY = window.innerHeight / 2 + Math.sin(offsetAngle) * offsetDistance;

                const targetX = baseX + (smoothMousePosition.x - window.innerWidth / 2) * reactivity;
                const targetY = baseY + (smoothMousePosition.y - window.innerHeight / 2) * reactivity;

                return (
                    <motion.div
                        key={`reactive-${index}`}
                        style={{
                            position: "absolute",
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.9)",
                            boxShadow: `0 0 ${size * 8}px rgba(255, 255, 255, 0.7)`,
                        }}
                        animate={{
                            x: targetX,
                            y: targetY,
                            scale: [0.6, 1.2, 0.6],
                            opacity: [0.4, 0.9, 0.4]
                        }}
                        transition={{
                            x: { duration: 1.2, ease: "easeOut" },
                            y: { duration: 1.2, ease: "easeOut" },
                            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                );
            })}

            {/* Background subtle gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(ellipse at 30% 70%, rgba(0, 255, 136, 0.08) 0%, transparent 50%)",
                    pointerEvents: "none"
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
