import React, { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import "./portfolio.scss";

const items = [
    {
        id: 1,
        title: "NodeJs BienesRaices App",
        img: "/assets/BienesRaices.png",
        description: "App mas completa pero sencilla en estilo, implementada seccion de busqueda, categorias, Pin en mapa por propiedades, sin embargo modulo SCRF no compatible en produccion y esta pendiende de actualizacion, aun asi puedes checar un vistazo al repositorio.",
        link: 'https://github.com/javiwebjr/RealStates'
    },
    {
        id: 2,
        title: "Administracion de citas de Veterinaria",
        img: "/assets/Veterinaria.png",
        description:"Esta app fue realmente sencilla, CRUD sin monitores de estados, sin embargo seguridad implementada como CORS, verificacion de email y olvido de contrasena, aunque este teniendo problemas con el deploy lo estare solucionando lo mas pronto posible, puedes checar el repositorio.",
        link: 'https://github.com/javiwebjr/VET_BACKEND'
    },
    {
        id: 3,
        title: "Laravel React order food",
        img: "/assets/Datecafe.png",
        description: "Los requerimientos fueron simples, funcional y sencillo. Trabajar con ordenes ya sea para meseros o como quiosco en el restaurante.",
        link: 'https://datecafequiosco.vercel.app/'
    }
];

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="portfolio_img_section" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link} target='_blank'>Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 75,
        damping: 15
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Destacados</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
            
        </div>
    )
}

export default Portfolio
