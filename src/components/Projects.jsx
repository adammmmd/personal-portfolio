import React from "react"

export default function Projects() {
    return(
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        All my projects include links to the code and live version. Click the button to learn more about each one.
                    </span>
                </h2>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/quiz.jpg"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Quiz App</h3>
                            <p className="projects__row-content-desc">
                                Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components. 
                            </p>
                            <a
                                href="./project-1.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                >Learn more</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/dashboard.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Personal Dashboard</h3>
                            <p className="projects__row-content-desc">
                                A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS.
                            </p>
                            <a
                                href="./project-2.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                >Learn more</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/password.jpg"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Password Generator</h3>
                            <p className="projects__row-content-desc">
                                An app that generates random passwords based on a few user inputs, 
                                e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.
                            </p>
                            <a
                                href="./project-3.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                >Learn more</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}