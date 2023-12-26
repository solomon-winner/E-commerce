import './App.css';
// import Banner from './components/Banner/banner';
import Nav from "./components/navbar/Navbar.jsx";
// import Banner1 from "./assets/img/banner1.jpg"
// import Banner2 from "./assets/img/banner2.jpg"
// import Banner3 from "./assets/img/banner3.jpg"
// import Banner4 from "./assets/img/banner4.jpg"

function App() {
  // const images = [Banner1,Banner2,Banner3,Banner4]
  return (
    <div className="App">
     <Nav/>
     {/* <Banner images = {images} interval={3000}/> */}
    </div>
  );
}

export default App;
