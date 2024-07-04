import React from "react";
import { IoBarChartOutline, IoDocumentOutline, IoPricetagOutline, IoCardOutline } from "react-icons/io5";

const Sales: React.FC = () => {
  return (
    <div className="bg-white mt-12 p-6 h-80 rounded-xl flex flex-col justify-between w-[800px]">
      <div className="flex justify-between">
        <div>
          <span className="text-[#2144e1] font-bold text-2xl">Total Sales</span>
          <p className="text-[#7c7f98] text-md mt-2">Sales Summary</p>
        </div>
        <button className="border border-[#c3d3e2] text-[#2144e1] w-28 h-14">Export</button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <SalesItem
          amount="$1k"
          label="Total Sales"
          percentage="+8% from yesterday"
          emoji={<IoBarChartOutline />}
        />
        <SalesItem
          amount="300"
          label="Total Order"
          percentage="+1% from yesterday"
          emoji={<IoDocumentOutline />}
        />
        <SalesItem
          amount="5"
          label="Product Sold"
          percentage="+8% from yesterday"
          emoji={<IoPricetagOutline />}
        />
        <SalesItem
          amount="8"
          label="New Customers"
          percentage="0.8% from yesterday"
          emoji={<IoCardOutline />}
        />
      </div>
    </div>
  );
};

type SalesItemProps = {
  amount: string;
  label: string;
  percentage: string;
  emoji?: JSX.Element;
};

const SalesItem: React.FC<SalesItemProps> = ({ amount, label, percentage, emoji }) => {
  return (
    <div className="bg-[#5d87ff] text-white p-4 rounded-xl w-44">
      <div className="flex flex-col h-full justify-center">
        {emoji && <div className="mt-2 text-2xl text-white">{emoji}</div>}
        <span className="text-2xl font-bold mt-2">{amount}</span>
        <span className="text-md font-medium mt-1">{label}</span>
        <span className="text-xs mt-2">{percentage}</span>
      </div>
    </div>
  );
};

export default Sales;
