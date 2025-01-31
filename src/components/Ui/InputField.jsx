import React from "react";

function InputField(props) {
  const { name, type, value, onChange, disabled, ...rest } = props;

  return (
    <div>
      <input
        {...rest}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="border text-sm p-1.5 rounded-md outline-0 w-full focus:outline-red-600"
      />
    </div>
  );
}

export default InputField;
