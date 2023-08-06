export interface ColumnsTableType {
  name: string;
  key: string;
}

export interface ValueSelectType {
  id: number;
  name: string;
  value: string;
  columns: ColumnsTableType[];
}

export interface DataPostResponseType {
  total_registros_count: number;
  added_registros_count: number;
  data_added: boolean;
  message: string;
  time: number;
}

export interface DataPostResponseErrorType {
  error_type: string;
  message: string;
  details?: {
    missing_columns?: string[];
    new_columns?: string[];
    error_details?: any;
  };
  expected_columns?: string[];
  time: number;

  error_1?: any | null;
  error_2?: any | null;
  error?: any | null;
}

//tesr
export interface DataGetResponse {
  count: number;
  next: string;
  previous: null | any;
  results: any[]; //dinamic data
}

export interface SuccessResponse {
  message?: string;
  success_type?: string;
  total_data_csv_original?: number;
  total_data_csv_partida?: number;
  total_despues_procesamiento?: number;
  total_objetos_creados?: number;
  total_datos_guardados_database?: number;
  time?: number;
}
