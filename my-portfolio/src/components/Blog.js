import React from 'react';

const Blog = () => {

    return (
        <div>
            <h1>What's New?</h1>
            <hr style={{width:"75%"}}></hr>
            <article>
                <p style={{marginLeft:"auto", marginRight:"auto", width:"75%", textAlign:"left"}}>
                    Here is where I'll give my latest software-related updates, including things
                    I've recently learned, seen, or used. Eventually, I'd like to make 
                    this editable from the client-side, so that I can blog on the go... More soon to come!
                </p>
            </article>
        </div>
    )
}

export default Blog;