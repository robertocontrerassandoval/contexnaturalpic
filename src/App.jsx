import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImagenesProvider from "./context/ImagenesContext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const PHOTO_URL = "/photos.json";


// he leido todos los manuales y visto todos los
//videos pero no entiendo, envio lo que entendi gracias

fetch("/photos.json")
  .then((response) => response.json())  
	.then((foto) => console.log(foto));

const App = () => {
  return (
    <div>
      <Navbar />

<ImagenesProvider>
  
     <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>


</ImagenesProvider>
      

  


    
    </div>
  );
};
export default App;
