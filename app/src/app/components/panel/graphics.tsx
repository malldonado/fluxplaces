"use client";
import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"];

const Graphics: React.FC = () => {
  return (
    <div className="mt-12 ml-8 bg-white p-6 h-80 rounded-xl w-[700px]">
      <div>
        <span className="text-[#2144e1] font-bold text-4xl">$689</span>
        <span className="text-[#7c7f98] text-md mt-1 block">
          Total spent <span className="text-[#05cd99] font-bold">+2.45%</span>
        </span>
      </div>
      <div className="w-full">
        <ChartContainer
            width={600}
          height={250}
          series={[{ type: "line", data: pData }]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              stroke: "#5d87ff",
              strokeWidth: 4,
            },
            [`& .${markElementClasses.root}`]: {
              stroke: "#5d87ff",
              scale: "1.5",
              fill: "#fff",
              strokeWidth: 2,
            },
          }}
          disableAxisListener
        >
          <LinePlot />
          <MarkPlot />
        </ChartContainer>
      </div>
    </div>
  );
};

export default Graphics;
