import { createContext, useState } from "react";

interface ValuesDataContext {
  visibleModalEdit?: number;
  setVisibleModalEdit: any;
}
//xd
export const UIContext = createContext({} as any);
const UIProvider = ({ children }: any) => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(0);

  const values: ValuesDataContext = {
    visibleModalEdit,
    setVisibleModalEdit,
  };

  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export default UIProvider;
