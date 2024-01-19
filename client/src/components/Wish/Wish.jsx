import "./Wish.css"
import Cross from "../../assets/icons/xmark-solid.svg"
import Down from "../../assets/icons/chevron-down-solid.svg" 
import { DisplayActions } from "../../Store/DisplaySlice"
import { useDispatch } from "react-redux"

const Wish = () => {
    const dispatch = useDispatch()
    const DontDisplayWish = (e) => {
        e.preventDefault();
        dispatch(DisplayActions.DontDisplayWish(false))
    }
    return (
        <div className="Wish">
                    <div className="Wishlist">
                        <div className="WishHead">
                            <div className="Wishlefthead">
                               <div className="main-text">Wish list</div>
                            <div className="mini-text">Total 10 Products</div> 
                            </div>
                        
                            <img className = "cross" src= {Cross} alt="" onClick = {DontDisplayWish}/>
                        </div>
                        <div className="WishItem">
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span>Shoes <img src= {Down} alt="" /></span>
                            <span className="button"><button>Add To Cart</button></span>
                        </div>
                        
                    </div>
                </div>
    )
}
export default Wish;