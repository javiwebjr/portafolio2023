import React, { useRef } from 'react';
import "./technologys.scss";
import techs from "../../techs";
import {motion, useInView} from "framer-motion";

const variants = {
    initial: {x: -500, opacity: 0},
    animate: {x: 0, opacity: 1, transition: {
        duration: 1.3,
        staggerChildren: 0.1
    }}
}

const Technologys = () => {
    const ref = useRef();
    // const inView = useInView(ref, {margin: "-100px"})
    //Agregar un contenedor sin el inView
    return (
        <motion.section 
            className='technologys' 
            variants={variants} 
            initial="initial" 
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I am a self - learner who is always seeking to learn and improve!</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h2><motion.b whileHover={{color: "orange"}}>Always Ready</motion.b> and Willing</h2>
                </div>
            </motion.div>
            <motion.article className="listContainer" variants={variants}>
                {techs.map(item => (
                    <motion.figure className="box" key={item.id} whileHover={{ scale: 1.2 }}>
                        <img src={item.img} alt={`Imagen_Lista_Tecnologias${item.title}`} />
                        <span>{item.title}</span>
                    </motion.figure>
                ))}
            </motion.article>
        </motion.section>
    )
}

export default Technologys
