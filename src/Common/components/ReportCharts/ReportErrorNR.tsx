import useReports from "@/src/apps/Reports/hooks/useReports";
import { ApexOptions } from "apexcharts";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tag } from "primereact/tag";
import ReactApexChart from "react-apexcharts";

const ReportErrorNR = () => {
  const { registrosNuevosReingresantesOkFail } = useReports();

  const total = registrosNuevosReingresantesOkFail?.length || 0;
  const okCount: any = registrosNuevosReingresantesOkFail?.filter(
    (item: any) => item.indicador === "OK"
  ).length;
  const failCount = total - okCount;

  const series = [okCount, failCount];

  const options: ApexOptions = {
    colors: ["#3365FE", "#FF0000"],
    chart: {
      type: "donut",
    },
    labels: ["Correctos", "Incorrectos"],
    responsive: [
      {
        options: {
          chart: {
            width: 800,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <Card
      title={
        <>
          Margen de error de atenciones de pacientes registradas como
          Reingresante (R) y Nuevo (N).{" "}
          <Tag severity="danger" value="Margen de error Superado"></Tag>
        </>
      }
    >
      <div className="p-2 flex flex-col gap-5 lg:flex-row">
        <div className="w-[100%] flex flex-col items-center">
          <div className="pb-4 relative">
            <div
              className="absolute right-[54%] top-[37%]"
              style={{ fontSize: "3rem" }}
            >
              {registrosNuevosReingresantesOkFail?.length}
            </div>
            <ReactApexChart
              width={500}
              options={options}
              series={series}
              type="donut"
            ></ReactApexChart>
          </div>
          <p>
            Este es el reporte para saber el margen de error de los registros de
            Atencion los cuales no cumplen con las 3 reglas:
            <div className="ml-3">
              <li>
                Un paciente que se registra como atendido solo puede ser
                registrado como Nuevo (N) sola una vez.
              </li>
              <li>
                Un paciente que se registra como atendido solo puede ser
                registrado como (R) Reingresante solo una vez al año.
              </li>
              <li>
                Si un paciente tiene (N) y (R) a la vez entonces hay un error de
                registro.
              </li>
            </div>
          </p>
        </div>

        <DataTable
          className="w-full"
          size="small"
          scrollable
          scrollHeight="550px"
          value={registrosNuevosReingresantesOkFail}
        >
          <Column
            style={{ width: "50px" }}
            field="numero_documento"
            header="DNI"
          ></Column>
          <Column
            style={{ width: "50px" }}
            field="total_n"
            header="Cant.de regsitros como (N)"
          ></Column>
          <Column
            style={{ width: "50px" }}
            field="total_r"
            header="Cant.de registros como (R)"
          ></Column>
          <Column
            style={{ width: "50px" }}
            field="indicador"
            header="Estado"
          ></Column>
        </DataTable>
      </div>
    </Card>
  );
};

export default ReportErrorNR;
