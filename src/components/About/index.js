import React from "react";

//Return About HTML 
function About() {
    return(
        <section className="container">
            <h2 class="top-title">Benjamin Smyth</h2>
            <hr></hr>
            <div>
                <img 
                class="mb-5" 
                id="BJJ" 
                src="../../assets/Ben_Podium_Solo.jpg" 
                alt="Ben on BJJ Podium" 
                />

                <p>
                    Full MERN Stack Developer student with Michigan State University.
                </p>
                <p>
                    I'm a well rounded, ambitious, and curious Full MERN Stack developer student looking for a role
                    as junior level developer. I would love an opportunity to work with a strong team oriented company
                    working with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I am a confident, naturally curious, hard working, and goal oriented while improving my skills in 
                    technology and Brasilian Jiu Jitsu. If I were to define myself in one sentence I would say, "I am 
                    family oriented, loyal, loving, father of 3 wonderful kids '(2 boys and 1 girl)', adventurous individual."
                </p>
            </div>
        </section>
    )
}

export default About;