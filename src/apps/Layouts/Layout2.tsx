import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { useRef } from "react";
import useUser from "../User/hooks/useUser";
const SidebarLayout = ({ children }: any) => {
  const { user } = useUser();
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null);
  const btnRef9 = useRef(null);
  const btnRef10 = useRef(null);
  const btnRef11 = useRef(null);

  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        id="app-sidebar-2"
        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        style={{ width: "auto" }}
      >
        <div className="flex flex-column h-full">
          <div
            className="flex align-items-center px-5 flex-shrink-0 m-4"
            style={{ width: "170px", height: "30px" }}
          >
            <img
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
              alt="hyper-700"
            />
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-3 m-0">
              <li>
                <ul className="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <Link
                      href="#"
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-home mr-2"></i>
                      <span className="font-medium">Dashboard</span>
                      <Ripple />
                    </Link>
                  </li>

                  <li>
                    <StyleClass
                      nodeRef={btnRef7}
                      selector="@next"
                      enterClassName="hidden"
                      enterActiveClassName="slidedown"
                      leaveToClassName="hidden"
                      leaveActiveClassName="slideup"
                    >
                      <Link
                        ref={btnRef7}
                        href="/reports"
                        className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                      >
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Reportes</span>
                      </Link>
                    </StyleClass>
                  </li>
                  <li>
                    <Link
                      href="/perfil"
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-cog mr-2"></i>
                      <span className="font-medium">Perfil</span>
                      <Ripple />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-none p-3 m-0">
              <li>
                <ul className="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <Link
                      href="#"
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-chart-bar mr-2"></i>
                      <span className="font-medium">Performance</span>
                      <Ripple />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-cog mr-2"></i>
                      <span className="font-medium">Settings</span>
                      <Ripple />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-auto mx-3">
            <hr className="mb-3 border-top-1 surface-border" />
            <Link
              href="#"
              className="p-ripple my-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
            >
              <img
                src={user.photo_url}
                alt="avatar-f-1"
                className="mr-2"
                style={{ width: "28px", height: "28px", borderRadius: "50%" }}
              />
              <span className="font-medium">{user.nickname}</span>
              <Ripple />
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-column relative flex-auto">
        <div
          className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
          style={{ height: "60px" }}
        >
          <div className="flex">
            <StyleClass
              nodeRef={btnRef10}
              selector="#app-sidebar-2"
              enterClassName="hidden"
              enterActiveClassName="fadeinleft"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeoutleft"
              hideOnOutsideClick
            >
              <Link
                href="#"
                ref={btnRef10}
                className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
              >
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
              </Link>
            </StyleClass>
            <span className="p-input-icon-left"></span>
          </div>
          <StyleClass
            nodeRef={btnRef11}
            selector="@next"
            enterClassName="hidden"
            enterActiveClassName="fadein"
            leaveToClassName="hidden"
            leaveActiveClassName="fadeout"
            hideOnOutsideClick
          >
            <Link
              href="#"
              ref={btnRef11}
              className="p-ripple cursor-pointer block lg:hidden text-700"
            >
              <i className="pi pi-ellipsis-v text-2xl"></i>
              <Ripple />
            </Link>
          </StyleClass>
          <ul
            className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
          >
            <li>
              <Link
                href="#"
                className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full"
              >
                <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">Inbox</span>
                <Ripple />
              </Link>
            </li>

            <li className="border-top-1 surface-border lg:border-top-none">
              <Link
                href="#"
                className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full"
              >
                <img
                  src={user.photo_url}
                  alt="avatar-f-1"
                  className="mr-3 lg:mr-0"
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
                <div className="block lg:hidden">
                  <div className="text-900 font-medium">{user.nickname}</div>
                  <span className="text-600 font-medium text-sm">
                    Marketing Specialist
                  </span>
                </div>
                <Ripple />
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
