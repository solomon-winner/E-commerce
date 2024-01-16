import "./Brutal.css"

const Brutal = () => {
    return (
        <div className ="brutals">
                <div className ="container">
                    <div className ="wrapper">
                        <div className ="column">
                            <div className ="brutal flexwrap">
                                <div className ="row">
                                    <div className ="item">
                                        <div className ="image">
                                            <img src="../../assets/img/banner/banner1.jpg" alt=""/>
                                        </div>
                                        <div className ="text-content flexcol">
                                            <h4>Brutal sale!</h4>
                                            <h3><span>Get The Deal in Here</span><br/>Living Room Chair</h3>

                                            <a href="#" className ="primary-button">Shop Now!</a>
                                        </div>
                                        <a href="#" className  = "over-link"></a>
                                    </div>
                                </div>

                                <div className ="row">
                                    <div className ="item get-gray">
                                        <div className ="image">
                                            <img src="../../assets/img/banner/banner2.jpg" alt=""/>
                                        </div>
                                        <div className  = "text-content flexcol">
                                            <h4>Brutal sale!</h4>
                                            <h3><span>Get The Deal in Here</span><br/>Living Room Chair</h3>

                                            <a href="#" className ="primary-button">Shop Now!</a>
                                        </div>
                                        <a href="#" className  = "over-link"></a>
                                    </div>
                                </div>

                                
                            </div>

                             {/* product- categories  */}
            <div className ="product-categories flexwrap">
                <div className ="row">
                    <div className ="item">
                        <div className ="image">
                            <img src="../../assets/img/banner/procat1.jpg" alt=""/>
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
                            <img src="../../assets/img/banner/procat2.jpg" alt=""/>
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
                            <img src="../../assets/img/banner/procat3.jpg" alt=""/>
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
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Brutal;