import { createContext, useState } from "react";

//crear contexto
export const ImagenesContext = createContext();

//proveer Contexto
const ImagenProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);

  return (
    <ImagenesContext.Provider
      value={{
        imagenes,
        setImagenes,
      }}
    >
      {children}
    </ImagenesContext.Provider>
  );
};
export default ImagenProvider;
