import AboutSection from "./AboutSection";
import "./App.css";
import Sidebar from "./Sidebar";

export default function App() {
    return (
        <div className="portfolio-container">
            <Sidebar />
            <AboutSection />
        </div>
    );
}
