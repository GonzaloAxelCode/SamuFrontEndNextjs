import MessageNetWorkError from "@/src/Common/components/MessageNetWorkError";
import Layout from "@/src/apps/Layouts/Layout";
import InfoResponse from "@/src/apps/UploadCsv/components/InfoResponse";
import OptionsCircle from "@/src/apps/UploadCsv/components/OptionsCricle";
import { ListModels } from "@/src/apps/UploadCsv/uploadcsv.model";
import { DataContext } from "@/src/context/DataContext";
import { RootState } from "@/src/redux/store";
import { Skeleton } from "primereact/skeleton";
import { Tree } from "primereact/tree";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Uppload = () => {
  const { listModels, isLoadingModals } = useContext(DataContext);
  const { networkerror } = useSelector((state: RootState) => state.Upload);
  return (
    <Layout screenLoader={false}>
      <div>
        {networkerror && <MessageNetWorkError />}
        <div className={`grid ${isLoadingModals && "hidden"}`}>
          {listModels?.map((el: ListModels, index: number) => {
            return (
              <div key={index} className={`col-12 lg:col-4 p-3`}>
                <div
                  className="shadow-2  surface-card mb-2 h-full flex-column justify-content-between flex"
                  style={{ borderRadius: "6px" }}
                >
                  <div className="pt-4 pb-0 pl-4 pr-4">
                    <div className="flex align-items-center ">
                      {!el.tiene_datos && (
                        <img
                          width={36}
                          src="https://blocks.primereact.org/demo/images/blocks/file/excel.svg"
                          alt=""
                        />
                      )}
                      {el.tiene_datos && (
                        <i
                          className="pi pi-file"
                          style={{ fontSize: "2em" }}
                        ></i>
                      )}
                      <span className="text-900 font-medium ml-2">
                        {el.title}
                        {!el.tiene_datos && (
                          <i className="pl-2 pi pi-check text-green-500  font-bold"></i>
                        )}
                        {el.tiene_datos && (
                          <i className="pl-2 pi pi-times text-red-500 font-bold"></i>
                        )}
                      </span>
                    </div>
                    <p className="pt-3" style={{ fontSize: "14px" }}>
                      En Tailwind CSS, puedes establecer el radio de borde
                      (border radius) utilizando la clase d seguida{" "}
                    </p>
                    <Tree
                      className="pt-3 -ml-4 border-none outline-none"
                      style={{ fontSize: "14px" }}
                      value={[
                        {
                          key: "0",
                          label: "Detalles",
                          children: (el?.properties || []).map((el: any) => ({
                            label: el.namePropertie,
                            key: el.namePropertie,
                          })),
                        },
                      ]}
                    />
                  </div>
                  <div
                    className="p-3 surface-100 text-right"
                    style={{ borderRadius: "0 0 7px  7px " }}
                  >
                    <OptionsCircle nameModel={el.nombre_modelo.toLowerCase()} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <EskeletonCardUpload open={isLoadingModals} />
      </div>
      <InfoResponse />
    </Layout>
  );
};

export default Uppload;

function EskeletonCardUpload({ open }: any) {
  return (
    <div className={`grid ${!open && "hidden"}`}>
      {[...Array(6)].map((e: any, index: number) => {
        return (
          <div key={index} className="col-12 lg:col-4 p-3">
            <Skeleton height="17.4em" />
          </div>
        );
      })}
    </div>
  );
}
