"use client";

import React from "react";

interface Activity {
  title: string;
  status: "Achieved" | "In Progress" | "Not Started";
  objective: string;
  dates: string;
  progress: string;
  outputs: string;
  indicators: string;
}

interface ActivitiesFormProps {
  activities: Activity[];
  onChange: (updatedActivities: Activity[]) => void;
  onComplete: () => void;
}

const statusOptions: Activity["status"][] = [
  "Achieved",
  "In Progress",
  "Not Started",
];

const ActivitiesForm: React.FC<ActivitiesFormProps> = ({
  activities,
  onChange,
  onComplete,
}) => {
  const handleActivityChange = (
    index: number,
    field: keyof Activity,
    value: string
  ) => {
    const updated = [...activities];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addActivity = () => {
    const newActivity: Activity = {
      title: "",
      status: "Not Started",
      objective: "",
      dates: "",
      progress: "",
      outputs: "",
      indicators: "",
    };
    onChange([...activities, newActivity]);
  };

  const removeActivity = (index: number) => {
    const updated = activities.filter((_, i) => i !== index);
    onChange(updated);
  };

  // Optional: you can add validation before allowing onComplete, if needed
  const canComplete = activities.length > 0;

  return (
    <div className="space-y-8 bg-green-50 p-6 rounded-xl border border-green-300 shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2">
        3. Activities and Outputs
      </h2>

      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white border border-green-200 rounded-lg p-4 space-y-4 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-green-600">
              Activity {index + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeActivity(index)}
              className="text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>

          <div>
            <label className="block text-green-800 font-medium">Title</label>
            <input
              type="text"
              value={activity.title}
              onChange={(e) =>
                handleActivityChange(index, "title", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium">Status</label>
            <select
              value={activity.status}
              onChange={(e) =>
                handleActivityChange(index, "status", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-green-800 font-medium">
              Objective
            </label>
            <textarea
              value={activity.objective}
              onChange={(e) =>
                handleActivityChange(index, "objective", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium">
              Activity Dates
            </label>
            <input
              type="text"
              value={activity.dates}
              onChange={(e) =>
                handleActivityChange(index, "dates", e.target.value)
              }
              placeholder="e.g. Jan 10 - Mar 15, 2025"
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium">Progress</label>
            <textarea
              value={activity.progress}
              onChange={(e) =>
                handleActivityChange(index, "progress", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium">Outputs</label>
            <textarea
              value={activity.outputs}
              onChange={(e) =>
                handleActivityChange(index, "outputs", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium">
              Indicators
            </label>
            <textarea
              value={activity.indicators}
              onChange={(e) =>
                handleActivityChange(index, "indicators", e.target.value)
              }
              className="mt-1 block w-full border border-green-300 rounded-md p-2 bg-white"
            />
          </div>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addActivity}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          + Add Activity
        </button>
        <button
          type="button"
          onClick={onComplete}
          disabled={!canComplete}
          className={`mt-4 font-semibold px-4 py-2 rounded-md text-white ${
            canComplete
              ? "bg-green-600 hover:bg-green-700"
              : "bg-green-300 cursor-not-allowed"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ActivitiesForm;
