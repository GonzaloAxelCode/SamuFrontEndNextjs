import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars2 = () => {
  const [options] = useState<any>({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={options.chart.height}
      />
    </div>
  );
};

export default Bars2;
