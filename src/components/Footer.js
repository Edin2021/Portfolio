import footerImage from "../images/footer-image.png";
import { FiMail, FiPhone } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
import Nav from "./Nav.js";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <span className="underline"></span>
        <div>
          <article className="contact-info">
            <h2>Contact Info</h2>
            <ul>
              <li>
                <span className="visually-hidden">my email</span>
                <FiMail aria-hidden="true" /> edinsikira5@gmail.com
              </li>
              <li>
                <span className="visually-hidden">my phone number</span>
                <FiPhone aria-hidden="true" /> 0603294057
              </li>
            </ul>
          </article>
          <Nav />
        </div>
      </div>
      <span className="copyright">
        <BiCopyright aria-hidden="true" /> Copyright 2021
      </span>
      <img src={footerImage} alt="footer wave" />
    </footer>
  );
}

export default Footer;
