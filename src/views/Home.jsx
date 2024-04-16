import { useContext } from "react";
import Gallery from "../components/Gallery";
import { ImagenesContext } from "../context/ImagenesContext";


const PHOTO_URL = "/photos.json";

fetch("/photos.json")
  .then((response) => response.json())  
	.then((fotos) )


const Home = () => {
  const { imagenes } = useContext(ImagenesContext);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <div className="publicaciones row">
        {fotos.map((imagen, i) => (
          <div
            className="col-12 col-sm-6 col-md-4"
            key={i}
          >
            <Gallery imagen={imagen} />
          </div>
        ))}
      </div>
      
    </div>
  );
};
export default Home;
