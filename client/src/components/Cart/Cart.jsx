import "./Cart.css"
import Cross from "../../assets/icons/xmark-solid.svg"

const Cart = () => {
    return (
        <div className="cart">
                    <div className="cartlist">
                        <div className="cartHead">
                            <div className="cartlefthead">
                               <div className="main-text">Cart list</div>
                            <div className="mini-text">Total 1059 Products</div> 
                            </div>
                        
                            <img className = "cross" src= {Cross} alt="" />
                        </div>
                        <div className="cartItem">
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span className="button"><button>Payment</button></span>
                        </div>
                        
                    </div>
                </div>
    )
}
export default Cart;