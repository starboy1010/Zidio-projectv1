import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdTask, MdDone, MdPendingActions, MdList, MdGroup, MdDelete } from "react-icons/md";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-5 flex flex-col">
      <div className="flex items-center space-x-2 text-xl font-bold text-black">
        <span className="text-blue-600 text-3xl">⚡</span>
        <span>WorkBooster</span>
      </div>
      <nav className="mt-6 space-y-3">
        <NavItem icon={<MdDashboard />} label="Dashboard" active />
        <NavItem icon={<MdTask />} label="Tasks" />
        <NavItem icon={<MdDone />} label="Completed" />
        <NavItem icon={<MdPendingActions />} label="In Progress" />
        <NavItem icon={<MdList />} label="To Do" />
        <NavItem icon={<MdGroup />} label="Team" />
        <NavItem icon={<MdDelete />} label="Trash" />
      </nav>
      <div className="mt-auto">
        <NavItem icon={<FiSettings />} label="Settings" />
      </div>
    </aside>
  );
}
