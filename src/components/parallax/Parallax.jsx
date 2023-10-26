import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import "./parallax.scss";

const Parallax = ({type}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

    return (
        <div className='parallax'
            ref={ref} 
            style={{background: type==="technologys" 
            ? "linear-gradient(180deg, #505064, #0c0c1d)" 
            : "linear-gradient(180deg, #0c0c1d, #505064)"
            }}
        >
            <motion.h1 style={{y: yText}}>{type==="technologys" ? "Mis Tecnologias" : "Mis trabajos"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"></motion.div>
            <motion.div style={{x: yText}} className="stars"></motion.div>
        </div>
    )
}

export default Parallax
