import React from "react";
import ReactDOM from "react-dom";
import Formik from "./Formik";
import HandyForm from "./HandyForm";
import MultipleControl from "./MultipleControl";
import NameForm from "./NameForm";
import AnotherFormik from "./AnotherFormik"
import ArrayFormik from "./ArrayFormik";

const App = () => {
  const id = "some-id";
  // const jsx = (
  //   <div>
  //     <h1 id={id}>This is a heading</h1>
  //     <h2 className="active">This is another heading</h2>
  //   </div>
  // );
  // console.log(jsx);
  // return jsx;
  return <div>
      {/* <NameForm/> */}
      {/* <HandyForm/> */}
      {/* <MultipleControl/> */}
      {/* <Formik/> */}
      <AnotherFormik/>

      <h2>Array and List</h2>
      <ArrayFormik/>
  </div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
