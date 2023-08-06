export interface ReportsStateType {
  atendidos_atenciones?: AtcAtdType[];
  registrosNuevosReingresantesOkFail?: NuevosReingresantesOkFail[];
  loadingAtendidosAtenciones?: boolean;
  loadingRegistrosNuevosReingresantesOkFail?: boolean;
  networkError?: boolean;
  errors?: any;
}

export interface NuevosReingresantesOkFail {
  numero_documento: string;
  total_n: number;
  total_r: number;
  indicador: string;
}

export interface AtcAtdType {
  Nombre_Establecimiento?: string;
  Atendidos?: number;
  Atenciones?: number;
}
