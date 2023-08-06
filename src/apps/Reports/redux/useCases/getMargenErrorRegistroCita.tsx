import fetchReportNuevosReingresantesOkFail from "../../services/fetch-report-nuevos-reingresantes-ok-fail";
import { ReportMargeErrorRegistroCita } from "../ReportsSlice";

const getMargenErrorRegistroCita = async (dispatch: any) => {
  dispatch(
    ReportMargeErrorRegistroCita({
      loadingRegistrosNuevosReingresantesOkFail: true,
    })
  );
  const { errors, data, isSuccess } =
    await fetchReportNuevosReingresantesOkFail();
  if (isSuccess) {
    dispatch(
      ReportMargeErrorRegistroCita({
        registrosNuevosReingresantesOkFail: data?.results,
        loadingRegistrosNuevosReingresantesOkFail: false,
      })
    );
  } else {
    dispatch(
      ReportMargeErrorRegistroCita({
        errors,
        loadingRegistrosNuevosReingresantesOkFail: false,
      })
    );
  }
};

export default getMargenErrorRegistroCita;
