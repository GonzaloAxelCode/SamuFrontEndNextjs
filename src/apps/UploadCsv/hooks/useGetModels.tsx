import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import getModels from "../redux/useCases/getModels";

const useGetModels = () => {
  const dispatch = useDispatch();
  const { listModels, isLoadingModals } = useSelector(
    (state: RootState) => state.Upload
  );

  const getAllModels = async () => {
    await getModels(dispatch);
  };
  return {
    isLoadingModals,
    listModels,
    getAllModels,
  };
};

export default useGetModels;
