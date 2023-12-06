import React from 'react'
import {motion} from "framer-motion";
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity: 0, scale:0.5}}  
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}} 
                    className='my_name'
                >
                    Javier Urrutia
                </motion.span>
                <figure className='social'>
                    <motion.a href="https://github.com/javiwebjr" target='_blank' 
                        whileHover={{scale: 1.2, borderBottom: "0.5px solid gray"}}
                    >
                        <img src="/assets/github.svg" alt="Navbar_social_Icons" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/javierweb3/" target='_blank' 
                        whileHover={{scale: 1.2, borderBottom: "0.5px solid gray"}}
                    >
                        <img src="/assets/linkedin.svg" alt="Navbar_social_Icons" />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/javierweb3/" target='_blank' 
                        whileHover={{scale: 1.2, borderBottom: "0.5px solid gray"}}
                    >
                        <img src="/assets/instagram.svg" alt="Navbar_social_Icons" />
                    </motion.a>
                    <motion.a href="https://api.whatsapp.com/send?phone=50371236891&text=Hola,%20vi%20tu%20portafolio%20web%20y%20estoy%20interesado/a%20en%20charlar%20sobre%20tus%20habilidades" target='_blank' 
                        whileHover={{scale: 1.2, borderBottom: "0.5px solid gray"}}
                    >
                        <img src="/assets/whatsapp.svg" alt="Navbar_social_Icons" />
                    </motion.a>
                </figure>
            </div>
        </nav>
    )
}

export default Navbar
