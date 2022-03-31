import React from "react";
import InputField from "../../UI/InputField";

function RegisterUser({ formValue, handlechange, error }) {
  return (
    <>
      <div className="flex mb-4">
        <InputField
          parentclassname={"w-1/2 mr-2"}
          label={"First Name"}
          type={"text"}
          name={"firstname"}
          placeholder={"enter your First Name"}
          value={formValue.firstname}
          onchange={(e) => handlechange(e)}
          error={error.firstname}
        />

        <InputField
          parentclassname={"w-1/2 ml-2"}
          label={"Last Name"}
          type={"text"}
          name={"lastname"}
          placeholder={"enter your Last Name"}
          value={formValue.lastname}
          onchange={(e) => handlechange(e)}
          error={error.lastname}
        />
      </div>

      <InputField
        parentclassname={"mb-4"}
        label={"Email Address"}
        type={"email"}
        name={"email"}
        placeholder={"enter your Email Address"}
        value={formValue.email}
        onchange={(e) => handlechange(e)}
        error={error.email}
      />

      <div className="flex mb-4">
        <InputField
          parentclassname={"w-1/2 mr-2"}
          label={"Password"}
          type={"password"}
          name={"password"}
          placeholder={"enter your password"}
          value={formValue.password}
          onchange={(e) => handlechange(e)}
          error={error.password}
        />

        <InputField
          parentclassname={"w-1/2 ml-2"}
          label={"Confirm Password"}
          type={"password"}
          name={"confirmPassword"}
          placeholder={"repeat password"}
          value={formValue.confirmPassword}
          onchange={(e) => handlechange(e)}
          error={error.confirmPassword}
        />
      </div>

      <InputField
        parentclassname={"mb-4"}
        label={"Mobile no."}
        type={"number"}
        name={"mobileno"}
        placeholder={"enter your Mobile no."}
        value={formValue.mobileno}
        onchange={(e) => handlechange(e)}
        error={error.mobileno}
      />

      <div className="mb-4">
        <label className="block text-sm">Gender</label>
        <select
          className="appearance-none border bg-white rounded w-full py-2 px-3 text-grey-darker"
          name="gender"
          value={formValue.gender}
          onChange={(e) => handlechange(e)}
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        {error.gender && (
          <p className="text-sm text-red-600/100">{error.gender}</p>
        )}
      </div>
    </>
  );
}

export default RegisterUser;
