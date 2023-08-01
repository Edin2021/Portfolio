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
                edinsikira5@gmail.com
              </li>
              <li>
                <span className="visually-hidden">my phone number</span>
                0603294057
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/edin-sikira-3b2013217/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <span className="copyright">
                  <BiCopyright aria-hidden="true" /> Copyright{" "}
                  {new Date().getFullYear()}
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
