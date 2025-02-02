import React, { useEffect, useState } from "react";
import JobCard from "../../components/Ui/JobCard";
import Section from "../../components/Ui/Section";
import { useJob } from "../../context/Job";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const { jobs } = useJob();
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

  return (
    <div>
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
      )}
    </div>
  );
}

export default Jobs;
