//@ts-ignore
import useUpload from "@/src/apps/UploadCsv/hooks/useUpload";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function ConfirmationPanel({ visible, setVisible }: any) {
  const toast = useRef<Toast>(null);
  const { deleteDataModel } = useUpload();

  const accept = async () => {
    await deleteDataModel();
    toast.current?.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
    </>
  );
}
