import React from "react"

export default function Footer() {
    return(
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/1adammuhammad/">
                            <img
                                className="main-footer__icon"
                                src="../../src/assets/img/linkedin-ico.png"
                                alt="icon"
                            />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/adammmmd">
                            <img
                                className="main-footer__icon"
                                src="../../src/assets/img/github-ico.png"
                                alt="icon"
                            />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dam._.muh/">
                            <img
                                className="main-footer__icon main-footer__icon--mr-none"
                                src="../../src/assets/img/insta-ico.png"
                                alt="icon"
                            />
                            </a>
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">Adam Muhammad</h4>
                        <p className="main-footer__short-desc">
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}