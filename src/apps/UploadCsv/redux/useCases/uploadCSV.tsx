import { showNoti } from "@/src/Common/redux/NotificationSlice";
import fetchUploadCSV from "../../services/fetch-upload-csvdb";
import { NameModels } from "../../uploadcsv.model";
import { uploadCSVReducer } from "../UploadcsvSlice";
import getModels from "./getModels";

const uploadCSV = async (
  fileCSV: File,
  nameModel: NameModels,
  delimiter: string,
  encode: string,
  dispatch: any
) => {
  dispatch(
    uploadCSVReducer({
      isLoading: true,
    })
  );

  const { errors, data, HTTPstatus, isSuccess } = await fetchUploadCSV(
    fileCSV,
    nameModel,
    encode,
    delimiter
  );
  if (isSuccess) {
    dispatch(
      uploadCSVReducer({
        isLoading: false,
        infoSuccess: data,
        errors: null,
      })
    );
    await getModels(dispatch);
    dispatch(
      showNoti({
        message: "Cargado con exito",
        type: "success",
      })
    );
  } else {
    dispatch(
      uploadCSVReducer({
        isLoading: false,
        errors,
        infoSuccess: null,
      })
    );
    dispatch(
      showNoti({
        message: `Hubo un error.Revisa los detalles.`,
        type: "error",
      })
    );
  }
};

export default uploadCSV;
