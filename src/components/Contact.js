import peopleTexting from "../images/illustarions/contact-illustration.png";
import phone from "../images/illustarions/phone.png";
import flyer from "../images/illustarions/flyer.png";
import mail from "../images/illustarions/mail.png";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="contact">
      <h2>
        Contact Me <span id="contact"></span>
      </h2>
      <span className="underline"></span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
        action="https://formsubmit.co/edinsikira5@gmail.com"
        method="POST"
      >
        <label htmlFor="name" className={`${errors.name && "active"}`}>
          Name
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
          />
          <div className="error-message">
            Name is required.
            <span></span>
          </div>
        </label>
        <label htmlFor="email" className={`${errors.email && "active"}`}>
          Email
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
          />
          <div className={`error-message ${errors.email && "active"}`}>
            {errors.email?.type === "required"
              ? "Email is required."
              : "Invaild email."}
            <span></span>
          </div>
        </label>
        <label htmlFor="message">
          Message
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="optional"
          ></textarea>
        </label>
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
