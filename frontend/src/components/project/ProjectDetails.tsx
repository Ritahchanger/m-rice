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
  onComplete: () => void;
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

    if (
      !details.programme ||
      !details.projectName ||
      !details.reference ||
      !details.reportingPeriod ||
      !details.dateSubmitted
    ) {
      alert("🚫 Please fill in all fields.");
      return;
    }

    onComplete();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gradient-to-br p-2 rounded-2xl "
    >
      <h2 className="text-3xl font-extrabold text-teal-700 border-b border-teal-300 pb-2">
        📋 1. Project Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-blue-900">
            🎯 Programme
          </label>
          <input
            type="text"
            name="programme"
            value={details.programme}
            onChange={handleChange}
            className="mt-1 block w-full border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900">
            🏗️ Project Name
          </label>
          <input
            type="text"
            name="projectName"
            value={details.projectName}
            onChange={handleChange}
            className="mt-1 block w-full border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900">
            🧾 Reference
          </label>
          <input
            type="text"
            name="reference"
            value={details.reference}
            onChange={handleChange}
            className="mt-1 block w-full border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900">
            📅 Reporting Period
          </label>
          <input
            type="text"
            name="reportingPeriod"
            value={details.reportingPeriod}
            onChange={handleChange}
            placeholder="e.g. Jan 2024 - Mar 2024"
            className="mt-1 block w-full border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900">
            📌 Date Submitted
          </label>
          <input
            type="date"
            name="dateSubmitted"
            value={details.dateSubmitted}
            onChange={handleChange}
            className="mt-1 block w-full border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="mt-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 hover:from-green-500 hover:to-blue-700 text-white font-semibold px-8 py-2 rounded-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          ✅ Submit
        </button>
        <button
          type="submit"
          onClick={onComplete}
          className="mt-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 hover:from-green-500 hover:to-blue-700 text-white font-semibold px-8 py-2 rounded-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          ✅ Save & Continue
        </button>
      </div>
    </form>
  );
};

export default ProjectDetailsForm;
