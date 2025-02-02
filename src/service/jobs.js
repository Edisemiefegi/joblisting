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
  getDoc,
} from "./firebase";

export const addJob = async (job) => {
  const details = {
    type: job.type,
    jobName: job.jobName,
    jobDescription: job.jobDescription,
    company: job.company,
    companyDescription: job.companyDescription,
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

export const editJob = async (job) => {
  if (!job.id) {
    console.error("Invalid job data: Missing ID");
    return;
  }

  try {
    const docRef = doc(db, "jobs", job.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error("Job not found!");
      return;
    }

    await updateDoc(docRef, {
      company: job.company,
      companyDescription: job.companyDescription,
      email: job.email,
      jobName: job.jobName,
      jobDescription: job.jobDescription,
      phone: job.phone || "",
      location: job.location,
      salary: job.salary,
      type: job.type,
    });

    console.log("Job updated successfully!");
  } catch (error) {
    console.error("Error updating job:", error);
  }
};
