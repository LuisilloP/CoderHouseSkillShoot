import "./scss/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Routepersonalizate from "./route/RoutePersonalizate";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routepersonalizate></Routepersonalizate>
      <Footer></Footer>
    </>
  );
}

export default App;
