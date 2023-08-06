import useResetPassword from "@/src/apps/Auth/hooks/useResetPassword";
import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const { resetPaswordWithEmail, isLoadingResetPassword } = useResetPassword();
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Login Container */}
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[8px] ">
        <div className="mb-5 flex justify-center">
          <img
            className="w-36"
            src="http://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
            alt=""
          />
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <InputText
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            value={email}
            type="email"
            aria-describedby="email-help"
            placeholder="Email"
          />

          <span className="text-xs" style={{ color: "red" }}></span>
        </div>
        <span className="text-xs" style={{ color: "red" }}></span>

        <button
          onClick={() => resetPaswordWithEmail(email)}
          className="flex justify-center items-center mt-2 w-full border p-1 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white rounded-[4px] hover:bg-red-400 transition-colors duration-300"
          type="submit"
        >
          {!isLoadingResetPassword && (
            <span className="p-1">Reestablecer Contraseña</span>
          )}
          {isLoadingResetPassword && <LoaderSpinner />}
        </button>

        <div className="mt-2 flex justify-between text-sm text-gray-600"></div>

        <div className=" flex text-center text-xs text-gray-800">
          <Link href="/" className="underline">Iniciar Session</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
