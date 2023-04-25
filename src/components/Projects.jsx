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
                                src="../../src/assets/img/airbnb.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Airbnb Clone</h3>
                            <p className="projects__row-content-desc">
                                Learn recreating AirBnB User Interface.
                                Built with Vite, React JS, HTML, and CSS
                            </p>
                            <div className="project-details__links">
                                <a
                                    href="https://adammmmd.github.io/airbnb-clone/"
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                                <a
                                    href="https://github.com/adammmmd/airbnb-clone"
                                    className="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/tenzie.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Tenzie</h3>
                            <p className="projects__row-content-desc">
                                Tenzie game requires you to roll dice until all dice are the same.
                                Built with React JS, HTML, CSS.
                            </p>
                            <div className="project-details__links">
                                <a
                                    href="#"
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                                <a
                                    href="#"
                                    className="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/meme_picker.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Meme Picker</h3>
                            <p className="projects__row-content-desc">
                                Helps you to pick cat meme based on our database. 
                                Built with Vanilla Javascript, CSS, HTML
                            </p>
                            <div className="project-details__links">
                                <a
                                    href="https://adammmmd.github.io/meme-picker/"
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                                <a
                                    href="https://github.com/adammmmd/meme-picker"
                                    className="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/speed-typing.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Speed Typing</h3>
                            <p className="projects__row-content-desc">
                                Let's see how fast can you type in 5 second. 
                                Built with React JS, Vite, CSS, HTML
                            </p>
                            <div className="project-details__links">
                                <a
                                    href="https://adammmmd.github.io/speed-typing/"
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                                <a
                                    href="https://github.com/adammmmd/speed-typing"
                                    className="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src="../../src/assets/img/meme generator.png"
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Meme Generator</h3>
                            <p className="projects__row-content-desc">
                                Make your own customize meme with meme generator. 
                                Built with React JS, Vite, CSS, HTML
                            </p>
                            <div className="project-details__links">
                                <a
                                    href="https://adammmmd.github.io/meme-generator/"
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                                <a
                                    href="https://github.com/adammmmd/meme-generator"
                                    className="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}