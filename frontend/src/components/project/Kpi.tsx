"use client";

import React from "react";

interface KPI {
  title: string;
  definition: string;
  value: number | "N/A";
  explanation: string;
}

interface KPIFormProps {
  kpis: KPI[];
  onChange: (updatedKPIs: KPI[]) => void;
  onComplete: () => void;
}

const KPIForm: React.FC<KPIFormProps> = ({ kpis, onChange, onComplete }) => {
  const handleChange = (
    index: number,
    field: keyof KPI,
    value: string | number
  ) => {
    const updatedKPIs = [...kpis];
    updatedKPIs[index] = { ...updatedKPIs[index], [field]: value };
    onChange(updatedKPIs);
  };

  const addKPI = () => {
    onChange([
      ...kpis,
      {
        title: "",
        definition: "",
        value: "N/A",
        explanation: "",
      },
    ]);
  };

  const removeKPI = (index: number) => {
    const updatedKPIs = kpis.filter((_, i) => i !== index);
    onChange(updatedKPIs);
  };

  return (
    <div className="bg-green-100 p-6 rounded-xl border border-teal-400 shadow-md mt-6">
      <h2 className="text-2xl font-bold text-teal-800 border-b border-teal-400 pb-2 mb-4">
        10. Key Performance Indicators (KPIs)
      </h2>

      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-teal-300 mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-teal-800">KPI #{index + 1}</h4>
            <button
              type="button"
              className="text-red-600 hover:underline text-sm"
              onClick={() => removeKPI(index)}
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-teal-800 font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full border border-teal-400 rounded-md px-3 py-2 focus:outline-teal-500"
                value={kpi.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-teal-800 font-medium mb-1">
                Definition
              </label>
              <input
                type="text"
                className="w-full border border-teal-400 rounded-md px-3 py-2 focus:outline-teal-500"
                value={kpi.definition}
                onChange={(e) =>
                  handleChange(index, "definition", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-teal-800 font-medium mb-1">
                Value
              </label>
              <input
                type="text"
                placeholder="e.g., 75 or N/A"
                className="w-full border border-teal-400 rounded-md px-3 py-2 focus:outline-teal-500"
                value={kpi.value}
                onChange={(e) => {
                  const input = e.target.value;
                  handleChange(
                    index,
                    "value",
                    isNaN(Number(input)) ? input : Number(input)
                  );
                }}
              />
            </div>

            <div>
              <label className="block text-teal-800 font-medium mb-1">
                Explanation
              </label>
              <textarea
                className="w-full border border-teal-400 rounded-md px-3 py-2 focus:outline-teal-500"
                value={kpi.explanation}
                onChange={(e) =>
                  handleChange(index, "explanation", e.target.value)
                }
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-4 mt-4 flex-wrap">
        <button
          type="button"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={addKPI}
        >
          + Add KPI
        </button>
        <button
          type="button"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={onComplete}
        >
          Save + Continue
        </button>
      </div>
    </div>
  );
};

export default KPIForm;
