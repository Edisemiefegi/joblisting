import Form from "@/components/Ui/Form";
import { NavLink, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { register } from "@/service/jobs";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const fields = [
    {
      name: "email",
      fieldType: "input",
      props: {
        type: "email",
        inputMode: "email",
        required: true,
      },
      placeholder: "Enter email...",
      label: "Email",
    },
    {
      name: "password",
      fieldType: "input",
      props: {
        type: "password",
        required: false,
      },
      label: "Password",
      placeholder: "Enter password...",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await register(formData);
      console.log(formData, "formdatat");
      alert("login successfully  ");
      navigate("/");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <Form
        className="!shadow-none !my-8 !p-0"
        onSubmit={handleSubmit}
        onChange={handleChange}
        loading={loading}
        text="Signup"
        fields={fields}
        formData={formData}
      />
      <p className="text-sm text-gray-700">
        you have an account?{" "}
        <NavLink to={"/login"} className="text-red-600">
          Login
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
