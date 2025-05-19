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

  const canComplete = activities.length > 0;

  return (
    <div className="space-y-8 p-2 rounded  mt-6">
      <h2 className="text-2xl font-bold text-cyan-700 border-b border-cyan-300 pb-2">
        3. Activities and Outputs
      </h2>

      {activities.map((activity, index) => (
        <div key={index} className=" space-y-4 ">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-cyan-600">
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
            <label className="block text-cyan-800 font-medium">Title</label>
            <input
              type="text"
              value={activity.title}
              onChange={(e) =>
                handleActivityChange(index, "title", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">Status</label>
            <select
              value={activity.status}
              onChange={(e) =>
                handleActivityChange(index, "status", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">Objective</label>
            <textarea
              value={activity.objective}
              onChange={(e) =>
                handleActivityChange(index, "objective", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">
              Activity Dates
            </label>
            <input
              type="text"
              value={activity.dates}
              onChange={(e) =>
                handleActivityChange(index, "dates", e.target.value)
              }
              placeholder="e.g. Jan 10 - Mar 15, 2025"
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">Progress</label>
            <textarea
              value={activity.progress}
              onChange={(e) =>
                handleActivityChange(index, "progress", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">Outputs</label>
            <textarea
              value={activity.outputs}
              onChange={(e) =>
                handleActivityChange(index, "outputs", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-cyan-800 font-medium">
              Indicators
            </label>
            <textarea
              value={activity.indicators}
              onChange={(e) =>
                handleActivityChange(index, "indicators", e.target.value)
              }
              className="mt-1 block w-full border border-cyan-300 rounded-md p-2 bg-white"
            />
          </div>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addActivity}
          className="global-btn"
        >
          + Add Activity
        </button>
        <button
          type="button"
          onClick={onComplete}
          disabled={!canComplete}
          className={`global-btn ${
            canComplete
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-emerald-300 cursor-not-allowed"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ActivitiesForm;
