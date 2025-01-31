import FieldsInput from "../components/Ui/FieldsInput";
import { addJob } from "../service/jobs";

import React, { useEffect, useState } from "react";

function AddJobs() {
  const [formData, setFormData] = useState({
    type: "",
    jobName: "",
    jobDescription: "",
    salary: "",
    location: "",
    company: "",
    companyDescription: "",
    email: "",
    phone: "",
  });

  const fields = [
    {
      name: "type",
      type: "select",
      fieldType: "select",
      label: "Job Type",
      options: ["Job-type", "Full Time", "Part Time", "Contract"], // Options for the select dropdown
    },
    {
      name: "jobName",
      fieldType: "input",
      props: {
        type: "text",
        required: true,
      },
      label: "Job Name",
      placeholder: "Enter job name...",
    },
    {
      name: "jobDescription",
      fieldType: "input",
      props: {
        type: "text",
        required: true,
      },
      label: "Job Description",
      placeholder: "Enter job description...",
    },
    {
      name: "salary",
      fieldType: "select",
      label: "Salary",
      options: [
        "salary",
        "free",
        "10-100$",
        "110-200$",
        "210-500$",
        "above 500$",
      ], // Options for the select dropdown
    },
    {
      name: "location",
      fieldType: "input",
      props: {
        type: "text",
        required: true,
      },
      label: "Location",
      placeholder: "Enter job Location...",
    },
    {
      name: "company",
      fieldType: "input",
      props: {
        type: "text",
        required: true,
      },
      type: "text",
      label: "Company Name",
      placeholder: "Enter name...",
    },
    {
      name: "companyDescription",
      fieldType: "input",
      props: {
        type: "text",
        required: true,
      },
      label: "Company description",
      placeholder: "Enter company description ...",
    },
    {
      name: "email",
      fieldType: "input",
      props: {
        type: "email",
        inputmode: "email",
        required: true,
      },
      placeholder: "Enter company email...",
      label: "Email",
    },
    {
      name: "phone",
      fieldType: "input",
      props: {
        type: "number",
        required: false,
      },
      label: "Contect Phone",
      placeholder: "optional...",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addJob(formData);
    console.log(formData, "formdatat");

    setFormData({});
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-md mx-auto shadow-md my-12 p-8 rounded-md"
    >
      <p className="text-center font-medium text-lg">Add Job</p>

      <FieldsInput
        fields={fields}
        onChange={handleChange}
        formData={formData}
      />

      <button
        type="submit"
        className="text-sm bg-red-600 px-3 py-1 rounded-sm cursor-pointer text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default AddJobs;
