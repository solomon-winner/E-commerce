import "./Profile.css";
import Trending from "../../components/Trending/trending"
import Navbar from "../../components/navbar/Navbar";
import Detail from "../../components/Detail/detail";
const Profile = () => {
    return (
        <div className="profile">
            <Navbar/>
            <Detail/>
        </div>
    )
}
export default Profile;