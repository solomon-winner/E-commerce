import Departments from "../../Departments/departements";
import "./headerMain.css"

const HeaderMain = () => {
    return (

            
        <div className="HeaderMain">
            <div class="container">
                <div class="wrapper flexitem">
                <Departments/>
                <div className = "right">
                    <div className = "search-box">
                        <form action="" className = "search">
                            <span className = "icon-large"><i className = "ri-search-line"></i></span>
                            <input type="search" placeholder="search for products"/>
                            <button type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default HeaderMain;