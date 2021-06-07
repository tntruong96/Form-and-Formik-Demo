import { useFormik } from "formik";
import React from "react";
import "./styles.css";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required!";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required!";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   return errors;
// };

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Formik Form</h2>
      <label className="label">
        First Name:
        <input
          className="form-field"
          id="firstName"
          name="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
          // onChange={formik.handleChange}
          // value={formik.values.firstName}
          // onBlur={formik.handleBlur}
        />
      </label>

      {formik.errors.firstName && formik.touched.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label className="label">
        Last Name:
        <input
          className="form-field"
          id="lastName"
          name="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.lastName}
        />
      </label>

      {formik.errors.lastName && formik.touched.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Formik;
