import peopleTexting from "../images/illustarions/contact-illustration.png";
import phone from "../images/illustarions/phone.png";
import flyer from "../images/illustarions/flyer.png";
import mail from "../images/illustarions/mail.png";

function Contact() {
  return (
    <section className="contact">
      <h2>
        Contact Me <span id="contact"></span>
      </h2>
      <span className="underline"></span>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="section-image">
        <img src={peopleTexting} alt="poeple texting" />
        <img src={phone} alt="phone" />
        <img src={flyer} alt="flyer" />
        <img src={mail} alt="mail" />
      </div>
    </section>
  );
}

export default Contact;
