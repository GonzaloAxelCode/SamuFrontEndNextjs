import { Dialog } from "primereact/dialog";

function WithoutModalDemo({ title, setOpen, isOpen, children }: any) {
  return (
    <div className={`card flex justify-content-center `}>
      <Dialog
        header={title}
        visible={isOpen }
        modal={false}
        style={{ width: "34vw" }}
        onHide={() => setOpen(false)}
        position="bottom-right"
      >
        {children}
      </Dialog>
    </div>
  );
}

export default WithoutModalDemo;
