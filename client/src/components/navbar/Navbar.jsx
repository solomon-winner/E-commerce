import "./navbar.css"
import Home from "../../assets/icons/house-solid.svg"
import Cart from "../../assets/icons/cart-shopping-solid.svg"
import Gift from "../../assets/icons/gift-solid.svg";
import Wish from "../../assets/icons/heart-solid.svg";
import Bell from "../../assets/icons/bell-solid.svg";
import Comments from "../../assets/icons/comment-solid.svg";
import Pro from "../../assets/img/pro.png";
import Logo from "../../assets/icons/logo.svg"
const Navbar = () => {
    return (
        
        <div className="navbar">
        <img src= {Logo} alt="logo" />
        <div className="left">
           <img src= {Home} alt=""/>
            <img src= {Cart} alt="cart"/>
            <div className="cart"></div>
            <img src= {Gift} alt=""/>
            <div className="gift"></div>
            <img src= {Wish} alt="wishList"/>
            <div className="wish"></div>
            <img src= {Bell} alt="notification"/>
            <div className="bell"></div>
            <img src= {Comments} alt="message"/>
            <div className="comment"></div>
             <div className="profile">
            <img src= {Pro} alt="profile"/>
            </div>
        </div>
        </div>
    
    )
}
export default Navbar;