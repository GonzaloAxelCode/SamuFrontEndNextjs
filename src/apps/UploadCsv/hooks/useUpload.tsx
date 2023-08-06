import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { uploadCSVReducer } from "../redux/UploadcsvSlice";
import deleteCSV from "../redux/useCases/deleteCSV";
import uploadCSV from "../redux/useCases/uploadCSV";

const useUpload = () => {
  const dispatch = useDispatch();

  const { modelSelected, errors, infoSuccess, isLoading, delimiter, encode } =
    useSelector((state: RootState) => state.Upload);

  const uploadFileInDB = async (file: File) => {
    if (file) {
      //@ts-ignore
      await uploadCSV(file, modelSelected, delimiter, encode, dispatch);
    }
  };

  const deleteDataModel = async () => {
    await deleteCSV(modelSelected, dispatch);
  };

  const setNameModelSelect = (name: string) => {
    dispatch(
      uploadCSVReducer({
        modelSelected: name,
      })
    );
  };

  const setEncoding = (encode: string) => {
    dispatch(
      uploadCSVReducer({
        //@ts-ignore
        encode,
      })
    );
  };

  const setDelimiter = (delimiter: string) => {
    dispatch(
      uploadCSVReducer({
        //@ts-ignore
        delimiter,
      })
    );
  };

  return {
    uploadFileInDB,
    errors,
    infoSuccess,
    setNameModelSelect,
    loadingUpload: isLoading,
    modelSelected,
    deleteDataModel,
    setDelimiter,
    setEncoding,
    delimiter,
    encode,
  };
};

export default useUpload;
