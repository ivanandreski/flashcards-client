const registerValidator = (fullName, email, password, confirmPassword) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const messages = {};

  if (!fullName || fullName.trim().length == 0)
    messages.fullName = "The full name field is required!";

  if (!email || email.trim().length == 0)
    messages.email = "The email is invalid!";
  if (email?.match(emailRegex) == null)
    messages.email = "The email is invalid!";

  if (!password || password.trim().length == 0)
    messages.password = "The password field is required!";
  if (!confirmPassword || confirmPassword.trim().length == 0)
    messages.confirmPassword = "The confirm password field is required!";
  if (password && password.length < 8)
    messages.password = "The password must be at least 8 characters long!";
  if (password && confirmPassword && password != confirmPassword) {
    messages.password = "The passwords do not match!";
    messages.confirmPassword = "The passwords do not match!";
  }

  return messages;
};

export default registerValidator;
