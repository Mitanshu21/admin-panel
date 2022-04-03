import React, { useState } from "react";
import { checkError } from "../../validator/InputValidators";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../UI/InputField";
import ButtonT from "../../UI/ButtonT";

function Login({ setLoggedUser }) {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
    setTimeout(() => {
      const err = checkError(e.target.name, e.target.value, error);
      setError({ ...err });
    }, 1500);
  };
  console.log(formInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.emailerror) {
          alert(result.emailerror);
          setError({
            password: "Email or Password Invalid.",
          });
          setFormInput({
            ...formInput,
            password: "",
          });
        } else if (result.error) {
          alert(result.error);
        } else if (result) {
          localStorage.setItem("user", JSON.stringify(result));
          setLoggedUser(result);
          alert("Login successfull");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="w-2/5 bg-white rounded shadow-md p-8 m-4">
        {/* erro bar
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">Email or Password invalid.</span>
        </div> */}

        <span className="block w-full text-xl text-center uppercase font-bold mb-4 ">
          Login
        </span>
        <form className="mb-4" onSubmit={handleSubmit}>
          <InputField
            parentclassname={"mb-6 md:w-full"}
            label={"email"}
            type={"email"}
            name={"email"}
            placeholder={"enter your email"}
            value={formInput.email}
            onchange={handleChange}
            error={error.email}
          />

          <InputField
            parentclassname={"mb-6 md:w-full"}
            label={"password"}
            type={"password"}
            name={"password"}
            placeholder={"enter your password"}
            value={formInput.password}
            onchange={handleChange}
            error={error.password}
          />

          <div className="text-center">
            <ButtonT
              type={"submit"}
              // color={Object.keys(error).length === 0 ? "green" : "slate"}
              color="bg-green-500"
              hovercolor="hover:bg-green-700"
            >
              Login
            </ButtonT>
          </div>
        </form>
        <p className="text-center text-sm pt-2">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-700">
            Create an account
          </Link>
        </p>
        <p className="text-center text-sm pt-1">
          <Link to="/login" className="text-blue-700 ">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
