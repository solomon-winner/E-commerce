import "./Cart.css"
import Cross from "../../assets/icons/xmark-solid.svg"
import Down from "../../assets/icons/chevron-down-solid.svg" 
import { DisplayActions } from "../../Store/DisplaySlice"
import { useDispatch } from "react-redux"

const Cart = () => {
    const dispatch = useDispatch();
    const DontDisplayCart = (e) => {
        e.preventDefault();
        dispatch(DisplayActions.DontDisplayCart(false));
    }
    return (
        <div className="cart">
                    <div className="cartlist">
                        <div className="cartHead">
                            <div className="cartlefthead">
                               <div className="main-text">Cart list</div>
                            <div className="mini-text">Total 1059 Products</div> 
                            </div>
                        
                            <img className = "cross" src= {Cross} alt="" onClick = {DontDisplayCart}/>
                        </div>
                        <div className="cartItem">
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span className="button"><button>Payment</button></span>
                        </div>
                        
                    </div>
                </div>
    )
}
export default Cart;