import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const PanelShopping: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="h-[85vh] m-auto flex px-12">
        <Sidebar />
      </div>
    </div>
  );
}

export default PanelShopping;
