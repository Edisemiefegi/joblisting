import { createContext, useContext, useEffect, useState } from "react";
import { getAllJobs, getUsers, loginFunc } from "../service/jobs";

const JobContext = createContext({
  jobs: [],
  users: [],
  loggedinUser: null,
  loginUser: () => {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedinUser, setLoggedinUser] = useState(null);

  useEffect(async () => {
    const unsubscribe = getAllJobs(setJobs);
    await getUsers(setUsers);
    await loginFunc(setLoggedinUser);
    return () => {
      unsubscribe();
    };
  }, []);

  // const loginUser = async () => {
  //   const user = await loginFunc(form);
  //   if (user) {
  //     console.log(user, "test");
  //     setLoggedinUser(user);
  //   }
  // };
  return (
    <JobContext.Provider value={{ jobs, users, loggedinUser }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
