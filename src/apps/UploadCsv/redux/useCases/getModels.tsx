import fetchGetModels from "../../services/fetch-get-models";
import { uploadCSVReducer } from "../UploadcsvSlice";

const getModels = async (dispatch: any) => {
  dispatch(
    uploadCSVReducer({
      isLoadingModals: true,
    })
  );
  const { networkError, isSuccess, data } = await fetchGetModels();
  if (isSuccess) {
    dispatch(
      uploadCSVReducer({
        listModels: data,
        isLoadingModals: false,
      })
    );
  } else {
    if (networkError) {
      dispatch(
        uploadCSVReducer({
          networkerror: true,
          isLoadingModals: false,
        })
      );
    }
  }
};

export default getModels;
