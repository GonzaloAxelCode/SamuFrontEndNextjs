import { FileUploadHeaderTemplateOptions } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";

const headerTemplate = (
  totalSize: number,
  fileUploadRef: any,
  options: FileUploadHeaderTemplateOptions
) => {
  const { className, chooseButton, uploadButton, cancelButton } = options;
  const value = totalSize / 1000000;
  const formatedValue =
    fileUploadRef && fileUploadRef.current
      ? fileUploadRef.current.formatSize(totalSize)
      : "0 B";

  return (
    <div
      className={className}
      style={{
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      {chooseButton}
      {uploadButton}
      {cancelButton}
      <div className="flex align-items-center gap-3 text-sm ml-auto">
        <span>{formatedValue} / 100 MB</span>
        <ProgressBar
          value={value}
          showValue={false}
          style={{ width: "10rem", height: "5px" }}
        ></ProgressBar>
      </div>
    </div>
  );
};

export default headerTemplate;
