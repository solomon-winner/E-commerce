import "./headList.css"
import Cart from "../../../assets/icons/cart-shopping-solid.svg"
import Heart from "../../../assets/icons/heart-solid.svg"
import Mega from "../Mega/Mega"
import {Link} from "react-router-dom"
import CartList from "../../Cart/Cart";
import { useDispatch, useSelector } from "react-redux"
import { DisplayActions } from "../../../Store/DisplaySlice"

const HeadList = () => {
    const displayer = useSelector((state) => state.isCartDisplayed)
   const dispatch = useDispatch();
   const DisplayCart = (e) => {
    e.preventDefault();
    dispatch(DisplayActions.DisplayCart(true));
   }
    return (
        <div className="headList">
            
        <div className ="container">
            <div className ="wrapper flexitem">
                <a href = "/" className ="trigger desktop-hide"><span className ="i ri-menu-2-line"></span></a>
                <div className ="left flexitem">
                    
                  <div className ="logo"><Link to = "/"><span className ="circle"></span>.suk</Link></div>
                    
                    <nav className ="mobile-hide">
                        <ul className ="flexitem second-links">

                            <li><Link to = "/">Home</Link></li>
                            
                            <li><a href = "#">shope</a></li>
                            <li className  = "has-child">
                            <a href = "#">Women
                            <div className ="icon-small"><i className ="ri-arrow-down-s-line"></i></div>

                            </a>
                            <Mega/>
                            </li>
                            <li><a href = "#">Men</a></li>
                            <li>
                                <a  href = "#">Sports
                                <div className = "fly-item"><span>New!</span></div>
                            </a></li>

                        </ul>
                    </nav>
                </div>
                <div className = "right">
                    <ul className = "flexitem second-links">
                        <li className   = " mobile-hide "><a href = "#">
                            <div className = "icon-large"><img src= {Heart} alt="" title = "WishList"/></div>
                            {/* <div className = "fly-item"><span className = "item-number">0</span></div> */}
                        </a></li>
                        <li><a href ="#" className   = "iscart">
                            <div className = "icon-large">
                                <img src= {Cart} alt="" title = "Cart" onClick = {DisplayCart}/>
                                {displayer && <CartList/>}
                                {/* <div className = "fly-item"><span className = "item-number">0</span></div> */}

                            </div>
                            <div className = "icon-text">
                                <div className = "mini-text">Total</div>
                                <div className = "cart-total">$0.00</div>
                            </div>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
export default HeadList;