import { motion } from "framer-motion";
import { useRef, useState } from "react";

/**
 * AnimatedButton - Botão animado com funcionalidade de arrastar
 */
export default function AnimatedButton({
    children,
    href = "/portifolio",
    variant = "contained",
    sx = {},
    ...props
}) {
    const constraintsRef = useRef(null);
    const [wasDragged, setWasDragged] = useState(false);

    const handleClick = () => {
        if (!wasDragged) {
            const sectionId = href.replace(/^\//, "");
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setWasDragged(false);
    };

    const defaultButtonStyles = {
        background: variant === "contained"
            ? "linear-gradient(45deg, #00ff88, #00cc6a)"
            : "transparent",
        color: variant === "contained" ? "#000000" : "#00ff88",
        border: variant === "outlined" ? "2px solid #00ff88" : "none",
        padding: "12px 32px",
        fontSize: "0.85rem",
        fontFamily: "'Playfair Display', serif",
        fontWeight: "bold",
        borderRadius: "10px",
        cursor: "pointer",
        minWidth: "200px",
        minHeight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: variant === "contained"
            ? "0 4px 15px rgba(0, 255, 136, 0.3)"
            : "none",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: variant === "contained"
                ? "0 8px 25px rgba(0, 255, 136, 0.4)"
                : "0 4px 15px rgba(0, 255, 136, 0.2)",
            background: variant === "contained"
                ? "linear-gradient(45deg, #00dd77, #00aa55)"
                : "rgba(0, 255, 136, 0.1)"
        },
        ...sx
    };

    const constraintsStyles = {
        width: 300,
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 10,
    };

    return (
        <motion.div ref={constraintsRef} style={constraintsStyles}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.3}
                style={defaultButtonStyles}
                onClick={handleClick}
                onDragStart={() => setWasDragged(true)}
                whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: variant === "contained"
                        ? "0 15px 35px rgba(0, 255, 136, 0.5)"
                        : "0 8px 25px rgba(0, 255, 136, 0.3)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{
                    scale: 0.92,
                    rotateZ: -2,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileDrag={{
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(0, 255, 136, 0.6)",
                    transition: { type: "spring", stiffness: 200, damping: 15 }
                }}
                initial={{
                    opacity: 0,
                    y: 30,
                    rotateX: -15
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2
                    }
                }}
                {...props}
            >
                <motion.span
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                >
                    {children || "Ver Portfólio"}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}