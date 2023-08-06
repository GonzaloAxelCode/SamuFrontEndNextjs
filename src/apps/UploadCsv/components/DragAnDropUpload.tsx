import { UIContext } from "@/src/context/UIContext";
import { Button } from "primereact/button";
import { FileUpload, ItemTemplateOptions } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { useContext } from "react";
import useFileUpload from "../hooks/useFileUpload";
import useUpload from "../hooks/useUpload";
import emptyTemplate from "./DragAnDropComponents/emptyTemplate";
import headerTemplate from "./DragAnDropComponents/headerTemplate";
import OptionsUpload from "./OptionsUpload";

export default function DragAnDrop({ setVisible, headerTitle }: any) {
  const {
    onTemplateSelect,
    onTemplateUpload,
    onTemplateRemove,
    fileUploadRef,
    totalSize,
    toastRef,
    onTemplateClear,
    fileCSV,
  } = useFileUpload();
  const { uploadFileInDB, loadingUpload, infoSuccess, modelSelected } =
    useUpload();
  const { setVisibleWithoutModal } = useContext(UIContext);

  const chooseOptions = {
    icon: "pi pi-fw pi-file-import",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };

  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File;
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center">
          <span className="flex flex-column text-left ml-3">
            <span className="text-xs">{file.name}</span>
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          style={{ borderRadius: "50px" }}
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  return (
    <div>
      <OptionsUpload />
      <FileUpload
        className="mt-2"
        uploadHandler={async () => {
          await uploadFileInDB(fileCSV);
          setVisibleWithoutModal(modelSelected);
          setVisible(false);
        }}
        disabled={loadingUpload}
        customUpload
        ref={fileUploadRef}
        name="demo[]"
        accept=".csv, .CSV"
        maxFileSize={100000000}
        onUpload={onTemplateUpload}
        onSelect={(e: any) => onTemplateSelect(e)}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={(e: any) => headerTemplate(totalSize, fileUploadRef, e)}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
      />

      <ProgressBar
        mode="indeterminate"
        style={{ height: loadingUpload ? "4px" : "0px" }}
      ></ProgressBar>
    </div>
  );
}
