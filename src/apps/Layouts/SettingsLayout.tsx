import Link from "next/link";
import { Divider } from "primereact/divider";
import { Ripple } from "primereact/ripple";

const SettingsLayout = ({ title = "titulo", children }: any) => {
  return (
    <div className="surface-ground px-2 mt-4 py-4 md:px-2 lg:px-4">
      <div className="p-fluid flex flex-column lg:flex-row">
        <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
          <li>
            <Link
              href="/settings"
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors"
            >
              <i className="pi pi-user md:mr-2"></i>
              <span className="font-medium hidden md:block">Profile</span>
              <Ripple />
            </Link>
          </li>
          <li>
            <Link
              href="/settings/account"
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors"
            >
              <i className="pi pi-cog md:mr-2"></i>
              <span className="font-medium hidden md:block">Account</span>
              <Ripple />
            </Link>
          </li>

          <li>
            <Link
              href="/settings/security"
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors"
            >
              <i className="pi pi-bell md:mr-2"></i>
              <span className="font-medium hidden md:block">Seguridad</span>
              <Ripple />
            </Link>
          </li>
        </ul>
        <div className="surface-card p-5 shadow-2 border-round-lg flex-auto">
          <div className="font-medium text-3xl text-900 mb-3">{title}</div>
          <Divider></Divider>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
