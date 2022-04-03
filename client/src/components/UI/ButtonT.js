import React from "react";

function ButtonT({
  type,
  color,
  hovercolor,
  onclick,
  disabled,
  classname,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`${color} ${hovercolor} text-white uppercase text-sm font-semibold px-4 py-2 rounded ${classname}`}
      // style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {rest.children}
    </button>
  );
}

ButtonT.defaultProps = {
  className: "",
  type: "button",
};

export default ButtonT;
