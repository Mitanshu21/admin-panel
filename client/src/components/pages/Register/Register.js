import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterEducation from "./RegisterEducation";
import RegisterUser from "./RegisterUser";
import { checkError } from "../../validator/InputValidators";
import { MatchPassword } from "../../validator/MatchPassword";
import { checkDate } from "../../validator/CheckDate";
import ProgressBar from "./ProgressBar";
import ButtonT from "../../UI/ButtonT";

function Register() {
  const [step, setStep] = useState(1);
  const [userError, setUserError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileno: "",
    gender: "",
  });

  const [eduError, setEduError] = useState([
    {
      institute: "",
      percentage: "",
      course: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileno: "",
    gender: "",
    education: [
      {
        institute: "",
        percentage: "",
        course: "",
        startDate: "",
        endDate: "",
      },
    ],
  });
  // console.log(formValues);

  const handleChangeUser = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "confirmPassword" || e.target.name === "password") {
      const err = MatchPassword(
        e.target.name,
        e.target.value,
        formValues.password,
        formValues.confirmPassword,
        userError
      );

      setUserError({ ...err });
    } else {
      const err = checkError(e.target.name, e.target.value, userError);
      setUserError({ ...err });
    }
  };

  // * education input data changes
  const handleChangeEducation = (i, e) => {
    let newFormValues = [...formValues.education];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues({
      ...formValues,
      education: newFormValues,
    });

    if (e.target.name === "endDate" || e.target.name === "startDate") {
      const err = checkDate(
        e.target.name,
        e.target.value,
        formValues.education[i].startDate,
        formValues.education[i].endDate,
        eduError[i]
      );
      let newEduError = [...eduError];
      newEduError[i] = { ...err };
      setEduError([...newEduError]);
    } else {
      const err = checkError(e.target.name, e.target.value, eduError[i]);

      let updatedArr = [...eduError];
      updatedArr[i] = { ...err };
      setEduError([...updatedArr]);
    }

    // console.log(err);
  };

  // console.log("formvalues", formValues);
  // console.log("userError", userError);
  // console.log("eduError", eduError);
  // add new education in error also

  const addFormFields = () => {
    let newFormValues = [
      ...formValues.education,
      { institute: "", percentage: "", course: "", startDate: "", endDate: "" },
    ];
    setFormValues({
      ...formValues,
      education: newFormValues,
    });
    setEduError([
      ...eduError,
      { institute: "", percentage: "", course: "", startDate: "", endDate: "" },
    ]);
  };

  const removeFormFields = (i) => {
    if (formValues.education.length === 1) return;
    let newFormValues = [...formValues.education];
    newFormValues.splice(i, 1);
    setFormValues({ ...formValues, education: newFormValues });
    let newFormValues2 = [...eduError];
    newFormValues2.splice(i, 1);
    setEduError([...newFormValues2]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);

    fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ ...formValues }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.emailerror) {
          alert(result.emailerror);
          setUserError({ ...userError, email: "Email already exist." });
          setStep(1);
        } else if (result.error) {
          alert(result.error);
        } else if (result) {
          alert("Data saved successfully");

          setStep(1);
          setFormValues({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileno: "",
            gender: "",
            education: [
              {
                institute: "",
                percentage: "",
                course: "",
                startDate: "",
                endDate: "",
              },
            ],
          });
        }
      })
      .catch((err) => console.log(err));
  };

  // console.log(formValues.education);
  const educationForm = formValues.education.map((elem, index) => (
    <RegisterEducation
      key={index}
      formNumber={index}
      element={elem}
      handlechange={handleChangeEducation}
      error={eduError[index]}
      removeEducation={removeFormFields}
      totalForm={formValues.education.length}
    />
  ));

  return (
    <>
      <div className="w-full bg-grey-lightest ">
        <div className="container mx-auto py-8 ">
          <ProgressBar step={step} />
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-md">
            <div className="py-4 px-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <RegisterUser
                    formValue={formValues}
                    handlechange={handleChangeUser}
                    error={userError}
                  />
                )}
                {step === 2 && educationForm}
                {step === 2 &&
                  (formValues.education.length > 4 ? (
                    <p>Only 5 education details can be added.</p>
                  ) : (
                    <div className="flex mb-4 justify-center">
                      <ButtonT
                        onclick={() => addFormFields()}
                        color="bg-sky-500"
                        hovercolor="hover:bg-sky-700"
                        disabled={
                          !(
                            Object.keys(eduError[eduError.length - 1])
                              .length === 0
                          )
                        }
                        classname={
                          !(
                            Object.keys(eduError[eduError.length - 1])
                              .length === 0
                          ) && "cursor-not-allowed"
                        }
                      >
                        Add More Education
                      </ButtonT>
                    </div>
                  ))}

                <div
                  className={`pt-4 mb-4 flex ${
                    step === 1 ? "justify-center" : "justify-between"
                  }`}
                >
                  {step === 2 && (
                    <ButtonT
                      onclick={() => setStep(1)}
                      color="bg-teal-500"
                      hovercolor="hover:bg-teal-700"
                    >
                      previous
                    </ButtonT>
                  )}
                  {step === 1 && (
                    <ButtonT
                      onclick={() => setStep(2)}
                      color="bg-teal-500"
                      hovercolor="hover:bg-teal-700"
                      disabled={!(Object.keys(userError).length === 0)}
                      classname={
                        !(Object.keys(userError).length === 0) &&
                        "cursor-not-allowed"
                      }
                    >
                      Next
                    </ButtonT>
                  )}
                  {step === 2 && (
                    <ButtonT
                      type="submit"
                      color="bg-green-500"
                      hovercolor="hover:bg-green-700"
                      disabled={
                        !(
                          Object.keys(eduError[eduError.length - 1]).length ===
                          0
                        )
                      }
                      classname={
                        !(
                          Object.keys(eduError[eduError.length - 1]).length ===
                          0
                        ) && "cursor-not-allowed"
                      }
                    >
                      Submit
                    </ButtonT>
                  )}
                </div>
                {/* </form> */}
                <p className="text-center text-sm pt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-700">
                    Login here.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
