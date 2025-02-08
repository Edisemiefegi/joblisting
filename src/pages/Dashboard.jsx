import React, { useEffect, useState } from "react";
import JobCard from "@/components/Ui/JobCard";
import Section from "@/components/Ui/Section";
import { useJob } from "@/context/Job";
import { NavLink, useNavigate } from "react-router-dom";
import { getUsers } from "../service/jobs";

function Dashboard() {
  const { jobs, users } = useJob();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (jobs.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
      console.log(jobs, "susuu");
    }
  }, [jobs]);

  useEffect(() => {
    console.log(users, "iyrdtr");
  }, [users]);

  const data = [
    {
      for: "For Developers",
      text: "Browse our jobs and start your career today",
      btn: "Browse Jobs",
      path: "/jobs",
    },
    {
      for: "For Employers",
      text: "List your jobs to find perfect employee  for the role",
      btn: "Add Job",
      path: "/add-jobs",
    },
  ];

  return (
    <div>
      {/* {users} */}
      <div className="bg-blue-600 text-white text-center w-full py-12 space-y-4">
        <h1 className="text-3xl font-medium">Find Jobs</h1>
        <p className="text-sm">
          Find the perfect job that fits your skills and needs
        </p>
      </div>
      <Section className="grid md:grid-cols-2 grid-cols-1 gap-5 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="space-y-3 p-6  bg-gray-100">
            <h1 className="font-medium text-lg">{item.for}</h1>
            <p>{item.text}</p>
            <NavLink
              to={item.path}
              className="text-white bg-black text-sm rounded-md px-4 py-2"
            >
              {item.btn}
            </NavLink>
          </div>
        ))}
      </Section>
      <div className="bg-neutral-100 w-full ">
        <h1 className="text-center py-6 font-medium text-xl">Browse Jobs</h1>
        <p className="text-center">{loading}</p>
        {loading ? (
          <p className="text-center text-lg font-medium text-red-600">
            Loading...
          </p>
        ) : (
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((item, index) => (
              <JobCard
                job={item}
                key={index}
                onClick={() => navigate(`/jobs/${item.id}`)}
              />
            ))}
          </Section>
        )}{" "}
      </div>
    </div>
  );
}

export default Dashboard;
