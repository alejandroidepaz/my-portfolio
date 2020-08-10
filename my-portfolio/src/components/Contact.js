import React from 'react';
import "../styling/Contact.css";

const Contact = () => {

    return (
        <div>
            <h1>Contact Me</h1>
            <hr style={{width:"75%"}}></hr>  
            <article style={{marginLeft:"auto", marginRight:"auto", width:"75%", textAlign:"center"}}>
                <p><strong>Phone: </strong><em><a href="tel:503-997-1658">(503)997-1658</a></em></p>
                <p><strong>Email: </strong><em><a href="mailto:adepaz@cs.uoregon.edu">adepaz@cs.uoregon.edu</a></em></p>
                <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/alejandrodepaz/" target="_blank" rel="noopener noreferrer"><em>Alejandro De Paz</em></a></p>
                <br /> 
                <p><em>* I am available for calls between the hours of 9am-5pm, Monday-Friday.</em></p>
            </article>      
        </div>

    )
}

export default Contact;