import { useNavigate } from "react-router-dom";
import { addJob } from "../service/jobs";
import Form from "../components/Ui/Form";

import React, { useEffect, useState } from "react";

function AddJobs() {
  const navigate = useNavigate();

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await addJob(formData);
      console.log(formData, "formdatat");
      alert("job successfully added ");
      navigate("/jobs");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      loading={loading}
      text="Add Job"
      fields={fields}
      formData={formData}
    />
  );
}

export default AddJobs;
