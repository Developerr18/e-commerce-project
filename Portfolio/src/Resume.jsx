import "./Resume.css";

export default function Resume() {
    return (
        <section className="resume-section" id="resume">
            <h1 className="section-title">Resume</h1>
            <div className="yellow-line"></div>

            <div className="resume-container">
                <div className="resume-block">
                    <h3 className="resume-heading">Experience</h3>
                    <div className="resume-item">
                        <h4 className="resume-title">Frontend Developer</h4>
                        <p className="resume-company">
                            Freelance / Personal Projects
                        </p>
                        <span className="resume-date">Jan 2024 - Present</span>
                        <p className="resume-desc">
                            Built responsive websites using HTML, CSS,
                            JavaScript. Practiced React by building dynamic user
                            interfaces. Collaborated with clients to deliver
                            clean UI/UX designs.
                        </p>
                    </div>
                </div>

                <div className="resume-block">
                    <h3 className="resume-heading">Education</h3>
                    <div className="resume-item">
                        <h4 className="resume-title">
                            B.Tech (Computer science)
                        </h4>
                        <p className="resume-company">
                            Silver oak engineering and technology
                        </p>
                        <span className="resume-date">2018 - 2020</span>
                        <p className="resume-desc">
                            Studied fundamentals of computer science, logical
                            thinking, and problem solving.
                        </p>
                    </div>
                </div>

                <div className="resume-block">
                    <h3 className="resume-heading">Skills</h3>
                    <ul className="resume-skills">
                        <li>HTML5 / CSS3 / JavaScript</li>
                        <li>React.js / Git & GitHub</li>
                        <li>Responsive Web Design</li>
                        <li>Basic Node.js & Express</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
