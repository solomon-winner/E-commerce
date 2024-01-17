import "./Profile.css";
import Trending from "../../components/Trending/trending"
import Navbar from "../../components/navbar/Navbar";
const Profile = () => {
    return (
        <div className="profile">
            <Navbar/>
            <Trending/>
        </div>
    )
}
export default Profile;