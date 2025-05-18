"use client";
import React, { useState } from "react";
import StageToolbar from "@/components/StageToolbar";
import Navbar from "@/components/Navbar";
const Page = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageCompletion = () => {
    if (!completedStages.includes(currentStage)) {
      setCompletedStages((prev) => [...prev, currentStage]);
    }
    setCurrentStage((prev) => prev + 1);
  };
  return (
    <div className="p-6">
    
      <StageToolbar
        currentStage={currentStage}
        completedStages={completedStages}
        setCurrentStage={setCurrentStage}
      />
      <div className="mt-8 p-6 bg-white rounded-sm shadow border border-neutral-200">
        <h1 className="text-xl font-semibold mb-4 text-green-700">
          Stage {currentStage}
        </h1>
        <p className="text-gray-600 mb-6">
          Fill in the details for{" "}
          <span className="font-medium">Stage {currentStage}</span> here.
        </p>
        <button
          onClick={handleStageCompletion}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-sm"
        >
          Mark Complete & Next
        </button>
      </div>
    </div>
  );
};

export default Page;
