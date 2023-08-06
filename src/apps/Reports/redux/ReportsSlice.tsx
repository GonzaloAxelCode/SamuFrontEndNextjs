import { createSlice } from "@reduxjs/toolkit";
import { ReportsStateType } from "../model";

const ReportsState: ReportsStateType = {
  atendidos_atenciones: [],
  registrosNuevosReingresantesOkFail: [],

  //loaders
  loadingAtendidosAtenciones: false,
  loadingRegistrosNuevosReingresantesOkFail: false,
  //otros
  networkError: false,
  errors: [],
};

const createReducer = (
  state: ReportsStateType,
  action: { payload: ReportsStateType }
) => ({
  ...state,
  ...action.payload,
});

const ReportsSlice = createSlice({
  name: "reports",
  initialState: ReportsState,
  reducers: {
    ReportsAtcAtdReducer: createReducer,
    ReportMargeErrorRegistroCita: createReducer,
  },
});

export const { ReportsAtcAtdReducer, ReportMargeErrorRegistroCita } =
  ReportsSlice.actions;

export default ReportsSlice.reducer;
