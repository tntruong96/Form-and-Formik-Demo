import { Field, Form, Formik, useFormik } from "formik";
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

const AnotherFormik = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    checked: [],
    radio: ""
  };
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: ""
  //   },
  //   // validate,
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     lastName: Yup.string()
  //       .max(20, "Must be 20 characters or less")
  //       .required("Required")
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2>Formik Form</h2>
            <div>
              <label className="label">First Name:</label>
              <Field id="firstName" name="firstName" />
            </div>
            <div>
              <label className="label">Last Name:</label>
              <Field id="lastName" name="lastName" />
            </div>
            <div>
              <div className="label" id="checkbox-group">
                Checked
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field
                    type="checkbox"
                    id="checked"
                    name="checked"
                    value="one"
                  />
                  One
                </label>
                <label>
                  <Field
                    type="checkbox"
                    id="checked"
                    name="checked"
                    value="two"
                  />
                  Two
                </label>
                <label>
                  <Field
                    type="checkbox"
                    id="checked"
                    name="checked"
                    value="three"
                  />
                  Three
                </label>
              </div>
              <div>
                <label>
                  <Field type="radio" id="radio" name="radio" value="apple" />
                  Apple
                </label>
                <label>
                  <Field type="radio" id="radio" name="radio" value="Orange" />
                  Orange
                </label>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}

        {/* <form className="form" onSubmit={formik.handleSubmit}>
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
        </form> */}
      </Formik>
    </div>
  );
};

export default AnotherFormik;
