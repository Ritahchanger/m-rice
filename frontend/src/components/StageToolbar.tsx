"use client";

import React from "react";
import { Check, Lock } from "lucide-react";
import clsx from "clsx";

type Stage = {
  id: number;
  name: string;
};

interface StageToolbarProps {
  currentStage: number;
  completedStages: number[];
  setCurrentStage: (stage: number) => void;
}

const stages: Stage[] = [
  { id: 1, name: "Project Details" },
  { id: 2, name: "Activities" },
  { id: 3, name: "Results" },
  { id: 4, name: "Testimonials" },
  { id: 5, name: "Risks" },
  { id: 6, name: "KPI" },
  { id: 7, name: "Submit" },
];

const StageToolbar: React.FC<StageToolbarProps> = ({
  currentStage,
  completedStages,
  setCurrentStage,
}) => {
  return (
    <div className="flex items-center justify-between overflow-x-auto gap-2 bg-green-100 p-4 rounded-sm shadow-sm">
      {stages.map((stage) => {
        const isCompleted = completedStages.includes(stage.id);
        const isCurrent = currentStage === stage.id;
        const isUnlocked =
          isCompleted ||
          stage.id === currentStage ||
          completedStages.includes(stage.id - 1);

        return (
          <button
            key={stage.id}
            disabled={!isUnlocked}
            onClick={() => setCurrentStage(stage.id)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-sm whitespace-nowrap transition-all",
              isCurrent
                ? "bg-green-600 text-white font-bold"
                : isCompleted
                ? "bg-green-400 text-white"
                : isUnlocked
                ? "bg-white text-green-700 border border-green-400"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            {isCompleted ? (
              <Check size={18} />
            ) : !isUnlocked ? (
              <Lock size={18} />
            ) : null}
            {stage.name}
          </button>
        );
      })}
    </div>
  );
};

export default StageToolbar;
