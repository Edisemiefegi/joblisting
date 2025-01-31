import React from "react";
import InputField from "./InputField";
import Select from "./Select";

function FieldsInput({ fields, onChange, formData }) {
  return (
    <div>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            {field.label}
          </label>
          {field.fieldType == "input" && (
            <InputField
              {...field.props}
              value={formData[field.name]}
              onChange={onChange}
              placeholder={field?.placeholder}
              name={field.name}
            />
          )}

          {field.fieldType === "select" && (
            <>
              <Select
                {...field.props}
                name={field.name}
                options={field.options}
                value={formData[field.name]} // Dynamically bind value
                onChange={onChange}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default FieldsInput;
