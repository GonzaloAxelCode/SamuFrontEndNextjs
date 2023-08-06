import { FileUpload, FileUploadUploadEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

const useFileUpload = () => {
  const toastRef = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<FileUpload>(null);
  const [fileCSV, setFileCSV] = useState<any>(null);

  const onTemplateSelect = (e: FileUploadUploadEvent) => {
    let _totalSize = totalSize;
    let files = e.files;
    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }
    setTotalSize(_totalSize);
    setFileCSV(e.files[0]);
  };

  const onTemplateUpload = (e: FileUploadUploadEvent) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback();
  };
  const onTemplateClear = () => {
    setTotalSize(0);
  };

  return {
    onTemplateSelect,
    onTemplateUpload,
    onTemplateRemove,
    onTemplateClear,
    fileUploadRef,
    totalSize,
    toastRef,
    setTotalSize,
    fileCSV,
  };
};

export default useFileUpload;
