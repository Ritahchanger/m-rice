interface IActivity {
    title: string;
    status: "Achieved" | "In Progress" | "Not Started";
    objective: string;
    dates: string;
    progress: string;
    outputs: string;
    indicators: string;
  }


  export type { IActivity }