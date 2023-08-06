import { createSlice } from "@reduxjs/toolkit";
import { UploadcsvStateType } from "../uploadcsv.model";

export const UploadcsvState: UploadcsvStateType = {
  isLoading: false,
  modelSelected: "",
  dataCSV: [],
  infoSuccess: {
    message: "",
    success_type: "",
    total_data_csv_original: 0,
    total_despues_procesamiento: 0,
    total_objetos_creados: 0,
    total_datos_guardados_database: 0,
    time: 0,
  },
  errors: {
    error_type: "",
    message: "",
    details: {
      missing_columns: [],
      new_columns: [],
      error_details: "",
    },
    expected_columns: [],
    time: 0,
    error_1: null,
    error_2: null,
  },
  file: null,
  listModels: [],
  delimiter: ";",
  encode: "utf-8",
  networkerror: false,
  isLoadingModals: false,
};

const createReducer = (
  state: UploadcsvStateType,
  action: { payload: UploadcsvStateType }
) => ({
  ...state,
  ...action.payload,
});

const UploadcsvSlice = createSlice({
  name: "uploadcsv",
  initialState: UploadcsvState,
  reducers: {
    uploadCSVReducer: createReducer,
    deleteCSVReducer: createReducer,
    changeCSVReducer: createReducer,
    getDataCSVReducer: createReducer,
    getModelsReducer: createReducer,
  },
});

export const {
  uploadCSVReducer,
  deleteCSVReducer,
  changeCSVReducer,
  getDataCSVReducer,
  getModelsReducer,
} = UploadcsvSlice.actions;

export default UploadcsvSlice.reducer;
