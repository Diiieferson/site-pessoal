// src/components/ParticlesBackground.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ParticlesBackground = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    // const [positionLeft, setPositionLeft] = useState(Math.random() * (500 - 10) + 10);
    // const [size, setSize] = useState(Math.random() * (10 - 1) + 1);
    // const [squareOpacity, setSquareOpacit] = useState(Math.random() * (0.7 - 0.1) + 0.1);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight - 1); // Subtract 1 to prevent overflow
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [screenHeight]);

    return (
        <>
            {Array.from({ length: 100 }).map((_, index) => {
                const left = Math.random() * (screenWidth - 10) + 10;
                const size = Math.random() * (10 - 1) + 1;
                const opacity = Math.random() * (0.7 - 0.1) + 0.1;
                const endY = screenHeight - Math.random() * (10 - 1) + 1 - size - 10;
                const animationDuration = Math.random() * (10 - 1) + 1;

                return (
                    <motion.div
                        key={index}
                        style={{
                            position: "absolute",
                            left: left,
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            backgroundColor: "white",
                            opacity: opacity,
                        }}
                        transition={{ duration: animationDuration, repeat: Infinity, ease: "easeInOut" }}
                        initial={{ y: 0, opacity: opacity }}
                        animate={{
                            y: [0, endY],
                            rotate: [0, 360, 0],
                            opacity: opacity,
                        }}
                        exit={{ x: 0, opacity: 0 }}
                    />
                );
            })}
        </>
    );
}

export default ParticlesBackground;
