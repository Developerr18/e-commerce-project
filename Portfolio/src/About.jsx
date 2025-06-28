import webDevIcon from "./assets/images/icon-dev.svg";
import webDesignIcon from "./assets/images/icon-design.svg";
import "./About.css";

export default function About() {
    return (
        <>
            <div className="about">
                <h1>About Me</h1>
                <div className="yellow-line"></div>
                <p>
                    I'm a passionate Front-End Web Developer from India,
                    self-taught and dedicated to building responsive,
                    user-friendly, and accessible websites. As a fresher, I
                    bring a solid foundation in HTML, CSS, JavaScript, and React
                    — along with working knowledge of backend technologies like
                    Node.js, Express, and MongoDB. I enjoy turning ideas into
                    interactive web experiences and strive to write clean,
                    efficient code that solves real-world problems.
                </p>
                <p>
                    I enjoy turning ideas into interactive interfaces that not
                    only look good but work smoothly across devices. Whether
                    it's creating reusable components, writing clean logic, or
                    making layouts responsive — I believe in crafting websites
                    that are simple, intuitive, and accessible.
                </p>
            </div>

            <section class="service">
                <h2 class="h2 service-title">What I'm doing</h2>

                <ul class="service-list">
                    <li class="service-item">
                        <div class="service-icon-box">
                            <img
                                src={webDevIcon}
                                alt="Web development icon"
                                width="40"
                            />
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">
                                Frontend Development
                            </h4>
                            <p class="service-item-text">
                                I build responsive, user-friendly websites using
                                HTML, CSS, and JavaScript, and currently
                                learning React to create modern web
                                applications.
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box">
                            <img
                                src={webDesignIcon}
                                alt="Design icon"
                                width="40"
                            />
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">
                                UI Design Practice
                            </h4>
                            <p class="service-item-text">
                                I focus on simple and clean designs, learning to
                                turn ideas into visually appealing user
                                interfaces.
                            </p>
                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-icon-box icon">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">
                                Continuous Learning
                            </h4>
                            <p class="service-item-text">
                                I spend time daily improving my skills by
                                building projects and learning modern
                                technologies like MERN stack.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}
