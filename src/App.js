import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard"; // Import Dashboard

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100">
        <Header />
        <div className="p-6">
          <Dashboard />  {/* Include the Dashboard component */}
        </div>
      </main>
    </div>
  );
}
