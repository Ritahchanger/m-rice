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

const ResultsForm: React.FC<ResultsFormProps> = ({ results, onChange }) => {
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
    <div className="bg-green-50 p-6 rounded-xl border border-green-300 shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2">
        4. Results
      </h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-green-300 text-sm">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="border border-green-300 px-4 py-2">Indicator</th>
              <th className="border border-green-300 px-4 py-2">Baseline</th>
              <th className="border border-green-300 px-4 py-2">Target</th>
              <th className="border border-green-300 px-4 py-2">Result</th>
              <th className="border border-green-300 px-4 py-2">Status</th>
              <th className="border border-green-300 px-4 py-2">Action</th>
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
                  <td key={field} className="border border-green-300 px-2 py-2">
                    <input
                      type="text"
                      value={row[field]}
                      onChange={(e) =>
                        handleChange(index, field, e.target.value)
                      }
                      className="w-full border border-green-200 rounded-md p-1"
                    />
                  </td>
                ))}
                <td className="border border-green-300 text-center">
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

      <button
        onClick={addRow}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
      >
        + Add Result
      </button>
    </div>
  );
};

export default ResultsForm;
