import { useState } from "react";
import "./AboutSection.css";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";

export default function AboutSection() {
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div className="main-content">
            <Navbar setActiveSection={setActiveSection} />
            {activeSection === "about" && <About />}
            {activeSection === "resume" && <Resume />}
            {activeSection === "contact" && <ContactSection />}
            {activeSection === "projects" && <ProjectsSection />}
        </div>
    );
}
