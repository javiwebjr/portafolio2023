import React, { useEffect, useRef, useState } from 'react'
import {motion, useInView} from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.scss"
const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}
const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const inView = useInView(ref, {margin: "-100px"});

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (success || error) {
            const timeout = setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 5000); 
            return () => {
            clearTimeout(timeout);
            };
        }
    }, [success, error]);

    const resetForm = () => {
        const form = document.getElementById("form");
        form.reset();
    }

    const sendEmail = async (e) => {
        e.preventDefault();
    
        await emailjs.sendForm(import.meta.env.VITE_MAIL_SERVICE, import.meta.env.VITE_MAIL_TEMPLATE, formRef.current, import.meta.env.VITE_MAIL_PK)
        .then((result) => {
            setSuccess(true);
            resetForm();
        }, (error) => {
            setError(true);
        });
        
    };
    

    return (
        <motion.footer 
            ref={ref}
            className='contact' 
            variants={variants} 
            initial="initial" 
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h3>Are you ready to work together?</motion.h3>
                <motion.div className="item" variants={variants}>
                    <h4>Mail</h4>
                    <span>urissent@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h4>Country</h4>
                    <span>El Salvador</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h4>Phone</h4>
                    <a href='https://api.whatsapp.com/send?phone=50371236891&text=Hola,%20vi%20tu%20portafolio%20web%20y%20estoy%20interesado/a%20en%20charlar%20sobre%20tus%20habilidades'>
                        <img src="/assets/whatsapp.svg" alt="Icon_Contact_Section" />
                    </a>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.form 
                    id='form'
                    ref={formRef}
                    onSubmit={sendEmail}
                    whileInView={{opacity: 1}} 
                >
                    <h4>Leave a message and I will get in touch.</h4>
                    <input type="text" required placeholder='Name:' name='name' />
                    <input type="email" required placeholder='Email:' name='email' />
                    <textarea rows="8" placeholder='Write Your Message' name='message'/>
                    <button>Send</button>
                    {error && <p style={{color:"red", fontSize: "1.5rem"}}>Error, Please Try Again</p> }
                    {success && <p style={{color: "green", fontSize: "1.5rem"}}>Pronto me pondre en contacto, tenemos trabajo pendiente!</p>}
                </motion.form>
            </div>
        </motion.footer>
    )
}

export default Contact
