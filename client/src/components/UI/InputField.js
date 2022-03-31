import React from "react";

function InputField({
  parentclassname,
  label,
  type,
  name,
  placeholder,
  value,
  onchange,
  min,
  max,
  error,
}) {
  return (
    <>
      <div className={parentclassname}>
        <label className="block text-sm">{label}</label>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onFocus={onchange}
          onChange={onchange}
          className={`w-full border-2 ${
            error && "border-red-600"
          } rounded p-2 outline-none focus:shadow-outline`}
          min={min}
          max={max}
          // autoComplete="off"
          required
        />
        {error && <p className="text-sm text-red-600/100">{error}</p>}
      </div>
    </>
  );
}

InputField.defaultProps = {
  className: "",
};

export default InputField;
