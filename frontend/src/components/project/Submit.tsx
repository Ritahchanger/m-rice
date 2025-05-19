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
    <div className="py-6 rounded-xl  mt-8">
      <h2 className="text-2xl font-bold text-teal-800 border-b border-teal-300 pb-2 mb-4">
        Final Submission Checklist
      </h2>

      <ul className="space-y-3 mb-4">
        {[
          { label: "Activities filled", check: checks.activities },
          { label: "Results filled", check: checks.results },
          { label: "Testimonials provided", check: checks.testimonials },
          {
            label: "Academic Secondments filled",
            check: checks.academicSecondments,
          },
          {
            label: "Industry Secondments filled",
            check: checks.industrySecondments,
          },
          { label: "Risks assessed", check: checks.risks },
          { label: "KPIs entered", check: checks.kpis },
          { label: "Budget filled", check: checks.budget },
          { label: "Gantt updates completed", check: checks.gantt },
          { label: "Photos uploaded", check: checks.photos },
        ].map(({ label, check }, idx) => (
          <li key={idx} className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                check ? "bg-teal-500" : "bg-cyan-400"
              }`}
            ></span>
            {label}
          </li>
        ))}
      </ul>

      <div className="mb-4">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mt-1 accent-teal-600"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            disabled={!allComplete}
          />
          <span className="text-teal-700">
            I confirm that I have reviewed and completed all required sections
            of this project report and am ready to submit to the admin.
          </span>
        </label>
      </div>

      <button
        className={`w-full py-2 px-4  font-semibold ${
          allComplete && confirmed
            ? "bg-teal-600 hover:bg-teal-700 text-white"
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
