import { FieldArray, Form, Formik } from "formik";
import React from "react";

const ArrayFormik = () => {
  const initialValues = {
    friend: [
      {
        name: "",
        email: ""
      }
    ]
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => <Form>
        <FieldArray name="friend">

        </FieldArray>
      </Form>}
    </Formik>
  );
};

export default ArrayFormik;
