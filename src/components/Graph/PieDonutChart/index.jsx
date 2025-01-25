import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

export const PieDonutChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([44, 30]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

// const domContainer = document.querySelector("#app");
// ReactDOM.render(<PieDonutChart />, domContainer);
