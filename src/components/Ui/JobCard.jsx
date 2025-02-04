import React, { useState } from "react";

function JobCard({ job, onClick }) {
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <div className="p-6 bg-white rounded-b-md space-y-6 shadow-md">
      <p className="text-gray-600 text-sm">{job?.type}</p>
      <p className="font-medium">{job.jobName}</p>
      <p className={isExpanded ? "" : "truncate"}>{job.jobDescription}</p>
      <button
        className="text-sm cursor-pointer text-gray-600"
        onClick={() => setisExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>

      <p className="text-gray-600">{job.salary}</p>
      <hr />
      <div className="flex justify-between">
        <p className="text-red-600 flex gap-2">
          <span>
            <i className="pi pi-map-marker"></i>
          </span>
          {job.location}
        </p>

        <button
          onClick={onClick}
          className="text-sm  bg-red-600 px-3 py-1 rounded-sm cursor-pointer text-white"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default JobCard;
