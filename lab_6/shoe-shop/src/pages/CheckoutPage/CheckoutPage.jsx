import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

// Yup валідація
const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "First name must be 15 characters or less")
    .matches(/^[A-Za-z]+$/, "First name can contain only letters")
    .required("First name is required"),
  lastName: Yup.string()
    .max(20, "Last name must be 20 characters or less")
    .matches(/^[A-Za-z]+$/, "Last name can contain only letters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,14}$/, "Phone number must contain only 10-14 digits")
    .required("Phone number is required"),
  address: Yup.string()
    .max(100, "Address must be 100 characters or less")
    .required("Address is required"),
});

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={CheckoutSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
          navigate("/success");
        }}
      >
        {({ errors, touched }) => (
          <Form className="checkout-form">
            <div className="form-group">
              <label>First Name</label>
              <Field name="firstName" placeholder="John" />
              {errors.firstName && touched.firstName && (
                <ErrorMessage message={errors.firstName} />
              )}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <Field name="lastName" placeholder="Doe" />
              {errors.lastName && touched.lastName && (
                <ErrorMessage message={errors.lastName} />
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field name="email" type="email" placeholder="john@example.com" />
              {errors.email && touched.email && (
                <ErrorMessage message={errors.email} />
              )}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <Field name="phone" placeholder="380501234567" />
              {errors.phone && touched.phone && (
                <ErrorMessage message={errors.phone} />
              )}
            </div>

            <div className="form-group">
              <label>Address</label>
              <Field name="address" placeholder="123 Main St" />
              {errors.address && touched.address && (
                <ErrorMessage message={errors.address} />
              )}
            </div>

            <button type="submit">Place Order</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutPage;
