import "./AboutProduct.css"
import Navbar from "../../components/navbar/Navbar";
import Detail from "../../components/Detail/detail";
import Products from "../../components/Products/products";
import Footer from "../../components/footer/footer";

const AboutProduct = () => {
    return  (
        <div className="aboutProduct">
            <Navbar/>
            <Detail/>
            <Products/>
            <Footer/>
        </div>
    )
}
export default AboutProduct;