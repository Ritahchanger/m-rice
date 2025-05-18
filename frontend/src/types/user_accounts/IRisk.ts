interface IRisk {
    nature: "Internal" | "External";
    description: string;
    significance: string;
    likelihood: string;
    impact: string;
    mitigation: string;
  }
  


  export type { IRisk }