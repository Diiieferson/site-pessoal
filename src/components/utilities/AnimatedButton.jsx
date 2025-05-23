import { motion } from "framer-motion";
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";

/**
 * ==============   Styles   ================
 */

const constraints = {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "var(--hue-1-transparent)",
    borderRadius: 10,
}

const box = {
    width: 200,
    height: 50,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0088",
    borderRadius: 10,
}

export default function AnimatedButton() {
    const constraintsRef = useRef(null)
    const [wasDragged, setWasDragged] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (wasDragged) {
            navigate("/portfolio");
            setWasDragged(false);
            return;
        }
        navigate("/portifolio");
    }


    return (
        <motion.div ref={constraintsRef} style={constraints}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                style={box}
                onClick={() => {
                    if (!wasDragged) {
                        handleClick();
                    }
                        
                    setWasDragged(false)
                }}
                onDragStart={() => { setWasDragged(true) }}
            >
                Meu Portifólio
            </motion.div>
        </motion.div>
    )
}