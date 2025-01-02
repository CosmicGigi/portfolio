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
    name: Yup.string().required("Le nom est obligatoire."),
    email: Yup.string()
      .email("Adresse email invalide.")
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
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          resetForm();
        },
        () => {
          setStatus("Échec de l'envoi. Veuillez réessayer.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contactez-moi et évoluons ensemble</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder=""
                className="form-control"
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
                placeholder=""
                className="form-control"
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
                placeholder=""
                className="form-control"
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
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactSection;
