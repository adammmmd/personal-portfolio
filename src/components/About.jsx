import React from "react"

export default function About() {
    return(
        <section id="about" className="about sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main">About Me</span>
                    <span className="heading-sec__sub">
                        <p>I'm a frontend developer based out of Jakarta, Indonesia. I love building apps that solve real-world problems, and that are delightful to use. My specialities include React JS, Styled Components, and Golang.
                        </p>
                    </span>
                </h2>
                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">Get to know me!</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">
                                My background is in Civil Engineering. I have a bachelors degree in Building Construction Education from State University of Jakarta (UNJ). When I'm not coding, I read books.
                            </p>
                        </div>
                        <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
                    </div>
                    <div className="about__content-skills">
                        <h3 className="about__content-title">My Skills</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">Git</div>
                            <div className="skills__skill">Figma</div>
                            <div className="skills__skill">Golang</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}