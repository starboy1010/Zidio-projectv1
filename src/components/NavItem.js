export default function NavItem({ icon, label, active }) {
    return (
      <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer ${active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}>
        {icon}
        <span>{label}</span>
      </div>
    );
  }
  