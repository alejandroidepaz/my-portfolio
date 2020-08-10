import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styling/index.css";

const Footer = () =>{

    return (
        <div style={{position:"relative", minHeight:"50vh"}}>
            <footer>
                    <div className="footer_icon"><a href="https://www.linkedin.com/in/alejandrodepaz/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="white" /></a></div>
                    <div className="footer_icon"><a href="https://bitbucket.org/alejandrodepaz/software-projects" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'bitbucket']} size="lg" color="white" /></a></div>
                    <div className="footer_icon"><a href="mailto:adepaz@cs.uoregon.edu"><FontAwesomeIcon icon={['fas', 'envelope']} size="lg" color="white" /></a></div>
                    <div className="footer_icon"><a href="tel:503-997-1658"><FontAwesomeIcon icon={['fas', 'phone']} size="lg" color="white" /></a></div>
                    <div><p style={{ color:"white"}}>Powered By React <FontAwesomeIcon icon={['fab', 'react']} size="md" color="white" /></p></div>
            </footer>
        </div>
    )
}

export default Footer;