import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { AiOutlineMessage } from "react-icons/ai";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1od0v3l",
        "template_yi56x28",
        form.current,
        "sFcgMAbWiZPsmKL7u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <h1>Contact Me</h1>
        <p>Get in touch</p>
      </div>
      <div className="contact__container">
        <div className="contact__content">
          <h3>Talk to me</h3>

          <div className="contact__info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3>E-mail</h3>
              <span>user@gmail.com</span>
              <a href="">
                Write me<i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3>TeL</h3>
              <span>0863699914</span>
              <a href="">
                Write me<i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3>Messenger</h3>
              <span>user.fb.123</span>
              <a href="">
                Write me<i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3>Write me your projects</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name: </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email: </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Project: </label>
              <input
                type="text"
                name="project"
                className="contact__form-input"
                placeholder="Insert your Project"
              />
            </div>
          </form>
          <div className="btn">
            <button className="button" onClick={sendEmail}>
              Send Message
              <AiOutlineMessage />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
