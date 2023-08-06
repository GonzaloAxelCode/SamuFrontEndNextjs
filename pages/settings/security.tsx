import Layout from "@/src/apps/Layouts/Layout";
import SettingsLayout from "@/src/apps/Layouts/SettingsLayout";
import { Button } from "primereact/button";

const Security = () => {
  return (
    <Layout screenLoader={false}>
      <SettingsLayout title="Seguridad">
        <div className="flex w-4">
          <Button
            type="button"
            severity="danger"
            icon="pi pi-exclamation-triangle"
            label="Eliminar cuenta"
          />
        </div>
        <div className="mt-2 w-4">
          <Button
            icon="pi pi-exclamation-triangle"
            label="Desactivar cuenta"
            severity="secondary"
          />
        </div>
      </SettingsLayout>
    </Layout>
  );
};

export default Security;
