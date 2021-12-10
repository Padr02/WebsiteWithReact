export default function validate(values) {
  // använder values från useForm för errorhantering
  let error = {};
  if (!values.username.trim()) {
    error.username = "Username required";
  }

  if (!values.email) {
    error.email = "Email required";
    //regex för email test
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Enter a valid email";
  }

  if (!values.password) {
    error.password = "Password is required";
  } else if (values.password.length < 6) {
    error.password = "Password needs 6 or more characters";
  }

  if (!values.password2) {
    error.password2 = "Password is required";
  } else if (values.password !== values.password2) {
    error.password2 = "Password do not match";
  }

  return error;
}
