import './Item.css'
const Item = ({item}) => {
    return (
        <div className ="item">
                            
                        <div className ="media">
                            <div className ="thumbnail object-cover">
                                <a href="#">
                                    <img src= {Electronic3} alt=""/>
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
                            
                            <h3 className ="main-links"><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                           <div className ="rating">
                                <div className ="stars"></div>
                                <span className ="mini-text">(2,518)</span>
                            </div>
                           
                            <div className ="price">
                                <span className ="current">$129.90</span>
                                <span className ="normal mini-text">$189.90</span>
                            </div>
                           <div className ="mini-text">
                            <p>2975 sold</p>
                            <p>Free Shipping</p>
                            <p className  = "stock-danger">stock: 7 left!</p>

                           </div>
                        </div>
                    </div>
    
    )
}
export default Item;