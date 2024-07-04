import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import Sales from "../components/panel/sales";
import Graphics from "../components/panel/graphics";

const Panel: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="h-[85vh] m-auto flex px-12">
        <div>
          <Sidebar />
        </div>
        <Sales />
        <Graphics />
      </div>
    </div>
  );
}

export default Panel;
