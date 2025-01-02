import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Veuillez renseigner votre nom."),
    email: Yup.string()
      .email("Veuillez saisir une adresse email valide.")
      .required("L'email est obligatoire."),
    message: Yup.string().required("Le message est obligatoire."),
  });

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus("Envoi en cours...");

    emailjs
      .send(
        "service_7pv7bea",
        "template_767mxwm",
        {
          name: values.name,
          email: values.email,
          message: values.message,
          to_email: "Guillaume.chrpt@gmail.com",
        },
        "RLn49n7HQa-pYvxtf"
      )
      .then(() => {
        setStatus("Votre message a été envoyé avec succès !");
        resetForm();
      })
      .catch(() => {
        setStatus("Une erreur s'est produite. Veuillez réessayer.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Contactez-moi et évoluons ensemble</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
                className="form-control"
                aria-required="true"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse email"
                className="form-control"
                aria-required="true"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Votre message"
                className="form-control"
                aria-required="true"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
            {status && <div className="status-message">{status}</div>}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactSection;
