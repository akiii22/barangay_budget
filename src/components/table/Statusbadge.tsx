type Props = {
  status: "planned" | "ongoing" | "completed";
};

const StatusBadge = ({ status }: Props) => {
  const base = "px-2 py-1 rounded-full text-xs font-medium";

  const styles =
    status === "completed"
      ? "bg-green-100 text-green-600"
      : status === "ongoing"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-gray-200 text-gray-600";

  return <span className={`${base} ${styles}`}>{status}</span>;
};
export default StatusBadge;
