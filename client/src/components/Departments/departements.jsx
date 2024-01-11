import "./departements.css"
import Bars from "../../assets/icons/bars.svg"
const Departments = () => {
    return (
        <div className="left departements">
                        
                        <div class="dpt-head">
                            <div class="main-text">All Depatements</div>
                            <div class="mini-text mobile-hide">Total 1059 Products</div>
                            <a href="" class="dpt-trigger mobile-hide">
                               <img src= {Bars} alt="" />
                            </a>
                        </div>
                    <div class="dpt-menu">
                        <ul class="second-links">
                            <li class = "has-child beauty">
                                <a href="#"><div class="icon-large"><i class="ri-bear-smile-line"></i></div>
                                Beauty
                            <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
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

                        <li class = "has-child electronics">
                            <a href="#"><div class="icon-large"><i class="ri-bear-smile-line"></i></div>
                            Electronics
                        <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
                        </a>

                        <ul>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Lap top</a></li>
                            <li><a href="#">Desk top computer</a></li>
                            <li><a href="#">Cables</a></li>
                            <li><a href="#">Security Camera</a></li>
                           
                        </ul>

                    </li>

                    <li class="has-child fashion">
                        <a href="#"><div class="icon-large"><i class="ri-bear-smile-line"></i></div>
                        Women's Fashion
                    <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
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
                    <a href="#"><div class="icon-large"><i class="ri-shirt-line"></i></div>
                    Men's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div class="icon-large"><i class="ri-user-5-line"></i></div>
                    Girl's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div class="icon-large"><i class="ri-user-6-line"></i></div>
                    Boy's Fashion
                </a>
                </li>
                <li>
                    <a href="#"><div class="icon-large"><i class="ri-heart-pulse-line"></i></div>
                    Health & Household
                </a>
            </li>
            <li class = "has-child home-kit">
                <a href="#"><div class="icon-large"><i class="ri-home-8-line"></i></div>
                Home & Kitchen
            <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
            </a>

            

        </li>
            <li class="">
                <a href="#"><div class="icon-large"><i class="ri-andoid-line"></i></div>
                Pet Supplies
            <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
            </a>
        </li>

        <li>
            <a href="#"><div class="icon-large"><i class="ri-basketball-line"></i></div>
            Sports
        <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
        </a>
    </li>

    <li>
        <a href="#"><div class="icon-large"><i class="ri-shield-star-line"></i></div>
        Best Seller
    <div class="icon-small"><i class="ri-arrow-right-s-lne"></i></div>
    </a>
</li>
                        </ul>
                    </div>
                </div>
                    
    )
}
export default Departments;