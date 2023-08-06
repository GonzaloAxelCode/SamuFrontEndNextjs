import { showNoti } from "@/src/Common/redux/NotificationSlice";
import fetchDeleteCsvdb from "../../services/fetch-delete-csvdb";
import { NameModels } from "../../uploadcsv.model";
import { uploadCSVReducer } from "../UploadcsvSlice";
import getModels from "./getModels";

const deleteCSV = async (nameModel: NameModels, dispatch: any) => {
  dispatch(
    uploadCSVReducer({
      isLoading: true,
    })
  );

  const { errors, isSuccess, HTTPstatus } = await fetchDeleteCsvdb(nameModel);

  if (isSuccess) {
    dispatch(
      uploadCSVReducer({
        isLoading: false,
      })
    );
    await getModels(dispatch);
    dispatch(
      showNoti({
        type: "info",
        message: "Datos borrados correctamente",
      })
    );
  } else {
    dispatch(
      uploadCSVReducer({
        isLoading: false,
        errors,
      })
    );
  }
};

export default deleteCSV;
