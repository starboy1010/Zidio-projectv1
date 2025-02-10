import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Add Dashboard components here */}
        </div>
      </main>
    </div>
  );
}
