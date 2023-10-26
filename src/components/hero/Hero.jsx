import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion";

const textVariants ={
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants ={
    initial: {
        x: 0,
    },
    animate: {
        x: "-250%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div 
                    className='textContainer' 
                    variants={textVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a 
                            href='#Portfolio' 
                            variants={textVariants} 
                            className='hero_cta cta_modifier'
                            whileHover={{backgroundColor:"transparent", color: "white"}}
                        >Mis ultimos trabajos
                        </motion.a>
                        <motion.a 
                            href='#Contact' 
                            variants={textVariants} 
                            className='hero_cta'
                            whileHover={{backgroundColor:"white", color: "black"}}
                        >Contáctame
                        </motion.a>
                    </motion.div>
                    <motion.h2 variants={textVariants}>Javier Urrutia</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer FullStack</motion.h1>
                    <motion.img 
                        src="/assets/scroll.png" 
                        alt="Logo_Scroll_Hero_Section" 
                        animate="scrollButton"  
                        variants={textVariants}
                    />
                </motion.div>
            </div>
            <motion.div 
                className="silidingTextContainer" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate"
            >
                Tu visión, mi código
            </motion.div>
            <div className='imageContainer'>
                <img src="/assets/logoHD.png" alt="Logo_Hero_Section"  />
            </div>
        </div>
    )
}
export default Hero
