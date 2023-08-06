import NotificationSlice from "@/src/Common/redux/NotificationSlice";
import AuthSlice from "../apps/Auth/redux/AuthSlice";
import LoginSlice from "../apps/Login/redux/LoginSlice";
import RegisterSlice from "../apps/Register/redux/RegisterSlice";
import ReportsSlice from "../apps/Reports/redux/ReportsSlice";
import UploadcsvSlice from "../apps/UploadCsv/redux/UploadcsvSlice";
import userSlice from "../apps/User/redux/userSlice";

const Slices = {
  Notification: NotificationSlice,
  Login: LoginSlice,
  Register: RegisterSlice,
  Auth: AuthSlice,
  Upload: UploadcsvSlice,
  User: userSlice,
  Reports: ReportsSlice,
};

export default Slices;
