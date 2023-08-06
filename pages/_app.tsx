import Notification from "@/src/Common/components/Notification";
import DataProvider from "@/src/context/DataContext";
import UIProvider from "@/src/context/UIContext";
import { store } from "@/src/redux/store";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import PrimeReact from "primereact/api";
import { ProgressBar } from "primereact/progressbar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "react-toastify/dist/ReactToastify.css";
PrimeReact.ripple = true;

import { SidebarProvider } from "@/src/context/SidebarContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Provider store={store}>
      <SidebarProvider>
        <DataProvider>
          <UIProvider>
            {isLoading ? (
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
            ) : (
              <>
                <Notification />
                <NextNProgress />
                <Component {...pageProps} key={router.route} />
              </>
            )}
          </UIProvider>
        </DataProvider>
      </SidebarProvider>
    </Provider>
  );
}
