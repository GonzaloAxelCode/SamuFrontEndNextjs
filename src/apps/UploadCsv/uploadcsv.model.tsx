export interface UploadcsvStateType {
  isLoading?: boolean;
  errors?: ErrorUploadCSV | null;
  dataCSV?: any;
  modelSelected?: NameModels;
  infoSuccess?: SuccessResponse | null;
  listModels?: ListModels[] | any[];
  file?: File | null;
  encode?: "utf-8" | "latin1";
  delimiter?: "," | ";";
  networkerror?: boolean;
  isLoadingModals?: boolean;
}

export interface ListModels {
  nombre_modelo: string;
  tiene_datos: boolean;
  properties: PropertieModel[];
  title: string;
}
export interface PropertieModel {
  namePropertie?: string;
}

export interface ErrorUploadCSV {
  error_type?: string;
  message?: string;
  details?: DetailsUploadCSV;
  expected_columns?: string[];
  time?: number;
  error_1?: null;
  error_2?: null;
}

export interface DetailsUploadCSV {
  missing_columns?: string[];
  new_columns?: string[];
  error_details?: string;
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

export type NameModels = "adas" | "asd" | any;

export type SuccessType = {
  DATA_PROCESSED: "Data processed successfully";
};

export type ErrorType = {
  INVALID_PRIMARY_KEY: "El_identificador_principal_es_inválido";
  ENCODING_ERROR: "Error_de_codificación";
  VALIDATION_ERROR: "Error_de_validación_de_columna";
  DATABASE_ERROR: "Error_de_base_de_datos";
  FILE_FORMAT_ERROR: "Error_de_formato_de_archivo";
  FILE_TYPE_ERROR: "Error_de_tipo_de_archivo";
  DATAFRAME_DTYPE_CONVERSION_ERROR: "Error_de_conversión_de_tipo_de_datos_en_el_dataframe";
  VALIDATE_ERROR: "Error_de_validación";
  KEY_ERROR: "Error_de_clave";
  ERROR_VALUE: "Error_de_valor_de_clave";
  ERROR_TYPE: "Error_de_tipo";
  UNKNOW_ERROR: "Error_desconocido";
};
