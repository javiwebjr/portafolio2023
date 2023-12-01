import React, { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import "./portfolio.scss";

const items = [
    {
        id: 1,
        title: "NodeJs RealState Site",
        img: "/assets/BienesRaices.png",
        description: "This was a big project for me, my first steps on nodejs and pug template, feel free to download and test or review my code. Actually working on update it with angular and typescript node.",
        link: 'https://github.com/javiwebjr/RealStates'
    },
    {
        id: 2,
        title: "Administrator Veterinarians",
        img: "/assets/Veterinaria.png",
        description:"One of my first projects including email confirmation, forget password, and CRUD.",
        link: 'https://github.com/javiwebjr/VET_BACKEND'
    },
    {
        id: 3,
        title: "MERN Ecommerce",
        img: "/assets/eCommerce.png",
        description: "My Latest And Great Project, Ecommerce - Online Shop with paypal, filtering products, redux, tailwind, mongoDB, express, and more... Feel free to download and test it.",
        link: 'https://github.com/javiwebjr/VirtualShopElSalvador'
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
                        <a href={item.link} target='_blank'>REPO</a>
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
                <h1>FullStack Progress</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
            
        </div>
    )
}

export default Portfolio
