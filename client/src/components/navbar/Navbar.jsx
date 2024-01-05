import "./navbar.css"

const Navbar = () => {
    return (
        
        <div id="page" class="site">
        <header>
            <div class="header-top">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <ul class="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Featured products</a></li>
                                <li><a href="#">wishlist</a></li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="flexitem">
                                <li class="main-links">
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">USD <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">USD</a></li>
                                        <li><a href="#">BIRR</a></li>
                                        <li><a href="#">GBR</a></li>
                                        <li><a href="#">EURO</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">English <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">English</a></li>
                                        <li><a href="#">Amharic</a></li>
                                        <li><a href="#">Oromifa</a></li>
                                    </ul>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    
    )
}
export default Navbar;