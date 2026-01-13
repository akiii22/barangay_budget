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
    <aside className="w-64 border-white/50 border-r shadow-2xl bg-blue-100 flex-col justify-between flex">
      <h1 className="font-bold text-[1.3rem] p-4 text-center text-slate-700">
        Barangay Budget
      </h1>
      <nav className="space-y-1 flex flex-col items-center justify-center gap-6 my-8 text-xl">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={(isActive) =>
              `block px-4 py-2 w-full text-center ${
                isActive ? "hover:bg-blue-400" : "hover:bg-gray-300"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <img src="/logo.png" alt="logo budget" className="w-50 my-0 mx-auto" />
    </aside>
  );
};
export default Sidebar;
