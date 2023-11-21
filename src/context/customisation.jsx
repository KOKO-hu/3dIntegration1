import { createContext, useContext, useState } from "react";

const CustomisationContext = createContext({});
export const CustomisationProvider = (props) => {
  const [materiel, setMateriel] = useState("face");
  const [faceColor, setFaceColor] = useState("#154360");
  const [brasColor, setBrasColor] = useState("#5F6A6A");
  return (
    <CustomisationContext.Provider
      value={{
        materiel,
        setMateriel,
        faceColor,
        setFaceColor,
        brasColor,
        setBrasColor,
      }}
    >
      {props.children}
    </CustomisationContext.Provider>
  );
};

export const useCustomisation = () => {
  const context = useContext(CustomisationContext);
  return context;
};
