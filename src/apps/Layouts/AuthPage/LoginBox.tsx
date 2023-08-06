import useLogin from "@/src/apps/Login/hooks/useLogin";
import { UserAuth } from "@/src/apps/Login/login.model";
import { InputText } from "primereact/inputtext";

import { Password } from "primereact/password";

import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import Link from "next/link";
import { useState } from "react";
const LoginBox = ({ show, changeBox }: any) => {
  const [loginForm, setLoginForm] = useState<UserAuth>({
    email: "",
    password: "",
  });

  const { loginWithEmail, isLoadingLogin, loginErrors, clearErrors } =
    useLogin();
  if (show) {
    return null;
  }
  return (
    <div className={`flex items-center justify-center h-screen`}>
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[8px] ">
        <div className="mb-5 flex justify-center flex-col items-center">
          <img
            className="w-28"
            src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
            alt=""
          />
          <p className="mt-1 font-bold text-sm text-red-500">Reports</p>
        </div>
        <div className="flex flex-col text-sm rounded-md items-center">
          <div className="mb-2" style={{ width: "235px" }}>
            <InputText
              className="w-full"
              onChange={(e) => {
                clearErrors();
                setLoginForm({
                  ...loginForm,
                  email: e.target.value,
                });
              }}
              id="email"
              value={loginForm.email}
              type="email"
              placeholder="Email"
            />
          </div>
          <small id="email-help" style={{ color: "red" }}>
            {loginErrors?.email}
          </small>
          <div style={{ width: "235px" }}>
            <Password
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => {
                clearErrors();
                setLoginForm({
                  ...loginForm,
                  password: e.target.value,
                });
              }}
              toggleMask
              feedback={false}
            />
          </div>

          <small id="pass-help" style={{ color: "red", maxWidth: "240px" }}>
            {loginErrors?.detail}
            {loginErrors?.password}
          </small>
          <button
            style={{ width: "235px" }}
            onClick={() => loginWithEmail(loginForm)}
            className="flex justify-center items-center mt-3 border p-1 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white rounded-[4px] hover:bg-red-400 transition-colors duration-300"
            type="submit"
          >
            {isLoadingLogin && <LoaderSpinner />}
            {!isLoadingLogin && <span className="p-1">Iniciar Session</span>}
          </button>

          <div className="mt-2 flex  text-gray-600">
            <Link href="/forgot-password" className="underline text-xs">
              Olvido su contraseña?
            </Link>

            <p
              onClick={() => changeBox("register")}
              className="underline cursor-pointer text-xs"
            >
              Registrarse
            </p>
          </div>

          <div className="mt-3 flex text-center text-xs text-gray-400">
            <p>
              Solo si la cuenta tiene permisos del <br />
              administrador prodra ver los reportes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
