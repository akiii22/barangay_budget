import type { ProjectStatus } from "../../types/Projects";

const styles = {
  planned: "text-yellow-500",
  ongoing: " text-green-800",
  completed: "text-red-800",
};
const Statusbadge = ({ status }: { status: ProjectStatus }) => {
  return <span className={`px-5 py-3 mx-4 ${styles[status]}`}>{status}</span>;
};
export default Statusbadge;
