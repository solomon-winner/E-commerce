import "./departements.css"
import Bars from "../../assets/icons/bars.svg"
import Cross from "../../assets/icons/xmark-solid.svg"
import { useDispatch, useSelector } from "react-redux"
import { DisplayActions } from "../../Store/DisplaySlice"

const Departments = () => {
    const displayer = useSelector((state) => state.Display.isDptDisplayed)
    console.log(displayer)

    const dispatch = useDispatch();
    
    const display = (e) => {
        e.preventDefault()
        console.log("........................" + displayer)
        
        dispatch(DisplayActions.DisplayDpt(true))
    }
    const DontDisplay = (e) => {
        e.preventDefault()
        dispatch(DisplayActions.DontDisplayDpt(false))
    }

    return (
        <div className="left departements">
                        
                        <div className="dpt-head">
                            <div className="main-text">All Depatements</div>
                            <div className="mini-text mobile-hide">Total 1059 Products</div>
                            <a href="" className="dpt-trigger mobile-hide">
                            {!displayer && <img src= {Bars} alt=""  onClick={display}/>}
                               {displayer && <img src= {Cross} alt="" 
                                onClick={DontDisplay}/>}
                            </a>
                        </div>

                    <div className="dpt-menu" style = {{
                        display: displayer ?  'block': 'none'
                    }}>
                        <ul className="second-links">
                            <li className = "has-child beauty">
                                <a href="#"><div className="icon-large"><i className="ri-bear-smile-line"></i></div>
                                Beauty
                            <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
                            </a>
                            <ul>
                                <li><a href="#">Makeup</a></li>
                                <li><a href="#">Skin Care</a></li>
                                <li><a href="#">Hair Care</a></li>
                                <li><a href="#">Fragrance</a></li>
                                <li><a href="#">Foot & Hand care</a></li>
                                <li><a href="#">Tools & Accessories</a></li>
                                <li><a href="#">Shave & Hair Removal</a></li>
                                <li><a href="#">Personal Care</a></li>
                            </ul>
                        </li>

                        <li className = "has-child electronics">
                            <a href="#"><div className="icon-large">{/*<i className="ri-bear-smile-line"></i>*/}</div>
                            Electronics
                        <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
                        </a>

                        <ul>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Lap top</a></li>
                            <li><a href="#">Desk top computer</a></li>
                            <li><a href="#">Cables</a></li>
                            <li><a href="#">Security Camera</a></li>
                           
                        </ul>

                    </li>

                    <li className="has-child fashion">
                        <a href="#"><div className="icon-large">{/*<i className="ri-bear-smile-line"></i>*/}</div>
                        Women's Fashion
                    <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
                    </a>

                    <ul>
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Skin Care</a></li>
                        <li><a href="#">Hair Care</a></li>
                        <li><a href="#">Fragrance</a></li>
                        <li><a href="#">Foot & Hand care</a></li>
                        <li><a href="#">Tools & Accessories</a></li>
                        <li><a href="#">Shave & Hair Removal</a></li>
                        <li><a href="#">Personal Care</a></li>
                    </ul>

                </li>

                <li>
                    <a href="#"><div className="icon-large">{/*<i className="ri-shirt-line"></i>*/}</div>
                    Men's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div className="icon-large">{/*<i className="ri-user-5-line"></i>*/}</div>
                    Girl's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div className="icon-large">{/*<i className="ri-user-6-line"></i>*/}</div>
                    Boy's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div className="icon-large">{/*<i className="ri-heart-pulse-line"></i>*/}</div>
                    Health & Household
                </a>
            </li>
            <li className = "has-child home-kit">
                <a href="#"><div className="icon-large">{/*<i className="ri-home-8-line"></i>*/}</div>
                Home & Kitchen
            <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
            </a>

            

        </li>
            <li className="">
                <a href="#"><div className="icon-large">{/*<i className="ri-andoid-line"></i>*/}</div>
                Pet Supplies
            <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
            </a>
        </li>

        <li>
            <a href="#"><div className="icon-large">{/*<i className="ri-basketball-line"></i>*/}</div>
            Sports
        <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
        </a>
    </li>

    <li>
        <a href="#"><div className="icon-large">{/*<i className="ri-shield-star-line"></i>*/}</div>
        Best Seller
    <div className="icon-small">{/*<i className="ri-arrow-right-s-lne"></i>*/}</div>
    </a>
</li>
                        </ul>
                    </div>
                </div>
                    
    )
}
export default Departments;