export type ClientFeature = {
  title: string;
  icon: "shield" | "map" | "layout" | "message" | "server" | "scan" | "database" | "globe" | "lock" | "life-buoy" | "building" | "users" | "sparkles";
};

export type ClientProject = {
  id: number;
  clientName: string;
  projectTitle: string;
  solution: string;
  features: ClientFeature[];
  logo: string;
};
