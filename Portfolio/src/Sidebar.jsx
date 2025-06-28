import myAvatar from "./assets/images/anime-avatar.jpg";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="bio-section">
                <img src={myAvatar} alt="my-avatar image" />
                <div className="bio-details">
                    <p className="my-name">Dinesh nikum</p>
                    <button>Web developer</button>
                </div>
            </div>

            <div className="separator"></div>

            <div className="contact-info-section">
                <div className="contact-info-list">
                    <div className="email-icon icon">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div className="contact-info-details">
                        <div className="info-name">EMAIL</div>
                        <div className="info-value">dineshnikum1@gmail.com</div>
                    </div>
                </div>

                <div className="contact-info-list">
                    <div className="phone-icon icon">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div className="contact-info-details">
                        <div className="info-name">PHONE</div>
                        <div className="info-value">+91 757222298</div>
                    </div>
                </div>

                <div className="contact-info-list">
                    <div className="calender-icon icon">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div className="contact-info-details">
                        <div className="info-name">BIRTHDAY</div>
                        <div className="info-value">November 19, 1999</div>
                    </div>
                </div>

                <div className="contact-info-list">
                    <div className="location-icon icon">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div className="contact-info-details">
                        <div className="info-name">LOCATION</div>
                        <div className="info-value">Ahmedabad, India</div>
                    </div>
                </div>
            </div>

            <div className="social-networks">
                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
