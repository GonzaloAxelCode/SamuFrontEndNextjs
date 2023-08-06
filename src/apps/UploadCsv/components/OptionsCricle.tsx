import { Dialog } from "primereact/dialog";
import { MenuItem } from "primereact/menuitem";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";

import ConfirmationPanel from "@/src/Common/components/Confirmation";
import { useRef, useState } from "react";
import useUpload from "../hooks/useUpload";
import DragAnDrop from "./DragAnDropUpload";
export default function OptionsCircle({ nameModel = "d" }: any) {
  const toast = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  const [visiblePanelConfirmation, setVisiblePanelConfirmation] =
    useState(false);
  const [isOpen, setOpen] = useState(false);
  const { setNameModelSelect, infoSuccess } = useUpload();

  const items: MenuItem[] = [
    {
      label: "Eliminar",
      icon: "pi pi-trash",
      command: (e) => {
        setNameModelSelect(nameModel);
        setVisiblePanelConfirmation(true);
      },
    },
    {
      label: "Descargar",
      icon: "pi pi-download",
      command: () => {
        setNameModelSelect(nameModel);
        setOpen(true);
      },
    },
  ];
  const save = () => {
    setNameModelSelect(nameModel);
    setVisible(true);
  };

  return (
    <div className="card">
      <div style={{ position: "relative" }}>
        <Toast ref={toast} />

        <SplitButton
          buttonTemplate
          label="Subir"
          icon="pi pi-plus"
          onClick={save}
          model={items}
          rounded
          size="small"
        />

        <Dialog
          header={nameModel.toUpperCase()}
          visible={visible}
          position={"bottom"}
          onHide={() => setVisible(false)}
          draggable={false}
          resizable={false}
        >
          <DragAnDrop setVisible={setVisible} headerTitle={nameModel} />
        </Dialog>
        <ConfirmationPanel
          visible={visiblePanelConfirmation}
          setVisible={setVisiblePanelConfirmation}
        />
      </div>
    </div>
  );
}
