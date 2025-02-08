import React from "react";
import FieldsInput from "@/components/Ui/FieldsInput";

function Form({
  className,
  onChange,
  formData,
  fields,
  onSubmit,
  loading,
  text,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`max-w-md mx-auto  shadow-md my-12 p-8 rounded-md ${className}`}
    >
      <p className="text-center font-medium text-lg">{text}</p>

      <FieldsInput fields={fields} onChange={onChange} formData={formData} />

      <button
        disabled={loading}
        type="submit"
        className="text-sm bg-red-600 px-3 py-1 rounded-sm cursor-pointer text-white"
      >
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
