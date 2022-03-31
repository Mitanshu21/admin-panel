export const loginValidator = (email, password, error) => {
  const err = { ...error };

  if (
    (email && email.length === 0) ||
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  )
    err.email = "email is Invalid";
  else delete err.email;

  if (password && (password.length < 8 || password.length > 16))
    err.password = "password should between 8 to 16 character long.";
  else {
    delete err.password;
  }

  console.log("last", err);
  return err;
};
