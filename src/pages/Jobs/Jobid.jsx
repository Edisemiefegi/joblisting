import { Link, useParams, useNavigate } from "react-router-dom";
import { useJob } from "@/context/Job";
import Section from "@/components/Ui/Section";
import { deleteJob, editJob } from "@/service/jobs";
import { useEffect, useState } from "react";
import DetailCard from "@/components/Ui/DetailCard";
import Form from "@/components/Ui/Form";

const Jobid = () => {
  const { jobid } = useParams();
  const { jobs } = useJob();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id.toString() === jobid);
  const [update, setUpdate] = useState(job || {});
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUpdate(job || {});
  }, [job]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      setLoading(true);
      await deleteJob(jobid);
      alert("Job has been deleted successfully");
      navigate("/jobs");
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Error deleting job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await editJob(update);
      alert("Job updated successfully!");
      setEdit(false);
    } catch (error) {
      console.error("Failed to update job:", error);
      alert("Error updating job. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const fields = [
    {
      name: "type",
      type: "select",
      fieldType: "select",
      label: "Job Type",
      options: ["Job-type", "Full Time", "Part Time", "Contract"],
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
        inputMode: "email",
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
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  if (!job) {
    return (
      <p className="text-center py-6 text-red-500 font-semibold">loading...!</p>
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

      {!edit ? (
        <Section className="flex flex-col lg:flex-row gap-6 px-4">
          <div className="flex flex-col gap-6 w-full lg:w-3/5">
            <DetailCard
              title={update.jobName}
              subtitle={update.type}
              location={update.location}
              type="job"
            />
            <DetailCard
              title="Job Description"
              description={update.jobDescription}
              extraTitle="Salary"
              extraText={update.salary || "Not Specified"}
              type="job"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-2/5">
            <DetailCard
              title="Company Info"
              subtitle="Contact"
              companyDescription={update.companyDescription}
              company={update.company}
              phone={update.phone || "Not Specified"}
              type="company"
              email={update.email}
            />

            <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
              <h2 className="text-blue-600 font-semibold">Manage Job</h2>
              <button
                onClick={() => setEdit(true)}
                className="w-full cursor-pointer bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="w-full cursor-pointer bg-red-600 text-white text-sm px-4 py-2 rounded-full hover:bg-red-700 transition"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </Section>
      ) : (
        <Form
          className="bg-white"
          onSubmit={handleEditSubmit}
          onChange={handleChange}
          loading={loading}
          text="Edit Job"
          fields={fields}
          formData={update}
        />
      )}
    </div>
  );
};

export default Jobid;
