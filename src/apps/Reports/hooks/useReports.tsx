import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import getAtencionesAtendidos from "../redux/useCases/getAtencionesAtendidos";
import getMargenErrorRegistroCita from "../redux/useCases/getMargenErrorRegistroCita";

const useReports = () => {
  const dispatch = useDispatch();
  const {
    atendidos_atenciones,
    loadingAtendidosAtenciones,
    errors,
    loadingRegistrosNuevosReingresantesOkFail,
    registrosNuevosReingresantesOkFail,
  } = useSelector((state: RootState) => state.Reports);
  const loadReportAtendidosAtenciones = async () => {
    await getAtencionesAtendidos(dispatch);
  };
  const loadReportRegistrosOkFail = async () => {
    await getMargenErrorRegistroCita(dispatch);
  };

  return {
    loadReportRegistrosOkFail,
    loadReportAtendidosAtenciones,
    atendidos_atenciones,
    loadingAtendidosAtenciones,
    registrosNuevosReingresantesOkFail,
    loadingRegistrosNuevosReingresantesOkFail,
    errors,
  };
};

export default useReports;
