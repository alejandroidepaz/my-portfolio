import React from "react";
import "../styling/ProjectDisplay.css";
const ProjectDisplay = (props) => {

    const projects = {

        "keysafe": ["KeySafe", 
        "Due to the ever-increasing number of accounts that modern humans maintain, it is easy to become overwhelmed with the sheer volume of passwords that we are required to remember. Inevitably, we tend to reuse passwords – or, not much better, different permutations of the same password. As a consequence, if one password becomes compromised, the risk that many other accounts become compromised increases drastically. According to the comprehensive Verizon Data Breach Investigations Report from 2018, over 70% of employees reuse passwords at work. The report finds a staggering '81% of hacking-related breaches leveraged either stolen and/or weak passwords'. KeySafe password management was a comprehensive project aimed at providing a clean solution to this ubiquitous problem. | As the Tech Lead for this project, I helped architect and implement the password management application using a powerful suite of best-practice tools, including the SHA256 hashing algorithm for the master password, PBKDF2 key derivation function for encryption/decryption of user stored passwords, HTTPS, CSRF token protection, two-factor authentication via robust master password creation and TOTP token generation, and logical distribution of server-side data to minimize data transactions between server and client. By militantly heeding the Principle of Effectiveness, my team and I were able to successfully implement a functional web-based password management application with these numerous robust security measures.",
         "https://www.youtube.com/embed/-PqbBv6uTA0"],
        "whatskraken": ["What's Kraken", 
        "The What’s Kraken web app is a professional networking website geared towards college students. It was developed with simplicity in mind, allowing users to register an account, build a profile, and share their profile with other users. As the Project Manager and Tech Lead for this project, I was primarily responsible for architecting and implementing the application backend, as well as helping keep the teams objectives aligned by helping to define our project plan and the scope/details of iterations.|On the backend, the Python Flask web framework was used to construct our API. This API communicates directly with a MongoDB instance that is responsible for securely stores user credentials and profile information. Flask includes a suite of methods for handling requests, session variables, login management (via flask_login methods), and template rendering, all of which are utilized by this web app. Jinja2 (a web templating language) was used to create HTML, XML and other markup formats that are returned to the user via HTTP requests. Finally, AWS S3 is used for storing user images, which are retrieved using the Boto3 Python library. |On the frontend, a mix of HTML, CSS, Bootstrap, vanilla client-side JavaScript, JQuery, and AJAX techniques are utilized. JQuery was utilized in conjunction with AJAX to dynamically render newly edited information on a user’s portfolio, as well as display the different profile pages.",
         "https://www.youtube.com/embed/9h3r2CH9Ezc"],
        "datatrack": ["DataTrack", 
        "DataTrack is a simple one-stop solution for logging and vizualizing simple data metrics over time from your mobile device. It gives you the ability to name and maintain multiple plots for various datasets, as well as register an account using Google OAuth so that you can update your charts as new data is acquired. Chart options include a line plot, bar graph, and pie chart. Simple statistics are computed on the provided data, assuming the dataset uses integer input values. | This application served as an introductory project for teaching myself React Native. The stack it utilizes includes Node.js, MongoDB, and Redux for state management. In future iterations of this project, I'd like to extend the feature set to include more plot types (e.g. histograms and scatterplots) and additional descriptive statics (e.g. standard deviation, variance, Least Squares Regression Line).", 
        "https://www.youtube.com/embed/VsvZPU6syJo"]
    }

    const {match : {params}} = props; // react-router-dom automatically passes us the url parameter

    const key = params.projectName;
    const proj_details = projects[key]
    const title = proj_details[0], 
        desc = proj_details[1].split("|"),
        video_link = proj_details[2];

    return(

        <div>
            <h1>{title}</h1>
            <hr style={{width:"75%"}}></hr>
            <article style={{marginLeft:"auto", marginRight:"auto", width:"75%", textAlign:"left"}}>
                {desc.map((elem, i) => 
                { return(<p key={i}>{elem}</p>) }
                ) }
                <br /> 
                <h2>Demo:</h2>
                <div className="video-container">
                    <iframe width="420" height="315" title={title} src={video_link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </article>
        </div>
    )
    
}

export default ProjectDisplay;