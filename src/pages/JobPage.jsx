// src/routes/JobPage.jsx
import React, { useState } from 'react';
import {
  useParams,
  useLoaderData,
  useNavigate
} from 'react-router-dom';
import { FaArrowLeft, FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 1) ConfirmationModal
const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
      <p className="mb-6">{message}</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  // 2) show / hide modal
  const [showModal, setShowModal] = useState(false);
  const handleDeleteClick = () => setShowModal(true);
  const handleCancelDelete = () => setShowModal(false);
  const handleConfirmDelete = () => {
    deleteJob(id);
    setShowModal(false);
    navigate('/jobs');
  };

  return (
    <>
      {/* Back link */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
            {/* Left column: details */}
            <main>
              {/* Header */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-2">{job.type}</div>
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <span className="text-orange-700">{job.location}</span>
                </div>
              </div>

              {/* Job Description */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {job.description}
                </p>
              </div>

              {/* Salary */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-2">Salary</h2>
                <p className="text-gray-700">{job.salary}</p>
              </div>

              {/* Company Details */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-2">Company Details</h2>
                <p className="font-semibold">{job.company.name}</p>
                <p className="text-gray-700 mb-4">
                  {job.company.description}
                </p>
                <div className="flex items-center mb-2">
                  <FaEnvelope className="mr-2" />
                  <a href={`mailto:${job.company.contactEmail}`} className="underline">
                    {job.company.contactEmail}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <a href={`tel:${job.company.contactPhone}`} className="underline">
                    {job.company.contactPhone}
                  </a>
                </div>
              </div>
            </main>

            {/* Right column: manage */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full block text-center mb-4"
                >
                  Edit Job
                </Link>
                <button
                  onClick={handleDeleteClick}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this job?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
    throw new Response('Not Found', { status: 404 });
  }
  return res.json();
};

export { JobPage as default, jobLoader };
