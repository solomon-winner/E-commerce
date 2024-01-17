import "./Profile.css";
import Trending from "../../components/Trending/trending"
import Navbar from "../../components/navbar/Navbar";
import Detail from "../../components/Detail/detail";
import Products from "../../components/Products/products";
const Profile = () => {
    return (
        <div className="profile">
            <Navbar/>
            <Detail/>
            <Products/>
        </div>
    )
}
export default Profile;