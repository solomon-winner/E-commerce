import Departments from "../../Departments/departements";
import "./headerMain.css"
import Search from "../../../assets/icons/magnifying-glass-solid.svg"

const HeaderMain = () => {
    return (

            
        <div className="HeaderMain">
            <div className="container">
                <div class="wrapper flexitem">
                <Departments/>
                <div className = "right">
                    <div className = "search-box">
                        <form action="" className = "search">
                            <span className = "icon-large"><img src={Search} alt="" /></span>
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