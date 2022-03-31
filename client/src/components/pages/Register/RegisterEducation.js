import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import InputField from "../../UI/InputField";

function RegisterEducation({
  formNumber,
  element,
  handlechange,
  error,
  removeEducation,
  totalForm,
}) {
  return (
    <>
      {/* <p>{formNumber}</p> */}
      {totalForm > 1 && (
        <div className="float-right">
          <MdDeleteOutline
            color="red"
            size={22}
            onClick={() => removeEducation(formNumber)}
          />
        </div>
      )}

      <InputField
        parentclassname={"mb-4"}
        label={"Institute/School"}
        type={"text"}
        name={"institute"}
        placeholder={"enter your institute"}
        value={element.institute}
        onchange={(e) => handlechange(formNumber, e)}
        error={error.institute}
      />

      <div className="flex mb-4">
        <InputField
          parentclassname={"w-1/2 mr-2"}
          label={"Percentage/CGPA"}
          type={"number"}
          name={"percentage"}
          min="0"
          max="100"
          placeholder={"enter your percentage/cgpa"}
          value={element.percentage}
          onchange={(e) => handlechange(formNumber, e)}
          error={error.percentage}
        />

        <InputField
          parentclassname={"w-1/2 ml-2"}
          label={"Stream"}
          type={"text"}
          name={"course"}
          placeholder={"enter your course/stream"}
          value={element.course}
          onchange={(e) => handlechange(formNumber, e)}
          error={error.course}
        />
      </div>

      <div className="flex mb-4">
        <InputField
          parentclassname={"w-1/2 mr-2"}
          label={"Start date"}
          type={"date"}
          name={"startDate"}
          placeholder={"enter your start date"}
          value={element.startDate}
          onchange={(e) => handlechange(formNumber, e)}
          error={error.startDate}
        />

        <InputField
          parentclassname={"w-1/2 ml-2"}
          label={"End date"}
          type={"date"}
          name={"endDate"}
          placeholder={"enter your end date"}
          value={element.endDate}
          onchange={(e) => handlechange(formNumber, e)}
          error={error.endDate}
        />
      </div>
      <hr className="pb-12" />
    </>
  );
}

export default RegisterEducation;
