"use client";

import React from "react";

interface Result {
  indicator: string;
  baseline: string;
  target: string;
  result: string;
  status: string;
}

interface ResultsFormProps {
  results: Result[];
  onChange: (updatedResults: Result[]) => void;
  onComplete: () => void;
}

const ResultsForm: React.FC<ResultsFormProps> = ({
  results,
  onChange,
  onComplete,
}) => {
  const handleChange = (index: number, field: keyof Result, value: string) => {
    const updated = [...results];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addRow = () => {
    const newRow: Result = {
      indicator: "",
      baseline: "",
      target: "",
      result: "",
      status: "",
    };
    onChange([...results, newRow]);
  };

  const removeRow = (index: number) => {
    const updated = results.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="py-6 rounded-xl  mt-6">
      <h2 className="text-2xl font-bold text-teal-700 border-b border-cyan-300 pb-2">
        4. Results
      </h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-cyan-300 text-sm">
          <thead className="bg-cyan-100 text-teal-900">
            <tr>
              <th className="border border-cyan-300 px-4 py-2">Indicator</th>
              <th className="border border-cyan-300 px-4 py-2">Baseline</th>
              <th className="border border-cyan-300 px-4 py-2">Target</th>
              <th className="border border-cyan-300 px-4 py-2">Result</th>
              <th className="border border-cyan-300 px-4 py-2">Status</th>
              <th className="border border-cyan-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index} className="bg-white">
                {(
                  [
                    "indicator",
                    "baseline",
                    "target",
                    "result",
                    "status",
                  ] as (keyof Result)[]
                ).map((field) => (
                  <td key={field} className="border border-cyan-300 px-2 py-2">
                    <input
                      type="text"
                      value={row[field]}
                      onChange={(e) =>
                        handleChange(index, field, e.target.value)
                      }
                      className="w-full border border-cyan-200 rounded-md p-1"
                    />
                  </td>
                ))}
                <td className="border border-cyan-300 text-center">
                  <button
                    onClick={() => removeRow(index)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        <button
          onClick={addRow}
          className="global-btn"
        >
          + Add Result
        </button>
        <button
          onClick={onComplete}
          className="global-btn"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ResultsForm;
