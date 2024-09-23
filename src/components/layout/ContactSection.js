import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs
      .send(
        "service_7pv7bea",
        "template_767mxwm",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "Guillaume.chrpt@gmail.com",
        },
        "RLn49n7HQa-pYvxtf"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Échec de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contactez-moi</h2>
      <p>Envie de collaborer ? Laissez-moi un message !</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
