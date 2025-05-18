"use client";
import React, { useState } from "react";
import StageToolbar from "@/components/StageToolbar";
import ProjectDetailsForm from "@/components/project/ProjectDetails";
import ActivitiesForm from "@/components/project/Activities";
import KPIForm from "@/components/project/Kpi";
import ResultsForm from "@/components/project/Results";
import RisksForm from "@/components/project/Risk";
import FinalSubmitCheck from "@/components/project/Submit";
import TestimonialsForm from "@/components/project/Testmonials";

const Page = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const [projectDetails, setProjectDetails] = useState({
    programme: "",
    projectName: "",
    reference: "",
    reportingPeriod: "",
    dateSubmitted: "",
  });

  const [activities, setActivities] = useState<Activity[]>([]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [results, setResults] = useState<Result[]>([]);

  const [risks, setRisks] = useState<Risk[]>([]);

  const [kpis, setKpis] = useState<Kpi[]>([]);

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
            onComplete={handleStageCompletion} // if supported
          />
        );
      case 3:
        return (
          <ResultsForm
            results={results}
            onChange={setResults}
            onComplete={handleStageCompletion} // if supported
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

      <div className="mt-8 p-6 bg-white rounded-md shadow border border-neutral-200">
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
