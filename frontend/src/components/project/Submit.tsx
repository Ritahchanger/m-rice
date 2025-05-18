"use client";

import React, { useState } from "react";

interface FinalSubmitCheckProps {
  checks: {
    activities?: boolean;
    results?: boolean;
    testimonials?: boolean;
    academicSecondments?: boolean;
    industrySecondments?: boolean;
    risks?: boolean;
    kpis?: boolean;
    budget?: boolean;
   
    gantt?: boolean;
    photos?: boolean;
  };
  onSubmit?: () => void;
}

const FinalSubmitCheck: React.FC<FinalSubmitCheckProps> = ({
  checks,
  onSubmit,
}) => {
  const [confirmed, setConfirmed] = useState(false);

  const allComplete = Object.values(checks).every((check) => check);

  return (
    <div className="bg-green-50 p-6 rounded-xl border border-green-300 shadow mt-8">
      <h2 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2 mb-4">
        Final Submission Checklist
      </h2>

      <ul className="space-y-3 mb-4">
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.activities ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Activities filled
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.results ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Results filled
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.testimonials ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Testimonials provided
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.academicSecondments ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Academic Secondments filled
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.industrySecondments ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Industry Secondments filled
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.risks ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Risks assessed
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.kpis ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          KPIs entered
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.budget ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Budget filled
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.gantt ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Gantt updates completed
        </li>
        <li className="flex items-center">
          <span
            className={`w-3 h-3 rounded-full mr-2 ${
              checks.photos ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          Photos uploaded
        </li>
      </ul>

      <div className="mb-4">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mt-1"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            disabled={!allComplete}
          />
          <span className="text-green-700">
            I confirm that I have reviewed and completed all required sections
            of this project report and am ready to submit to the admin.
          </span>
        </label>
      </div>

      <button
        className={`w-full py-2 px-4 rounded-md font-semibold ${
          allComplete && confirmed
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={onSubmit}
        disabled={!allComplete || !confirmed}
      >
        Submit Report to Admin
      </button>
    </div>
  );
};

export default FinalSubmitCheck;
