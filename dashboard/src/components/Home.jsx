import React from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-50">
      <TopBar />

      <div className="flex flex-1 h-[calc(100vh-60px)] overflow-hidden">
        <WatchList />
        <main className="flex-1 overflow-y-auto bg-white p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Home;