import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

const PieChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [21, 11, 27, 67],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Pending", "Completed", "Canceled", "Total"],
      colors: ["#005FD9", "#FFA84A", "#9B88ED", "#FB67CA"],
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
      tooltip: {
        y: {
          formatter: (value) => value,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="pie"
          className="w-100"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
