import './App.css';
import Nav from "./components/navbar/Navbar.jsx";
import Banner from "./components/Banner/banner"
import Image1 from "./assets/img/banner1.jpg"
import Image2 from "./assets/img/banner2.jpg"
import Image3 from "./assets/img/banner3.jpg"
import Image4 from "./assets/img/banner4.jpg"

function App() {
  const images = [Image1, Image2, Image3,Image4]
  return (
    <div className="App">
     <Nav/>
     <Banner images = {images} interval={6000}/>
    </div>
  );
}

export default App;