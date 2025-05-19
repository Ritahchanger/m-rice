"use client";

import React from "react";

interface Risk {
  nature: "Internal" | "External";
  description: string;
  significance: string;
  likelihood: string;
  impact: string;
  mitigation: string;
}

interface RisksFormProps {
  risks: Risk[];
  onChange: (updatedRisks: Risk[]) => void;
  onComplete: () => void;
}

const significanceOptions = ["Low", "Medium", "High"];
const likelihoodOptions = [
  "Rare",
  "Unlikely",
  "Possible",
  "Likely",
  "Almost Certain",
];
const impactOptions = ["Minor", "Moderate", "Major", "Critical"];

const RisksForm: React.FC<RisksFormProps> = ({
  risks,
  onChange,
  onComplete,
}) => {
  const handleChange = (index: number, field: keyof Risk, value: string) => {
    const updated = [...risks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addRisk = (nature: "Internal" | "External") => {
    onChange([
      ...risks,
      {
        nature,
        description: "",
        significance: "",
        likelihood: "",
        impact: "",
        mitigation: "",
      },
    ]);
  };

  const removeRisk = (index: number) => {
    const updated = risks.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="bg-teal-50 p-6 rounded-xl border border-teal-300 shadow mt-6">
      <h2 className="text-2xl font-bold text-teal-700 border-b border-teal-300 pb-2">
        9. Risks
      </h2>

      {risks.map((risk, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-teal-200 my-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-teal-700">
              {risk.nature} Risk #{index + 1}
            </h4>
            <button
              className="text-red-500 hover:underline text-sm"
              onClick={() => removeRisk(index)}
              aria-label={`Remove ${risk.nature} risk number ${index + 1}`}
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`description-${index}`}
                className="block text-teal-700 font-medium mb-1"
              >
                Description
              </label>
              <textarea
                id={`description-${index}`}
                className="w-full border border-teal-300 rounded-md px-3 py-2"
                value={risk.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                rows={3}
              />
            </div>

            <div>
              <label
                htmlFor={`significance-${index}`}
                className="block text-teal-700 font-medium mb-1"
              >
                Significance
              </label>
              <select
                id={`significance-${index}`}
                className="w-full border border-teal-300 rounded-md px-3 py-2"
                value={risk.significance}
                onChange={(e) =>
                  handleChange(index, "significance", e.target.value)
                }
              >
                <option value="">Select Significance</option>
                {significanceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`likelihood-${index}`}
                className="block text-teal-700 font-medium mb-1"
              >
                Likelihood
              </label>
              <select
                id={`likelihood-${index}`}
                className="w-full border border-teal-300 rounded-md px-3 py-2"
                value={risk.likelihood}
                onChange={(e) =>
                  handleChange(index, "likelihood", e.target.value)
                }
              >
                <option value="">Select Likelihood</option>
                {likelihoodOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`impact-${index}`}
                className="block text-teal-700 font-medium mb-1"
              >
                Impact
              </label>
              <select
                id={`impact-${index}`}
                className="w-full border border-teal-300 rounded-md px-3 py-2"
                value={risk.impact}
                onChange={(e) => handleChange(index, "impact", e.target.value)}
              >
                <option value="">Select Impact</option>
                {impactOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor={`mitigation-${index}`}
                className="block text-teal-700 font-medium mb-1"
              >
                Mitigation Strategy
              </label>
              <textarea
                id={`mitigation-${index}`}
                className="w-full border border-teal-300 rounded-md px-3 py-2"
                value={risk.mitigation}
                onChange={(e) =>
                  handleChange(index, "mitigation", e.target.value)
                }
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-4 mt-4 flex-wrap">
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => addRisk("Internal")}
          type="button"
        >
          + Add Internal Risk
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => addRisk("External")}
          type="button"
        >
          + Add External Risk
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={onComplete}
          disabled={risks.length === 0}
          type="button"
        >
          Save + Continue
        </button>
      </div>
    </div>
  );
};

export default RisksForm;
