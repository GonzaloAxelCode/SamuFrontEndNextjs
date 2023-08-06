import { Toast } from "primereact/toast";
import useNotification from "../hooks/useNotification";
export default function Notification() {
  const { toastRef } = useNotification();
 
  return (
    <div>
      <div className="card flex justify-content-center">
        <Toast  ref={toastRef}></Toast>
      </div>
    </div>
  );
}
