import fetchReportAtcAtd from "../../services/fetch-report-atc_atd";
import { ReportsAtcAtdReducer } from "../ReportsSlice";

const getAtencionesAtendidos = async (dispatch: any) => {
  dispatch(
    ReportsAtcAtdReducer({
      loadingAtendidosAtenciones: true,
    })
  );
  const { errors, data, isSuccess } = await fetchReportAtcAtd();
  if (isSuccess) {
    dispatch(
      ReportsAtcAtdReducer({
        atendidos_atenciones: data?.results,
        loadingAtendidosAtenciones: false,
      })
    );
  } else {
    dispatch(
      ReportsAtcAtdReducer({
        errors,
        loadingAtendidosAtenciones: false,
      })
    );
  }
};

export default getAtencionesAtendidos;
