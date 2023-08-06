import Link from "next/link";
import { useRouter } from "next/router";
import { ProgressBar } from "primereact/progressbar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { useRef } from "react";
import useLogin from "../Login/hooks/useLogin";
import AuthPage from "./AuthPage/AuthPage";

const Layout = ({ children, ...props }: any) => {
  const btnRef12 = useRef(null);
  const { logOutApp, isAuthenticated } = useLogin();
  const router = useRouter();
  const pathname: string = router.pathname;
  const styleSelected = "text-cyan-600 border-left-2 border-cyan-600";

  if (!isAuthenticated) {
    return (
      <>
        <ScreenLoader />
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <ScreenLoader />
      <div>
        <div
          className={`min-h-screen flex relative  lg:static surface-ground `}
        >
          <div
            id="app-sidebar-9"
            className="h-full  lg:h-auto hidden lg:block  absolute lg:static left-0 top-0 z-3  select-none "
            style={{ marginRight: "6em" }}
          >
            <div className="flex flex-column h-full  surface-section fixed surface-border border-right-1">
              <div className="flex align-items-center justify-content-center flex-shrink-0">
                <img
                  src="http://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
                  alt="Image"
                  className="m-3 mt-5"
                  style={{ width: "70px", height: "27px" }}
                />
              </div>

              <div className="mt-3">
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link
                      href="/"
                      className={` ${
                        pathname === "/" && styleSelected
                      } p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center  hover:border-300 transition-duration-150 transition-colors`}
                    >
                      <i className="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Home
                      </span>
                      <Ripple />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/upload"
                      className={` ${
                        pathname === "/upload" && styleSelected
                      } p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors`}
                    >
                      <i className="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Upload
                      </span>
                      <Ripple />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/reports"
                      className={`${
                        pathname === "/reports" && styleSelected
                      } p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors`}
                    >
                      <i className="pi pi-chart-bar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Reportes
                      </span>
                      <Ripple />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className={` ${
                        pathname === "/settings" && styleSelected
                      } p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors`}
                    >
                      <i className="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Settings
                      </span>
                      <Ripple />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a
                  onClick={() => logOutApp()}
                  className="p-ripple m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors"
                >
                  <i className="pi pi-sign-out"></i>
                  <Ripple />
                </a>
              </div>
            </div>
          </div>

          <div className="min-h-screen flex flex-column relative flex-auto ">
            <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border">
              <StyleClass
                nodeRef={btnRef12}
                selector="#app-sidebar-9"
                enterClassName="hidden"
                enterActiveClassName="fadeinleft"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeoutleft"
                hideOnOutsideClick
              >
                <a
                  ref={btnRef12}
                  className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                >
                  <i className="pi pi-bars text-4xl"></i>
                  <Ripple />
                </a>
              </StyleClass>
            </div>
            <div className="">
              <div
                className="p-5 pt-1 flex flex-column flex-auto bg-white min-h-screen"
                {...props}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

function ScreenLoader() {
  const { isLoadingVerifyToken } = useLogin();
  return (
    <>
      {isLoadingVerifyToken && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ width: "200px" }}>
            <img
              className="mb-3"
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1687315829/samu/download-removebg-preview_iidvap.png"
              alt=""
            />

            <ProgressBar
              mode="indeterminate"
              style={{ height: "3px", background: "transparent" }}
              color="red"
            ></ProgressBar>
          </div>
        </div>
      )}
    </>
  );
}
