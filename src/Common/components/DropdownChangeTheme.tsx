import { UIContext } from "@/src/context/UIContext";
import { Dropdown } from "primereact/dropdown";
import { useContext } from "react";

function DropdownChangeTheme() {
  const { handleThemeChange, selectedTheme, themeOptions } =
    useContext(UIContext);

  return (
    <div>
      <Dropdown
        value={selectedTheme}
        options={themeOptions}
        onChange={handleThemeChange}
        placeholder="Seleccione un tema"
      />
    </div>
  );
}

export default DropdownChangeTheme;
