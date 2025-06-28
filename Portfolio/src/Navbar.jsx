import "./Navbar.css";

export default function Navbar({ setActiveSection }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button
                        className="navbar-link"
                        onClick={() => setActiveSection("about")}
                    >
                        About
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className="navbar-link"
                        onClick={() => setActiveSection("resume")}
                    >
                        Resume
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className="navbar-link"
                        onClick={() => setActiveSection("projects")}
                    >
                        Projects
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className="navbar-link"
                        onClick={() => setActiveSection("contact")}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}
