import "./Profile.css";
import Trending from "../../components/Trending/trending"
import Navbar from "../../components/navbar/Navbar";
import Detail from "../../components/Detail/detail";
import Products from "../../components/Products/products";
import Footer from "../../components/footer/footer";

const Profile = () => {
    return (
        <div className="profile">
            <Navbar/>
            <Detail/>
            <Products/>
            <Footer/>
        </div>
    )
}
export default Profile;