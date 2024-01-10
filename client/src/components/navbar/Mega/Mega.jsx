import "./mega.css"
import Brand from "../../../assets/img/item10.jpg"
const Mega = () => {
    return (
        <div className ="mega">
                                <div className ="container">
                                    <div className ="wrapper">
                                        <div className ="flexcol">
                                            <div className ="row">
                                                <h4>Women's Clothing</h4>
                                                <ul>
                                                    <li><a href="">Dresses</a></li>
                                                    <li><a href="">Tops & Tees</a></li>
                                                    <li><a href="">Jackets & Coats</a></li>
                                                    <li><a href="">Pants & Capris</a></li>
                                                    <li><a href="">Sweaters</a></li>
                                                    <li><a href="">Costumes</a></li>
                                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="">Pejamas & Robes</a></li>
                                                    <li><a href="">shorts</a></li>
                                                    <li><a href="">Swimmer</a></li>
                                                    

                                                </ul>
                                            </div>
                                        </div>
                                        <div className ="flexcol">
                                            <div className ="row">
                                                <h4>Shoe</h4>
                                                <ul>
                                                    <li><a href="">Dresses</a></li>
                                                    <li><a href="">Tops & Tees</a></li>
                                                    <li><a href="">Jackets & Coats</a></li>
                                                    <li><a href="">Pants & Capris</a></li>
                                                    <li><a href="">Sweaters</a></li>
                                                    <li><a href="">Costumes</a></li>
                                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="">Pejamas & Robes</a></li>
                                                    <li><a href="">shorts</a></li>
                                                    <li><a href="">Swimmer</a></li>
                                                    

                                                </ul>
                                            </div>
                                        </div>
                                        <div className ="flexcol">
                                            <div className ="row">
                                                <h4>Beauty</h4>
                                                <ul>
                                                    <li><a href="">Dresses</a></li>
                                                    <li><a href="">Tops & Tees</a></li>
                                                    <li><a href="">Jackets & Coats</a></li>
                                                    <li><a href="">Pants & Capris</a></li>
                                                    <li><a href="">Sweaters</a></li>
                                                    <li><a href="">Costumes</a></li>
                                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="">Pejamas & Robes</a></li>
                                                    <li><a href="">shorts</a></li>
                                                    <li><a href="">Swimmer</a></li>
                                                    

                                                </ul>
                                            </div>
                                        </div>
                                        <div className ="flexcol">
                                            <div className ="row">
                                                <h4>Top Brands</h4>
                                                <ul className  = "women-brands">
                                                    <li><a href="">Dresses</a></li>
                                                    <li><a href="">Tops & Tees</a></li>
                                                    <li><a href="">Jackets & Coats</a></li>
                                                    <li><a href="">Pants & Capris</a></li>
                                                    <li><a href="">Sweaters</a></li>
                                                    <li><a href="">Costumes</a></li>
                                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="">Pejamas & Robes</a></li>
                                                    <li><a href="">shorts</a></li>
                                                    <li><a href="">Swimmer</a></li>
                                                    
                                                </ul>
                                                <a href="" className ="view-all">view all brands <i className  = "ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                        <div className ="flexcol products">
                                            <div className ="row">
                                                <div className ="media">
                                                    <div className ="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={Brand} alt=""/>
                                                        </a>
                                                        </div>
                                                </div>
                                                <div className ="text-content">
                                                    <h4>Most Wanted!</h4>
                                                    <a href="#" className ="primary-button">Order Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}
export default Mega;