import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-96">
        <FaSearch className="text-gray-500" />
        <input type="text" placeholder="Search..." className="bg-transparent outline-none ml-2 w-full" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1"></span>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg">R</div>
      </div>
    </header>
  );
}
