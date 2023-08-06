import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import useRegister from "@/src/apps/Register/hooks/useRegister";
import { UserAuthRegister } from "@/src/apps/Register/register.models";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";

const RegisterBox = ({ show, changeBox }: any) => {
  const [registerForm, setRegisterForm] = useState<UserAuthRegister>({
    email: "",
    nickname: "",
    password: "",
    re_password: "",
    last_name: "",
    first_name: "",
  });
  const { signNupWithEmail, errors, signupLoading, isSendEmail, clearErrors } =
    useRegister();
  if (show) {
    return null;
  }
  return (
    <div className={` flex items-center justify-center h-screen`}>
      <div className="min-w-fit flex-col border bg-white p-4 shadow-md rounded-[8px] ">
        <div className="mb-5 flex justify-center flex-col items-center">
          <img
            className="w-28"
            src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
            alt="SamuLogo"
                  />
                  <p className="mt-1 font-bold text-sm text-red-500">Reports</p>
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <div className="flex flex-col text-sm rounded-md items-center">
            <InputText
              style={{ width: "235px" }}
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  first_name: e.target.value,
                });
              }}
              id="names"
              value={registerForm.first_name}
              type="text"
              aria-describedby="usename-help"
              placeholder="Introduce tus nombres"
              className="mt-2 "
            />
            <InputText
              style={{ width: "235px" }}
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  last_name: e.target.value,
                });
              }}
              id="last_names"
              value={registerForm.last_name}
              type="text"
              aria-describedby="usename-help"
              placeholder="Introduce tus apellidos"
              className="mt-2"
            />
            <InputText
              style={{ width: "235px" }}
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  nickname: e.target.value,
                });
              }}
              id="username"
              value={registerForm.nickname}
              type="text"
              aria-describedby="usename-help"
              placeholder="Nombre de usuario"
              className="mt-2 "
            />
            <span
              className="text-xs"
              style={{ color: "red", maxWidth: "250px" }}
            >
              {errors?.nickname}
            </span>
            <InputText
              style={{ width: "235px" }}
              className="mt-2"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  email: e.target.value,
                });
              }}
              id="email"
              value={registerForm.email}
              type="email"
              aria-describedby="email-help"
              placeholder="Correo electronico"
            />
            <span
              className="text-xs "
              style={{ color: "red", maxWidth: "250px" }}
            >
              {errors?.email}
            </span>{" "}
            <div>
              <Password
                placeholder="Ingrese su contraseña"
                value={registerForm.password}
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  });
                }}
                toggleMask
                feedback={false}
                className="mt-2"
              />
            </div>
            <span className="text-xs" style={{ color: "red" }}>
              {errors?.password}
            </span>
            <div>
              <Password
                placeholder="Re-ingrese su contraseña"
                value={registerForm.re_password}
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    re_password: e.target.value,
                  });
                }}
                toggleMask
                feedback={false}
                className="mt-2 "
              />
            </div>
            <span
              className="text-xs"
              style={{ color: "red", maxWidth: "250px" }}
            >
              {errors?.re_password}
              {errors?.detail}
              {errors?.non_field_errors}
            </span>
            {isSendEmail && (
              <span
                className="text-xs"
                style={{ color: "green", maxWidth: "250px" }}
              >
                {" "}
                Te hemos enviado un correo.
                <Link
                  href="https://gmail.com/"
                  target="_blank"
                  className="underline"
                >
                  Revisalo.
                </Link>
              </span>
            )}
            <button
              className="flex justify-center items-center  mt-3 border p-2 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white rounded-[4px] hover:bg-red-400 transition-colors duration-300"
              type="submit"
              onClick={() => {
                clearErrors();
                signNupWithEmail(registerForm);
              }}
              style={{ width: "235px" }}
            >
              {signupLoading && <LoaderSpinner />}
              {!signupLoading && <span className="p-1">Registrarse</span>}
            </button>
            <div className=" mt-2 flex justify-between text-sm text-gray-600">
              <span
                onClick={() => changeBox("login")}
                className="underline cursor-pointer"
              >
                Ya tienes una cuenta activada?
              </span>
            </div>
            <div className="mt-2 flex text-center text-xs text-gray-400">
              <p>
                Esta cuenta necesitara ser activada despues <br /> para ser
                accedida por permisos del administrador.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBox;
