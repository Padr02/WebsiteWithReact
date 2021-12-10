import { useEffect, useState } from "react";

//custom hook med tomma key-pair values

const useForm = (validate, confirmForm) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleChange = (e) => {
    //setValues för sparande i values
    //target går name i input taggen som finns i SignUp

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //hanterar sign-up up knapptryckningen
  const handleSubmit = (e) => {
    e.preventDefault(); //förhindrar från att refresha sidan
    setError(validate(values)); // använder rätt error från validateForm funktionen beroende på sitaionen från values
    setConfirm(true);
  };

  useEffect(() => {
    console.log(error);
    //om inga errors och confirm boolean är sann då rendera
    //sparar samtidigt i localstorage
    if (Object.keys(error).length === 0 && confirm) {
      confirmForm(); // callback
      localStorage.setItem("user", values.username);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      console.log(values, "user");
    }
  }, [error]);
  return { handleChange, values, handleSubmit, error };
};

export default useForm;
