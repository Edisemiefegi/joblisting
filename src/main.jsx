import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Default from "./layouts/Default.jsx";
// import Home from "../src/pages/home.jsx";
import AddJobs from "./pages/AddJobs.jsx";
import { JobProvider } from "./context/Job.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Jobid from "./pages/Jobs/Jobid.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/home" element={<Home />} />
    <Route path="/" element={<Default />}>
      <Route path="/add-jobs" element={<AddJobs />} />
      <Route path="jobs/" element={<Jobs />} />
      <Route path="jobs/:jobid" element={<Jobid />} />
      <Route path="/home" element={<Dashboard />} />

      <Route
        path="*"
        element={
          <div className="text-center py-8 font-bold text-2xl">Not found</div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <JobProvider>
    <RouterProvider router={router} />
  </JobProvider>
);
