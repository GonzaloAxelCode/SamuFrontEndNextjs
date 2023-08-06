import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import useActivateUser from "@/src/apps/Register/hooks/useActivateUser";
import Link from "next/link";

interface Props {
  uid: string;
  token: string;
}

const Activate = ({ uid, token }: Props) => {
  const { activateUserWithEmail, isLoadingActivate, errors, isActivateEmail } =
    useActivateUser();
  return (
    <div className={`flex items-center justify-center h-screen`}>
      {/* Login Container */}
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[8px] ">
        <div className="mb-5 flex justify-center">
          <img
            className="w-36"
            src="https://www.onsv.gob.pe/img/logosamu.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col text-sm rounded-md"></div>
        <button
          className="flex justify-center items-center mt-5 w-full border p-1 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white rounded-[4px] hover:bg-red-400 transition-colors duration-300"
          type="submit"
          onClick={() => activateUserWithEmail({ uid, token })}
        >
          {isLoadingActivate && <LoaderSpinner />}
          {!isLoadingActivate && <span>Activar Cuenta</span>}
        </button>
        <span className="text-sm text-red-500">{errors?.detail}</span>
        <span className="text-sm text-red-500">{errors?.token}</span>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <Link href="/" className="underline">
            Iniciar Session
          </Link>
          <Link href="/" className="underline">
            Registrarse
          </Link>
        </div>
        <div className="mt-5 flex text-center text-xs text-gray-400">
          <p>
            Esta cuenta necesitara ser habiltada para poder <br />
            iniciar session contacta con el
            <br />
            <Link href="#" className="underline">
              {" "}
              Administrador
            </Link>{" "}
            para habilitar su cuenta <br />
            si tienes dudas ve a
            <Link href="#" className="underline">
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
    props: { uid, token: token[0] },
  };
}

export default Activate;
