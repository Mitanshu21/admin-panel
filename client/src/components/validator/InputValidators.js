export const checkError = (name, value, error) => {
  const err = { ...error };

  if (name === "firstname")
    if (value.length < 3)
      err.firstname = "firstname should atleast 3 character long!";
    else delete err.firstname;

  if (name === "lastname")
    if (value.length < 3)
      err.lastname = "lastname should atleast 3 character long!";
    else delete err.lastname;

  if (name === "email")
    if (
      value.length === 0 ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    )
      err.email = "email is Invalid";
    else delete err.email;

  if (name === "password")
    if (value.length < 8 || value.length > 16)
      err.password = "password should between 8 to 16 character long.";
    else {
      delete err.password;
    }

  // if (name === "confirmPassword")
  //   if (value.length < 8 || value.length > 16)
  //     err.confirmPassword = "Password should between 8 to 16 character long.";
  //   else {
  //     delete err.confirmPassword;
  //   }

  if (name === "gender")
    if (value.length === 0) err.gender = "Please select your gender.";
    else delete err.gender;

  if (name === "mobileno")
    if (value.length === 0) err.mobileno = "please enter your mobile number.";
    else if (value.length !== 10)
      err.mobileno = "Mobile no should have 10 numbers.";
    else delete err.mobileno;

  if (name === "institute")
    if (value.length < 3) err.institute = "please enter institute name";
    else delete err.institute;

  if (name === "course")
    if (value.length === 0) err.course = "please enter course name";
    else delete err.course;

  if (name === "percentage")
    if (value.length === 0) err.percentage = "please enter percentage";
    else if (value < 0 || value > 100)
      err.percentage = "percentage should be between 0 to 100";
    else delete err.percentage;

  if (name === "startDate")
    if (value.length === 0) err.startDate = "please enter start date";
    else delete err.startDate;

  if (name === "endDate")
    if (value.length === 0) err.endDate = "please enter end date";
    else delete err.endDate;

  console.log("last", err);
  return err;
};
