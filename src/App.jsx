import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/Jobspage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, {jobLoader} from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditJobPage from './pages/EditJobPage.jsx';

const App = () => { 

  //Add new job
  const addJob = async (newJob) => {
    const reg = await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete job
  const deleteJob = async (id) => {
    const reg = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const reg = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/*' element={<NotFoundPage />} />
    </Route>),
  );
  return <RouterProvider router={router} />;
};
export default App;
