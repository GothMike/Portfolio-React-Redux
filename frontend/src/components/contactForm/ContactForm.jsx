import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="contacts__label" htmlFor={props.name}>
        {label}
      </label>
      <input className="contacts__input" {...props} {...field} />
      {meta.touched && meta.error ? <div className="contacts__error">{meta.error}</div> : null}
    </>
  );
};

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("http://localhost:3001/send-mail", {
        email: values.email,
        subject: values.company,
        text: values.text,
        name: values.name,
      });
      alert("Письмо отправлено!");
      resetForm();
    } catch (error) {
      alert("Произошла ошибка при отправке письма.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        text: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, "Минимум 2 символа!").required("Это поле обязательно!"),
        company: Yup.string().min(2, "Минимум 2 символа!").required("Это поле обязательно!"),
        email: Yup.string().email("Неправильный email адрес").required("Это поле обязательно!"),
        text: Yup.string().min(10, "Не менее 10 символов"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="contacts__form">
        <MyTextInput label="Ваше имя" id="name" name="name" type="text" />
        <MyTextInput label="Ваша компания" id="company" name="company" type="text" />
        <MyTextInput label="Ваша почта" id="email" name="email" type="email" />

        <label htmlFor="text">Ваше сообщение</label>
        <Field className="contacts__textarea" id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component={"div"} />
        <div className="contacts__btn">
          <Button variant="primary" type="submit">
            Связаться со мной
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
