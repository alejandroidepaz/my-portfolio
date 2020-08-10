import React from 'react';
import "../styling/index.css";

const Home = () => {

    return (
    
        <div>
            <h1>About Me</h1> 
            <hr style={{width:"75%"}}></hr>
            <article style={{marginLeft:"auto", marginRight:"auto", width:"75%", textAlign:"left"}}>
                <p>
                    
                    Hi, my name is Alejandro De Paz. I was born and raised in Portland, Oregon,
                    where I've spent the last 22 years enjoying urban biking, tennis, and endless foodcart cuisine. 
                    When I'm not outdoors, I'm working on mastering my music production skills with Ableton, 
                    playing Super Smash Bros. Melee, or exercising my own creative gastronomy by cooking
                    everything from homemade Vietnamese Bánh mì to Italian Carbonara. 
                </p>
                <p>
                    I recently graduated from the University of Oregon, where I received my 
                    B.S. in Computer & Information Science with minors in Mathematics and Computer Information
                    Technology (CIT). In the past year, I've had the honor of working as a Data Science Intern with Weir 
                    ESCO, and as a Website Programmer with University of Oregon Continuing and Professional
                    Education. Between these two roles, I've built everything from responsive frontend components, to
                    large scale custom algorithms. Both positions were truly invaluable, providing me with meaningful 
                    hands-on experience that has helped shape my software engineering expertise. 
                </p>
                <p>
                    While I'd like to consider myself technology agnostic, suffice it to say that I'm most proficient 
                    with Python, JavaScript, and C. I have strong knowledge of fundamental data structures and algorithms, 
                    and I feel confident in my ability to apply these concepts and techniques in practical ways. 
                    Above all else, I'm a motived self-starter who's eager to learn and grow; I've engaged in numerous
                    personal projects encompassing everything from fullstack web applications to small start-up ventures,
                    and I have a proven history of learning on-the-fly and working effectively on interdisciplinary teams. 
                </p>
                <p>
                    I'm currently looking for a full-time software engineering role, or internship, where I can leverage my diverse skillset
                    to help develop enterprise level solutions at a mid-to-large sized compnay. If you feel like I could be a good
                    fit for your team and mission, please don't hesitate to reach out!
                </p>
            </article>
        </div>
    )
}

export default Home;