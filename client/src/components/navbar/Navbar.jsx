import "./navbar.css"

const Navbar = () => {
    return (
        
        <div className Name="header">
            <div className ="header-top ">
                <div className ="container">
                    <div className ="wrapper flexitem">
                        <div className ="left">
                            <ul className ="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Featured products</a></li>
                                <li><a href="#">wishlist</a></li>
                            </ul>
                        </div>
                        <div className ="right ">
                            <ul className ="flexitem main-links">
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">USD <span className ="icon-small"><i className ="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li className ="current"><a href="#">USD</a></li>
                                        <li><a href="#">BIRR</a></li>
                                        <li><a href="#">GBR</a></li>
                                        <li><a href="#">EURO</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">English <span className ="icon-small"><i className ="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li className ="current"><a href="#">English</a></li>
                                        <li><a href="#">Amharic</a></li>
                                        <li><a href="#">Oromifa</a></li>
                                    </ul>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
)
    }
    export default Navbar;