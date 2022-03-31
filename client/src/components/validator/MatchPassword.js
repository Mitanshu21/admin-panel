export const MatchPassword = (
  name,
  value,
  password,
  confirmPassword,
  error
) => {
  const err = { ...error };

  if (name === "password") {
    if (value.length < 8 || value.length > 16)
      err.password = "password should between 8 to 16 character long.";
    else {
      if (value !== confirmPassword) {
        err.confirmPassword = "Password should match";
        delete err.password;
      } else {
        delete err.password;
        delete err.confirmPassword;
      }
    }
  } else if (name === "confirmPassword") {
    if (value !== password) err.confirmPassword = "Password should match";
    else {
      delete err.password;
      delete err.confirmPassword;
    }
  }

  console.log("last", err);
  return err;
};
