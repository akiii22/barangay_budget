export type ProjectStatus = "planned" | "ongoing" | "completed";

export interface Projects {
  id: number;
  name: string;
  budget: number;
  status: ProjectStatus;
}
