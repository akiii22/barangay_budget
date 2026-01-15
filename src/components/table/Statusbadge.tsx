import type { ProjectStatus } from "../../types/Projects";

const styles = {
  planned: "bg-yellow-100 text-yellow-800",
  ongoing: "bg-green-100 text-green-800",
  completed: "bg-red-100 text-red-800",
};
const Statusbadge = ({ status }: { status: ProjectStatus }) => {
  return <span className={`px-5 py-3 ${styles[status]}`}>{status}</span>;
};
export default Statusbadge;
