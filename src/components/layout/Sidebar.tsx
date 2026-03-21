import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Expenses",
    path: "/expenses",
  },
  {
    name: "Reports",
    path: "/reports",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm flex-col justify-between flex">
      <h1 className="font-bold text-lg p-6 text-center text-slate-800 tracking-wide">
        Barangay Budget
      </h1>
      <nav className="flex flex-col gap-2 px-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-slate-600 hover:bg-gray-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <img
        src="/logo.png"
        alt="logo budget"
        className="w-32 mx-auto opacity-80"
      />
    </aside>
  );
};
export default Sidebar;
