import Form from "@/components/Ui/Form";
import { NavLink, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { loginFunc } from "@/service/jobs";
import { useJob } from "@/context/Job";

function Login() {
  const navigate = useNavigate();
  const { loggedinUser } = useJob();

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
      await loginFunc(formData);
      console.log(formData, loggedinUser, "formdatat");
      alert("login successfully  ");
      navigate("/home");
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
        text="Login"
        fields={fields}
        formData={formData}
      />
      <p className="text-sm text-gray-700">
        If you don't have an account yet{" "}
        <NavLink to={"/signup"} className="text-red-600">
          Signup
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
