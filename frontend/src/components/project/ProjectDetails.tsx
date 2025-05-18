"use client";

import React from "react";

interface ProjectDetails {
  programme: string;
  projectName: string;
  reference: string;
  reportingPeriod: string;
  dateSubmitted: string;
}

interface ProjectDetailsFormProps {
  details: ProjectDetails;
  onChange: (updatedDetails: ProjectDetails) => void;
  onComplete: () => void; // <-- add this
}

const ProjectDetailsForm: React.FC<ProjectDetailsFormProps> = ({
  details,
  onChange,
  onComplete,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...details, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (
      !details.programme ||
      !details.projectName ||
      !details.reference ||
      !details.reportingPeriod ||
      !details.dateSubmitted
    ) {
      alert("Please fill in all fields.");
      return;
    }

    onComplete(); // Move to next stage
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-green-50 shadow-lg p-6 rounded-xl border border-green-300"
    >
      <h2 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2">
        1. Project Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-green-800">
            Programme
          </label>
          <input
            type="text"
            name="programme"
            value={details.programme}
            onChange={handleChange}
            className="mt-1 block w-full border border-green-400 rounded-md p-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-800">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            value={details.projectName}
            onChange={handleChange}
            className="mt-1 block w-full border border-green-400 rounded-md p-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-800">
            Reference
          </label>
          <input
            type="text"
            name="reference"
            value={details.reference}
            onChange={handleChange}
            className="mt-1 block w-full border border-green-400 rounded-md p-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-800">
            Reporting Period
          </label>
          <input
            type="text"
            name="reportingPeriod"
            value={details.reportingPeriod}
            onChange={handleChange}
            placeholder="e.g. Jan 2024 - Mar 2024"
            className="mt-1 block w-full border border-green-400 rounded-md p-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-800">
            Date Submitted
          </label>
          <input
            type="date"
            name="dateSubmitted"
            value={details.dateSubmitted}
            onChange={handleChange}
            className="mt-1 block w-full border border-green-400 rounded-md p-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-sm"
      >
        Submit & Continue
      </button>
    </form>
  );
};

export default ProjectDetailsForm;
