
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function footer() {
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-col footer-col-info">
                    <h2 className="name footer-logo">
                        Domini<span className="accent-color">Acco</span>
                    </h2>
                    <p className="copyright">Copywriter 2025</p>
                </div>
                <div className="footer-col footer-col-center">
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>

                <div className="footer-col footer-col-contact">
                    <h4>Contato</h4>

                    <div className="contact-item">
                        <MdEmail className="contact-icon" />
                        <a href="mailto:dominiacco@gmail.com">dominiacco@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <FaGithub className="contact-icon" />
                        <a href="#">DominiAcco</a>
                    </div>

                    <div className="contact-item">
                        <FaLinkedinIn className="contact-icon" />
                        <a href="#">Domini Acco</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}