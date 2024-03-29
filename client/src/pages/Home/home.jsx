import "./home.css"
import Nav from "../../components/navbar/Navbar.jsx";
import Banner from "../../components/Banner/banner"
import Image1 from "../../assets/img/banner1.jpg"
import Image2 from "../../assets/img/banner2.jpg"
import Image3 from "../../assets/img/banner3.jpg"
import Image4 from "../../assets/img/banner4.jpg"
import Sponsers from "../../components/Sponsers/sponsers";
import Trending from "../../components/Trending/trending";
import Products from "../../components/Products/products";
import Brutals from "../../components/Brutals/Brutal";
import Footer from "../../components/footer/footer";

const Home = () => {
    const images = [Image1, Image2, Image3,Image4]

return (<div className="home">
<Nav/>
 <Banner images = {Image1} Message = "Shoes Fashion"/>
 <Sponsers/>
 <Trending/>
 <Products/>
 <Brutals/>
 <Footer/>
</div>)
}

export default Home;