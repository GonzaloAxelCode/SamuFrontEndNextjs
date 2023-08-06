import { createContext, useEffect } from "react";
import useLogin from "../apps/Login/hooks/useLogin";
import useReports from "../apps/Reports/hooks/useReports";
import useGetModels from "../apps/UploadCsv/hooks/useGetModels";
import { ListModels } from "../apps/UploadCsv/uploadcsv.model";
import useUser from "../apps/User/hooks/useUser";

interface ValuesDataContext {
  listModels?: ListModels[];
  isLoadingModals?: boolean;
}

export const DataContext = createContext({} as ValuesDataContext);

const DataProvider = ({ children }: any) => {
  const { listModels, isLoadingModals, getAllModels } = useGetModels();

  const { loadReportRegistrosOkFail, loadReportAtendidosAtenciones } =
    useReports();
  const { loadUser } = useUser();
  const { checkAuthenticated, isAuthenticated } = useLogin();

  useEffect(() => {
    checkAuthenticated();
    if (isAuthenticated) {
      getAllModels();
      loadReportAtendidosAtenciones();
      loadReportRegistrosOkFail();
      loadUser();
    }
    console.log("useEffect DataContext");
  }, [isAuthenticated]);

  const values = {
    listModels,
    isLoadingModals,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
