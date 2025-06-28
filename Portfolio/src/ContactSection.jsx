import "./ContactSection.css";

export default function ContactSection() {
    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Me</h2>

            <form
                className="contact-form"
                action="https://formspree.io/f/your_form_id"
                method="POST"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
