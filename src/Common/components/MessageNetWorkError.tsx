import { Message } from "primereact/message";

const MessageNetWorkError = () => {
  return (
    <div className="card flex flex-wrap align-items-center gap-3 w-full p-2">
      <Message className="w-full" severity="error" text="Error de red.El servidor no esta disponible por ahora." />
    </div>
  );
};

export default MessageNetWorkError;
