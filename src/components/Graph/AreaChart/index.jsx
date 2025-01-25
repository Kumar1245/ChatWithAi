import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// Mock data for series
const series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      "2017-11-13",
      "2017-11-14",
      "2017-11-15",
      "2017-11-16",
      "2017-11-17",
      "2017-11-20",
      "2017-11-21",
      "2017-11-22",
      "2017-11-23",
      "2017-11-24",
      "2017-11-27",
      "2017-11-28",
      "2017-11-29",
      "2017-11-30",
      "2017-12-01",
      "2017-12-04",
      "2017-12-05",
      "2017-12-06",
      "2017-12-07",
      "2017-12-08",
    ],
  },
};

const AreaChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
        labels: {
          formatter: function (value) {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", { weekday: "short" });
          },
        },
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AreaChart;
