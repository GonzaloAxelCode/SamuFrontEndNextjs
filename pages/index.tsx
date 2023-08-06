import Layout from "@/src/apps/Layouts/Layout";
import dynamic from "next/dynamic";

const Bars3 = dynamic(
  () => import("@/src/Common/components/Charts/Bars/Bars3"),
  {
    ssr: false,
  }
);

const Bars2 = dynamic(
  () => import("@/src/Common/components/Charts/Bars/Bars2"),
  {
    ssr: false,
  }
);
const Bars1 = dynamic(
  () => import("@/src/Common/components/Charts/Bars/Bars1"),
  {
    ssr: false,
  }
);
const BarChart = dynamic(
  () => import("@/src/Common/components/Charts/BarChart"),
  {
    ssr: false,
  }
);

import useReports from "@/src/apps/Reports/hooks/useReports";
import { Card } from "primereact/card";

const ReportErrorNR = dynamic(
  () => import("@/src/Common/components/ReportCharts/ReportErrorNR"),
  {
    ssr: false,
  }
);

const Home = () => {
  const { registrosNuevosReingresantesOkFail } = useReports();
  return (
    <Layout>
      <div className="mt-5 flex flex-col gap-5">
        <ReportErrorNR />
        <Card>
          <Bars1 />
        </Card>
      </div>
    </Layout>
  );
};

export default Home;

/*
<Card>
          <Bars2 />
        </Card>
        <Card>
          <Bars3 />
        </Card>
        <Card
          title="Atenciones y Atendidos por Establecimiento"
          className="flex"
        >
          <div>
            <BarChart />
          </div>
        </Card>

 */
