import "./Cart.css"
import Cross from "../../assets/icons/xmark-solid.svg"

const Cart = () => {
    return (
        <div className="cart">
            <div className="container">
                <div className="wrapper">
                    <div className="cartlist">
                        <div className="cartHead">
                            <span>Cart List</span>
                            <img src= {Cross} alt="" />
                        </div>
                        <div className="cartItem">
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>
                            <span>Shoes</span>

                        </div>
                        <button>Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;