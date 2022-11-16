import "./scss/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Routepersonalizate from "./route/RoutePersonalizate";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routepersonalizate></Routepersonalizate>
      <Footer></Footer>
    </div>
  );
}

export default App;
