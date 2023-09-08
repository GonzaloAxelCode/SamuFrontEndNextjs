import { createContext, useState } from "react";

interface ValuesDataContext {
  visibleModalEdit?: number;
  setVisibleWithoutModal: any,
  visibleWithoutModal: any;
  setVisibleModalEdit: any;
}
//xd
export const UIContext = createContext({} as any);
const UIProvider = ({ children }: any) => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(0);
  const [visibleWithoutModal, setVisibleWithoutModal] = useState("null");

  const values: ValuesDataContext = {
    visibleModalEdit,
    setVisibleModalEdit,
    setVisibleWithoutModal,
    visibleWithoutModal
  };

  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export default UIProvider;
