import LoaderSpinner from "@/src/Common/components/LoaderSpinner";
import { ChangePasswordType } from "@/src/apps/Auth/auth.models";
import useResetPassword from "@/src/apps/Auth/hooks/useResetPassword";
import Layout from "@/src/apps/Layouts/Layout";
import SettingsLayout from "@/src/apps/Layouts/SettingsLayout";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";

const AccountSettings = () => {
  const [value, setValue] = useState("");
  const [formChangePassword, setFormChangePassword] =
    useState<ChangePasswordType>({
      new_password: "",
      re_new_password: "",
      current_password: "",
    });
  const { sendChangePassword, errors, isLoadingChangePassword, clearErrors } =
    useResetPassword();

  return (
    <Layout screenLoader={false}>
      <SettingsLayout title="Configuracion de la cuenta">
        <div className="card">
          <Accordion multiple>
            <AccordionTab header="Cambiar contraseña">
              <div
                className=" mt-2 card flex gap-2 nowrap"
                style={{ flexWrap: "wrap" }}
              >
                <div style={{ maxWidth: "230px" }}>
                  <label className="text-xs">Contraseña Actual *</label>
                  <Password
                    value={formChangePassword.current_password}
                    onChange={(e) =>
                      setFormChangePassword({
                        ...formChangePassword,
                        current_password: e.target.value,
                      })
                    }
                    className="flex items-center justify-center mb-2 "
                    feedback={false}
                    toggleMask
                    placeholder="Ingresa la contraseña actual"
                  />
                  <small
                    id="email-help"
                    style={{ color: "red", maxWidth: "230px" }}
                  >
                    {errors?.current_password}
                  </small>
                </div>
                <div style={{ maxWidth: "230px" }}>
                  <label className="text-xs">Nueva Contraseña *</label>
                  <Password
                    value={formChangePassword.new_password}
                    onChange={(e) =>
                      setFormChangePassword({
                        ...formChangePassword,
                        new_password: e.target.value,
                      })
                    }
                    className="flex items-center justify-center mb-2"
                    feedback={false}
                    toggleMask
                    placeholder="Ingresa tu nueva contraseña"
                  />
                  <small
                    id="email-help"
                    style={{ color: "red", maxWidth: "230px" }}
                  >
                    {errors?.new_password}
                  </small>
                </div>
                <div style={{ maxWidth: "230px" }}>
                  <label className="text-xs">Repite Nueva Contraseñal *</label>
                  <Password
                    value={formChangePassword.re_new_password}
                    onChange={(e) =>
                      setFormChangePassword({
                        ...formChangePassword,
                        re_new_password: e.target.value,
                      })
                    }
                    className="flex items-center justify-center mb-2"
                    feedback={false}
                    toggleMask
                    placeholder="Re ingresa tu nueva contraseña"
                  />
                  <small
                    id="email-help"
                    style={{ color: "red", maxWidth: "230px" }}
                  >
                    {errors?.non_field_errors}
                    {errors?.detail}
                  </small>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      clearErrors();
                      sendChangePassword(formChangePassword);
                    }}
                    type="button"
                    className="font-bold"
                    style={{
                      background: "#000",
                      color: "white",
                      height: "2.6rem",
                    }}
                    icon="pi pi-lock"
                    label="Cambiar contraseña"
                  >
                    {isLoadingChangePassword && <LoaderSpinner />}
                  </Button>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header="Cambiar correo electronico">
              <div
                className=" mt-2 card flex gap-2 nowrap"
                style={{ flexWrap: "wrap" }}
              >
                <div>
                  <InputText
                    value={value}
                    placeholder="Ingresa tu correo "
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    style={{ background: "#000", color: "white" }}
                    className=" font-bold"
                    label="Cambiar Correo"
                    icon="pi pi-lock"
                  />
                </div>
              </div>
              <small
                id="email-help"
                style={{ color: "red", maxWidth: "234px" }}
              >
                * No disponible
              </small>
            </AccordionTab>
          </Accordion>
        </div>
      </SettingsLayout>
    </Layout>
  );
};

export default AccountSettings;
