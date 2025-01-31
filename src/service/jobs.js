import { useJob } from "../context/Job";
import {
  collection,
  addDoc,
  db,
  updateDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from "./firebase";

export const addJob = async (job) => {
  const details = {
    type: job.type,
    jobName: job.jobName,
    jobDescription: job.jobDescription,
    company: job.company,
    companyName: job.companyDescription,
    salary: job.salary,
    location: job.location,
    created: Date.now(),
    email: job.email,
    phone: job.phone,
    id: "",
  };
  const docRef = await addDoc(collection(db, "jobs"), details);
  console.log("Document written with ID: ", docRef.id);
  await updateDoc(docRef, {
    id: docRef.id,
  });

  console.log(docRef, "fs");
};

export const getAllJobs = (setJobs) => {
  const q = query(collection(db, "jobs"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const jobs = [];
    querySnapshot.forEach((doc) => {
      jobs.push(doc.data());
    });

    setJobs(jobs);
    console.log(jobs, "hhshh");
  });
  return unsubscribe;
};

export const deleteJob = async (id) => {
  await deleteDoc(doc(db, "jobs", id));
};
