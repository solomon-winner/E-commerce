import "./detail.css"
import Apparel1 from "../../assets/img/products/apparel1.jpg"
import Apparel2 from "../../assets/img/products/apparel2.jpg"
import Apparel3 from "../../assets/img/products/apparel3.jpg"
import Apparel4 from "../../assets/img/products/apparel4.jpg"
import Apparel5 from "../../assets/img/products/apparel5.jpg"
import Electronic2 from "../../assets/img/products/electronic2.jpg"
import Electronic3 from "../../assets/img/products/electronic3.jpg"
import Shoes1 from "../../assets/img/products/shoe1.jpg"
import Shoes2 from "../../assets/img/products/shoe2.jpg"

const Detail = () => {
    return (
        <div className="detail">
        <div className ="container">
            <div className ="wrapper">
                <div className ="sectop flexitem">
                    <h2><span>Addidas</span></h2>
                </div>
                <div className ="column">
                    <div className ="flexwrap">
                        <div className ="row products big">
                            <div className ="item">
                                <div className ="offer">
                                    <p>Offer ends at</p>
                                    <ul className ="flexcenter">
                                        <li>1</li>:
                                        <li>15</li>:
                                        <li>27</li>:
                                        <li>60</li>

                                    </ul>
                                </div>
                                <div className ="media">
                                    <div className ="image">
                                        <a href="#">
                                            <img src= {Apparel5} alt=""/>
                                        </a>
                                    </div>

                                    <div className ="hoverable">
                                        <ul>
                                            <li  className  = "active" ><a href = "#" ><i className  = "ri-heart-line"></i></a></li>
                                            <li><a href = "#" ><i className  = "ri-eye-line"></i></a></li>
                                            <li><a href = "#" ><i className  = "ri-shuffle-line"></i></a></li>
                                        </ul>

                                    </div>
                                    <div className ="discount center flexcenter"><span>31%</span></div>
                                </div>
                                <div className ="content">
                                    <div className ="rating">
                                        <div className ="stars">
                                        </div>
                                        <span className ="mini-text">(2,518)</span>
                                    </div>
                                    <h3 className ="main-links"><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                                    <div className ="price">
                                        <span className ="current">$129.90</span>
                                        <span className ="normal mini-text">$189.90</span>
                                    </div>
                                    <div className ="stock mini-text">
                                        <div className ="qty">
                                            <span>Stock: <strong className ="qty-available">107</strong></span>
                                            <span>Sold: <strong className ="qty-available">3,450</strong></span>

                                        </div>
                                        <div className ="bar">
                                            <div className ="available"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="row products description">
                            <div className="pro-name">
                            <div className ="sectop flexitem">
                              <h2><span className ="circle"></span><span>Happy Sailed Womens Summer Boho Floral</span></h2>
                             </div>
                             <div className ="rating">
                                        <div className ="stars">
                                        </div>
                                        <span className ="mini-text">(2,518)</span>
                                    </div>
                            </div>
                            <div className="pro-description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Omnis nemo dolorem libero quisquam, commodi laboriosam dignissimos minus hic dicta!
                                  Perferendis recusandae eveniet sunt. 
                                  Aliquid reprehenderit vel totam, voluptate obcaecati dolor.
                            </div>
                            <div className="pro-color">
                            <div className ="sectop flexitem">
                              <h3><span>Available Colors</span></h3>
                             </div>
                             <div className="colors">
                                 <div className="red"></div>
                                <div className="green"></div>
                                <div className="black"></div>
                               <div className="white"></div>
                             </div>
                               
                            </div>
                            <div className="pro-size">
                            <div className ="sectop flexitem">
                              <h3><span>Available Sizes</span></h3>
                             </div>
                             <ul>
                                <li>32</li>
                                <li>31</li>
                                <li>20</li>
                                <li>29</li>
                             </ul>
                            </div>
                            <div className="pro-comment">
                            <div className ="sectop flexitem">
                              <h3><span>Comments About the product</span></h3>
                             </div>
                             <div className="user-cmt">
                                <div className="usr">
                                   <span>Solomon Yalew</span> 
                                </div>
                                <div className="stars"></div>
                                <div className="cmt">
                                    "...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem commodi quisquam fugit necessitatibus est nisi laborum labore. Esse veritatis saepe dolorem quidem ex soluta, voluptatum neque aliquam accusamus eligendi."
                                </div>
                             </div>
                            </div>
                            <div className="pro-shope">e</div>
                            
                        

                          
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Detail;