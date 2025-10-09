import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Social() {
    return (
        <aside className="sidebar">
            <div className="social-links">
                <FaLinkedinIn className="icon-link" />
                <FaGithub className="icon-link" />
                <MdEmail className="icon-link" />
            </div>
        </aside>
    )
}