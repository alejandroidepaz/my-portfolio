import React from 'react';
import "../styling/index.css";

const Home = () => {

    return (
    
        <div>
            <h1>About Me</h1> 
            <hr style={{width:"75%"}}></hr>
            <article>
                <p style={{marginLeft:"auto", marginRight:"auto", width:"75%", textAlign:"left"}}>
                    
                    Hi, my name is Alejandro De Paz. I was born and raised in Portland, Oregon,
                    where I enjoy biking, tennis, and endless foodcart cuisine. When I'm not outdoors, 
                    I'm working on mastering my music production skills with Abelton, playing Super
                    Smash Bros. Melee, or try exercising my own creative gastronomic abilities. 
                    <br /> <br />
                    I recently graduated from the University of Oregon, where I received my 
                    B.S. in Computer & Information Science with minors in Mathematics and Computer Information
                    Technology (CIT). In the past year, I've had the honor of working as a Data Science Intern with Weir 
                    ESCO, and as a Website Programmer with University of Oregon Continuing and Professional
                    Education; both positions were invaluable, providing me with meaningful hands-on experience 
                    that has helped shape my software engineering expertise. 
                </p>
            </article>
        </div>
    )
}

export default Home;