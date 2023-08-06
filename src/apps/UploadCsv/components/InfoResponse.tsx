import WithoutModalDemo from "@/src/Common/components/WithoutModal";
import { UIContext } from "@/src/context/UIContext";
import { RootState } from "@/src/redux/store";
import { Tree } from "primereact/tree";
import { useContext } from "react";
import { useSelector } from "react-redux";

const InfoResponse = () => {
  const { visibleWithoutModal, setVisibleWithoutModal } = useContext(UIContext);
  const { infoSuccess, errors, modelSelected } = useSelector(
    (state: RootState) => state.Upload
  );
  const headerTitle = infoSuccess?.success_type || errors?.error_type;

  const nodes = [
    {
      key: "0",
      label: "Columnas Faltantes",
      children: (errors?.details?.missing_columns || []).map((el) => ({
        label: el,
        key: el,
      })),
    },
    {
      key: "1",
      label: "Columnas Nuevas",
      children: (errors?.details?.new_columns || []).map((el) => ({
        label: el,
        key: el,
      })),
    },
    {
      key: "2",
      label: "Columnas Esperadas",
      children: (errors?.expected_columns || []).map((el) => ({
        label: el,
        key: el,
      })),
    },
  ];

  return (
    <div>
      <WithoutModalDemo
        title={<p>{headerTitle?.replace(/_/g, " ")}</p>}
        setOpen={setVisibleWithoutModal}
        isOpen={visibleWithoutModal === modelSelected}
        maximizable
      >
        <div
          className={`${
            !infoSuccess?.success_type && "hidden"
          } custom-bold-span`}
        >
          <p>
            <span> Mensage: </span> {infoSuccess?.message}
          </p>
          <p>
            <span> Datos originales: </span>
            {infoSuccess?.total_data_csv_original}
          </p>
          <p>
            <span> Particion de datos: </span>
            {infoSuccess?.total_data_csv_partida}
          </p>

          <p>
            <span> Data despues del procesamiento: </span>
            {infoSuccess?.total_despues_procesamiento}
          </p>
          <p>
            <span> Objetos creados: </span>
            {infoSuccess?.total_objetos_creados}
          </p>
          <p>
            <span> Guadados en DB: </span>
            {infoSuccess?.total_datos_guardados_database}
          </p>
          <p>
            <span> Tiempo: </span>
            {infoSuccess?.time}
          </p>
        </div>
        <div className={`${!errors?.error_type && "hidden"} custom-bold-span`}>
          {errors?.message && <p className="pb-2">{errors?.message}</p>}

          {errors?.details?.error_details && (
            <p className="pb-2">
              <span> Detalles: </span>
              {errors?.details?.error_details}
            </p>
          )}

          <div>{errors?.details && <Tree value={nodes} />}</div>

          {errors?.error_1 && (
            <p>
              <span> Error 1 </span>
              {errors?.error_1}
            </p>
          )}

          {errors?.error_2 && (
            <p>
              <span> Error 2 </span>
              {errors?.error_2}
            </p>
          )}
        </div>
      </WithoutModalDemo>
    </div>
  );
};

export default InfoResponse;
