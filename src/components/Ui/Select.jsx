import React from "react";

function Select({ options, value, onChange, name }) {
  return (
    <div>
      <select
        name={name}
        onChange={onChange}
        value={value}
        id=""
        placeholder="Select"
        className="w-full outline-0   border cursor-pointer text-sm p-1.5 rounded-md"
      >
        {options.map((item, index) => (
          <option value={item} className="" key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
