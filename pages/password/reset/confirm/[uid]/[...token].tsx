import { ConfirmResetPasswordAuth } from "@/src/apps/Auth/auth.models";
import useResetPassword from "@/src/apps/Auth/hooks/useResetPassword";
import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import { Password } from "primereact/password";

import Link from "next/link";
import { useEffect, useState } from "react";
interface Props {
  uid: string;
  token: string;
}
const ResetPassword = ({ uid, token }: Props) => {
  const [resetPasswordForm, setResetPasswordForm] =
    useState<ConfirmResetPasswordAuth>({
      uid: "",
      token: "",
      new_password: "",
      re_new_password: "",
    });
  const { confirmResetPasswordFromEmail, isLoadingResetPassword, errors } =
    useResetPassword();
  console.log(errors);
  useEffect(() => {
    setResetPasswordForm({
      ...resetPasswordForm,
      uid,
      token: token.toString(),
    });
  }, [uid, token]);

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
          <div className="w-full">
            <Password
              className="mb-2"
              onChange={(e) =>
                setResetPasswordForm({
                  ...resetPasswordForm,
                  new_password: e.target.value,
                })
              }
              feedback={false}
              placeholder="Introduce tu nueva contraseña"
              value={resetPasswordForm.new_password}
              toggleMask
            />
          </div>

          <span
            className="text-xs mb-2"
            style={{ color: "red", maxWidth: "240px" }}
          >
            {errors?.new_password}
          </span>
          <div className="w-full">
            <Password
              feedback={false}
              onChange={(e) =>
                setResetPasswordForm({
                  ...resetPasswordForm,
                  re_new_password: e.target.value,
                })
              }
              placeholder="Re-introduce tu contraseña"
              value={resetPasswordForm.re_new_password}
              toggleMask
            />
          </div>
          <span className="text-xs" style={{ color: "red", maxWidth: "240px" }}>
            {errors?.non_field_errors}
            {errors?.token}
          </span>
        </div>

        <button
          onClick={() => confirmResetPasswordFromEmail(resetPasswordForm)}
          className="flex justify-center items-center mt-3 w-full border p-1 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white rounded-[4px] hover:bg-red-400 transition-colors duration-300"
          type="submit"
        >
          {!isLoadingResetPassword && (
            <span className="p-1">Restablecer Contraseña</span>
          )}
          {isLoadingResetPassword && <LoaderSpinner />}
        </button>

        <div className="mt-5 flex justify-between text-sm text-gray-600"></div>
        <div className="flex justify-center mt-5 text-sm"></div>

        <div className="mt-5 flex text-center text-xs text-gray-400">
          <p>
            Esta cuenta necesitara ser habiltada para poder <br />
            iniciar session contacta con el
            <br />
            <Link className="underline" href="">
              {" "}
              Administrador
            </Link>{" "}
            para habilitar su cuenta <br />
            si tienes dudas ve a
            <Link className="underline" href="">
              {" "}
              manual de registro.
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({
  query,
}: {
  query: { uid: string; token: string };
}) {
  const { uid, token } = query;

  return {
    props: { uid, token },
  };
}

export default ResetPassword;
