import peopleTexting from "../images/illustarions/contact-illustration.png";
import phone from "../images/illustarions/phone.png";
import flyer from "../images/illustarions/flyer.png";
import mail from "../images/illustarions/mail.png";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (data) => {
    const { name, email, message } = data;
    setIsSending(true);
    setIsSent(false);
    emailjs
      .send(
        "service_k9setnl",
        "template_35kgb5d",
        {
          from_name: name,
          to_name: "Edin",
          name,
          email,
          message,
          reply_to: email,
        },
        "user_i80WqMPoXDTeXiRtMjwPI"
      )
      .then((res) => {
        if (res.status === 200 && res.text === "OK") {
          setIsSending(false);
          setIsSent(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  };

  useEffect(() => {
    if (isSent) {
      reset({ name: "", email: "", message: "" });
    }
  }, [isSent]);

  useEffect(() => {
    console.log("input");
  }, [register("name")]);

  return (
    <section className="contact">
      <h2>
        Contact Me <span id="contact"></span>
      </h2>
      <span className="underline"></span>
      <form
        onClick={() => {
          if (!isSending && isSent) {
            setIsSent(false);
          }
        }}
        onSubmit={handleSubmit(onSubmit)}
        className={`contact-form ${isSending && "disable"}`}
        noValidate
      >
        <label htmlFor="name" className={`${errors.name && "active"}`}>
          Name
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
            disabled={isSending}
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
            disabled={isSending}
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
            {...register("message")}
            disabled={isSending}
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={isSending}
          className={`${isSent ? "success" : ""}`}
        >
          {isSending && "Sending..."}
          {isSent && "Sent"}
          {!isSending && !isSent && "Send"}
        </button>
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
