import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import SignUp from "./SignUp";

const Form = () => {
  const [confirm, setConfirm] = useState(false);

  function confirmForm() {
    setConfirm(true);
  }

  //conditional rendering
  return (
    <div className="form-container">
      <a className="close-button" href="http://localhost:3000/">
        x
      </a>

      {!confirm ? <SignUp confirmForm={confirmForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
