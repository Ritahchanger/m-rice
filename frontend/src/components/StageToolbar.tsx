"use client";

import React from "react";
import {
  Check,
  Lock,
  FileText,
  Activity,
  BarChart2,
  MessageSquare,
  ShieldAlert,
  Target,
  Send,
} from "lucide-react";
import clsx from "clsx";

type Stage = {
  id: number;
  name: string;
  icon: any;
};

interface StageToolbarProps {
  currentStage: number;
  completedStages: number[];
  setCurrentStage: (stage: number) => void;
}

const stages: Stage[] = [
  { id: 1, name: "Project Details", icon: <FileText size={16} /> },
  { id: 2, name: "Activities", icon: <Activity size={16} /> },
  { id: 3, name: "Results", icon: <BarChart2 size={16} /> },
  { id: 4, name: "Testimonials", icon: <MessageSquare size={16} /> },
  { id: 5, name: "Risks", icon: <ShieldAlert size={16} /> },
  { id: 6, name: "KPI", icon: <Target size={16} /> },
  { id: 7, name: "Submit", icon: <Send size={16} /> },
];

const StageToolbar: React.FC<StageToolbarProps> = ({
  currentStage,
  completedStages,
  setCurrentStage,
}) => {
  return (
    <div className="flex items-center justify-between overflow-x-auto gap-2 bg-gradient-to-r from-green-600 to-blue-600 p-4 shadow-sm border border-emerald-100 fixed right-[1rem] left-[1rem]">
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
              "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-150 shadow-sm",
              isCurrent
                ? "bg-blue-700 text-white font-semibold"
                : isCompleted
                ? "bg-green-500 text-white"
                : isUnlocked
                ? "bg-white text-blue-600 border border-blue-400"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            {isCompleted ? (
              <Check size={16} />
            ) : !isUnlocked ? (
              <Lock size={16} />
            ) : (
              stage.icon
            )}
            <span className="text-sm">{stage.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default StageToolbar;
