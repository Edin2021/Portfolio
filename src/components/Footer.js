import footerImage from "../images/hero-image.png";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <span className="underline"></span>
        <div>
          <article className="contact-info">
            <h2>Contact Info</h2>
            <span id="contact"></span>
            <ul>
              <li>
                <span className="visually-hidden">my email</span>
                <FiMail aria-hidden="true" /> edinsikira5@gmail.com
              </li>
              <li>
                <span className="visually-hidden">my phone number</span>
                <FiPhone aria-hidden="true" /> 0603294057
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/edin-sikira-3b2013217/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin aria-hidden="true" /> Linkedin
                </a>
              </li>
            </ul>
          </article>
        </div>
        <span className="copyright">
          <BiCopyright aria-hidden="true" /> Copyright{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
