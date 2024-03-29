import "./Category.css"
import Procat1 from "../../assets/img/banner/procat1.jpg"
import Procat2 from "../../assets/img/banner/procat2.jpg"
import Procat3 from "../../assets/img/banner/procat3.jpg"

const Category = () => {
    return (
        <div className ="product-categories flexwrap">
        <div className ="row">
            <div className ="item">
                <div className ="image">
                    <img src= {Procat1} alt=""/>
                </div>
                <div className ="content mini-links">
                    <h4>Beauty</h4>
                    <ul className ="flexcol">
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Skin Care</a></li>
                        <li><a href="#">Hair Care</a></li>
                        <li><a href="#">Fragrance</a></li>
                        <li><a href="#">Foot & Hand Care</a></li>

                    </ul>
                </div>
                <div className ="second-links">
                    <a href="#" className ="view-all">View all<i className ="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>

        <div className ="row">
            <div className ="item">
                <div className ="image">
                    <img src={Procat2} alt=""/>
                </div>
                <div className ="content mini-links">
                    <h4>Beauty</h4>
                    <ul className ="flexcol">
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Skin Care</a></li>
                        <li><a href="#">Hair Care</a></li>
                        <li><a href="#">Fragrance</a></li>
                        <li><a href="#">Foot & Hand Care</a></li>

                    </ul>
                </div>
                <div className ="second-links">
                    <a href="#" className ="view-all">View all<i className ="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>

        <div className ="row">
            <div className ="item">
                <div className ="image">
                    <img src= {Procat3} alt=""/>
                </div>
                <div className ="content mini-links">
                    <h4>Beauty</h4>
                    <ul className ="flexcol">
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Skin Care</a></li>
                        <li><a href="#">Hair Care</a></li>
                        <li><a href="#">Fragrance</a></li>
                        <li><a href="#">Foot & Hand Care</a></li>

                    </ul>
                </div>
                <div className ="second-links">
                    <a href="#" className ="view-all">View all<i className ="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>

    </div>
    )
}
export default Category;