import useReports from "@/src/apps/Reports/hooks/useReports";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const { atendidos_atenciones } = useReports();
  const data = atendidos_atenciones;

  const [series] = useState<any>([
    {
      data: data?.map((item) => item.Atendidos),
    },
    {
      data: data?.map((item) => item.Atenciones),
    },
  ]);

  const [options] = useState<any>({
    chart: {
      type: "bar",
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: data?.map((item) => item.Nombre_Establecimiento),
    },
  });

  return (
    <div id="chart" style={{ width: "70vw" }}>
      <ReactApexChart
        width="100%"
        options={options}
        series={series}
        type="bar"
        height={430}
      />
    </div>
  );
};

export default BarChart;
