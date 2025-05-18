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

const RisksForm: React.FC<RisksFormProps> = ({ risks, onChange }) => {
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
    <div className="bg-green-50 p-6 rounded-xl border border-green-300 shadow mt-6">
      <h2 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2">
        9. Risks
      </h2>

      {risks.map((risk, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-green-200 my-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-green-700">
              {risk.nature} Risk #{index + 1}
            </h4>
            <button
              className="text-red-500 hover:underline text-sm"
              onClick={() => removeRisk(index)}
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-green-300 rounded-md px-3 py-2"
                value={risk.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                rows={3}
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1">
                Significance
              </label>
              <input
                type="text"
                className="w-full border border-green-300 rounded-md px-3 py-2"
                value={risk.significance}
                onChange={(e) =>
                  handleChange(index, "significance", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1">
                Likelihood
              </label>
              <input
                type="text"
                className="w-full border border-green-300 rounded-md px-3 py-2"
                value={risk.likelihood}
                onChange={(e) =>
                  handleChange(index, "likelihood", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1">
                Impact
              </label>
              <input
                type="text"
                className="w-full border border-green-300 rounded-md px-3 py-2"
                value={risk.impact}
                onChange={(e) => handleChange(index, "impact", e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-green-700 font-medium mb-1">
                Mitigation Strategy
              </label>
              <textarea
                className="w-full border border-green-300 rounded-md px-3 py-2"
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

      <div className="flex gap-4 mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => addRisk("Internal")}
        >
          + Add Internal Risk
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => addRisk("External")}
        >
          + Add External Risk
        </button>
      </div>
    </div>
  );
};

export default RisksForm;
