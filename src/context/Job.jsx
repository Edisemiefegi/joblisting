import { createContext, useContext, useEffect, useState } from "react";
import { addJob, getAllJobs } from "../service/jobs";

const JobContext = createContext({
  jobs: [],
  // addJob: () => {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const unsubscribe = getAllJobs(setJobs);
    return () => unsubscribe();
  }, []);
  return <JobContext.Provider value={{ jobs }}>{children}</JobContext.Provider>;
};

export const useJob = () => useContext(JobContext);
