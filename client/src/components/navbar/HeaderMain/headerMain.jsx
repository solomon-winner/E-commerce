import "./headerMain.css"

const HeaderMain = () => {
    return (
        <div className="HeaderMain">
            <div className="left"></div>
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
    )
}
export default HeaderMain;