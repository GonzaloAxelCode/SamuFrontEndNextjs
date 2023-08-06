import { Accordion, AccordionTab } from "primereact/accordion";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import useUpload from "../hooks/useUpload";

const OptionsUpload = () => {
  const [ingredient, setIngredient] = useState("");
  const { setDelimiter, setEncoding, delimiter, encode } = useUpload();
  return (
    <div className="flex mt-2">
      <Accordion className="w-full">
        <AccordionTab header="Opciones " className="w-full">
          <p className="mt-2 mb-2 font-bold">Codificacion</p>
          <div className="flex flex-wrap gap-3 w-full">
            <div className="flex align-items-center">
              <RadioButton
                inputId="encode1"
                name="utf-8"
                value="utf-8"
                onChange={(e) => setEncoding(e.value)}
                checked={encode === "utf-8"}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Utf-8
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="encode2"
                name="latin1"
                value="latin1"
                onChange={(e) => setEncoding(e.value)}
                checked={encode === "latin1"}
              />
              <label htmlFor="ingredient2" className="ml-2">
                Latin1
              </label>
            </div>
          </div>
          <p className="mt-2 mb-2 font-bold">Codificacion</p>
          <div className="flex flex-wrap gap-3 w-full">
            <div className="flex align-items-center">
              <RadioButton
                inputId="encode1"
                name="utf-8"
                value=","
                onChange={(e) => setDelimiter(e.value)}
                checked={delimiter === ","}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Solo Coma <span className="font-bold">( , )</span>
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="encode2"
                name="latin1"
                value=";"
                onChange={(e) => setDelimiter(e.value)}
                checked={delimiter === ";"}
              />
              <label htmlFor="ingredient2" className="ml-2">
                Punto y Coma <span className="font-bold">( ; )</span>
              </label>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default OptionsUpload;
