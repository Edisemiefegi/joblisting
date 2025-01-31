import { Link, useParams, useNavigate } from "react-router-dom";
import { useJob } from "../../context/Job";
import Section from "../../components/ui/Section";
import { deleteJob } from "../../service/jobs";

const Jobid = () => {
  const { jobid } = useParams();
  const { jobs } = useJob();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id.toString() === jobid);

  const deleteFunc = async () => {
    try {
      await deleteJob(jobid);
      alert("Job has been deleted successfully");
      navigate("/jobs");
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Error deleting job. Please try again.");
    }
  };

  if (!job) {
    return (
      <p className="text-center py-6 text-red-500 font-semibold">
        Job not found!
      </p>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="p-4">
        <Link
          to="/jobs"
          className="text-red-600 flex items-center gap-2 hover:underline"
        >
          <i className="pi pi-arrow-left"></i> Go back
        </Link>
      </div>

      <Section className="flex flex-col lg:flex-row gap-6 px-4">
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          {/* Job Info */}
          <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
            <p className="text-gray-600 text-sm">{job.type}</p>
            <h1 className="font-semibold text-xl">{job.jobName}</h1>
            <p className="text-red-600 flex items-center gap-2">
              <i className="pi pi-map-marker"></i> {job.location}
            </p>
          </div>

          {/* Job Description */}
          <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-blue-600 font-semibold">Job Description</h2>
            <p className="text-gray-700">{job.jobDescription}</p>
            <h2 className="text-blue-600 font-semibold mt-4">Salary</h2>
            <p className="text-gray-600">{job.salary || "Not Specified"}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-2/5">
          <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="font-semibold text-lg">Company Info</h2>
            <p className="font-semibold">{job.company}</p>
            <p className="text-gray-700">{job.jobDescription}</p>
            <hr className="border-gray-300" />

            <h3 className="font-semibold">Contact Email</h3>
            <p className="p-2 bg-gray-100 text-sm font-medium">{job.email}</p>

            <h3 className="font-semibold mt-2">Contact Phone</h3>
            <p className="p-2 bg-gray-100 text-sm font-medium">
              {job.phone || "Not Provided"}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-blue-600 font-semibold">Manage Job</h2>
            <button className="w-full cursor-pointer bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Edit
            </button>
            <button
              onClick={deleteFunc}
              className="w-full cursor-pointer bg-red-600 text-white text-sm px-4 py-2 rounded-full hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Jobid;
