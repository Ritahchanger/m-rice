"use client";
import React, { useState, useEffect } from "react";
import StageToolbar from "@/components/StageToolbar";
import ProjectDetailsForm from "@/components/project/ProjectDetails";
import ActivitiesForm from "@/components/project/Activities";
import KPIForm from "@/components/project/Kpi";
import ResultsForm from "@/components/project/Results";
import RisksForm from "@/components/project/Risk";
import FinalSubmitCheck from "@/components/project/Submit";
import TestimonialsForm from "@/components/project/Testmonials";

import { IResult } from "@/types/user_accounts/IResult";
import { IKpi } from "@/types/user_accounts/IKpi";
import { IActivity } from "@/types/user_accounts/IActivity";
import { IRisk } from "@/types/user_accounts/IRisk";
import { ITestimonial } from "@/types/user_accounts/Itestmonial";

const STORAGE_KEY = "currentStage";

const Page = () => {
  // Load initial stage from sessionStorage or default to 1
  const [currentStage, setCurrentStage] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? parseInt(stored, 10) : 1;
    }
    return 1;
  });

  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const [projectDetails, setProjectDetails] = useState({
    programme: "",
    projectName: "",
    reference: "",
    reportingPeriod: "",
    dateSubmitted: "",
  });

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [results, setResults] = useState<IResult[]>([]);
  const [risks, setRisks] = useState<IRisk[]>([]);
  const [kpis, setKpis] = useState<IKpi[]>([]);

  const checks = {
    activities: activities.length > 0,
    results: results.length > 0,
    testimonials: testimonials.length > 0,
    academicSecondments: false,
    industrySecondments: false,
    risks: risks.length > 0,
    kpis: kpis.length > 0,
    budget: projectDetails.programme !== "",
    gantt: false,
    photos: false,
  };

  // Persist currentStage to sessionStorage on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, currentStage.toString());
    }
  }, [currentStage]);

  const handleStageCompletion = () => {
    if (!completedStages.includes(currentStage)) {
      setCompletedStages((prev) => [...prev, currentStage]);
    }
    setCurrentStage((prev) => prev + 1);
  };

  const renderStageComponent = () => {
    switch (currentStage) {
      case 1:
        return (
          <ProjectDetailsForm
            details={projectDetails}
            onChange={setProjectDetails}
            onComplete={handleStageCompletion}
          />
        );
      case 2:
        return (
          <ActivitiesForm
            activities={activities}
            onChange={setActivities}
            onComplete={handleStageCompletion}
          />
        );
      case 3:
        return (
          <ResultsForm
            results={results}
            onChange={setResults}
            onComplete={handleStageCompletion}
          />
        );
      case 4:
        return (
          <TestimonialsForm
            testimonials={testimonials}
            onChange={setTestimonials}
            onComplete={handleStageCompletion}
          />
        );
      case 5:
        return (
          <RisksForm
            risks={risks}
            onChange={setRisks}
            onComplete={handleStageCompletion}
          />
        );
      case 6:
        return (
          <KPIForm
            kpis={kpis}
            onChange={setKpis}
            onComplete={handleStageCompletion}
          />
        );
      case 7:
        return (
          <FinalSubmitCheck
            checks={checks}
            onSubmit={() => {
              alert("Report submitted to admin!");
              // Add your submit logic here
            }}
          />
        );
      default:
        return (
          <p className="text-green-700 font-medium">All stages completed!</p>
        );
    }
  };

  return (
    <div className="p-6">
      <StageToolbar
        currentStage={currentStage}
        completedStages={completedStages}
        setCurrentStage={setCurrentStage}
      />

      <div className="p-6 bg-white rounded-md shadow border border-neutral-200 mt-[100px]">
        <h1 className="text-xl font-semibold mb-4 text-green-700">
          Stage {currentStage}
        </h1>
        <p className="text-gray-600 mb-6">
          Fill in the details for{" "}
          <span className="font-medium">Stage {currentStage}</span> here.
        </p>

        {renderStageComponent()}
      </div>
    </div>
  );
};

export default Page;
