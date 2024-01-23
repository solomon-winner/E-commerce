import { useDispatch, useSelector } from "react-redux"
import "./Authentication.css"
import { DisplayActions } from "../../Store/DisplaySlice"
import ArrowRight from "../../assets/icons/arrow-right-long-solid.svg"
import ArrowLeft from "../../assets/icons/arrow-left-long-solid.svg"

const Login = () => {
    const active = useSelector((state) => state.Display.isAuthToggled)
    const displayer = useSelector((state) => state.Display.signNo)
    const dispatch = useDispatch()
    const AuthToggle = (e) => {
        e.preventDefault()
        dispatch(DisplayActions.AuthToggler())
    }
    const AddSign = (e) => {
        e.preventDefault();
        dispatch(DisplayActions.addSignCount());
    }
    const minuSign = (e) => {
        e.preventDefault();
        dispatch(DisplayActions.minuSignCount());
    }
    // const signNext = useSelector((state) => state.)
    return (
        <div className="wrapper">
             <div className= {active ? "Authentication active": "Authentication"} id = "Authentication">
            <div className="form-container sign-up">
                <div className={displayer === 0? "sign-form first-form": "first-form"}>
                     <form>
                    <h1>Create Account</h1>
                    <div className="socia-icons">
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                    </div>
                    <span>Or use Your Email for Registration</span>

                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password"/>
                </form>
                </div>
                <div className={displayer === 1? "sign-form second-form": "second-form"}>
                    <h3>What is Your Nitche</h3>
                <form>
                    <div className="radio">
                        <label>
                        <input type="radio" name="Buyer" value="Buyer"/> Buyer
                    </label>
                    <label>
                        <input type="radio" name="Seller" value="Seller"/> Seller
                    </label>
                    <label>
                        <input type="radio" name="Both" value="Both"/> Both
                    </label>
                    </div>
                    <br />
                    <h3>Payment Information</h3>
                    <input type="text" placeholder="Name of the bank"/>
                    <input type="text" placeholder = "Account Number"/>
                    <br />
            "sign-form third-form"
                </form>
                
                </div>
                <div className= {displayer === 2? "sign-form third-form": "third-form"}>
                <h3>Your Location</h3>
                    <input type="text" placeholder="Country"/>
                    <input type="text" placeholder = "City"/>
                    <input type="text" placeholder = "Subcity"/>
                    <input type="text" placeholder="street"/>
                    <button>Sign Up</button>
                </div>
               <a href="#" className="right-arrow" onClick={AddSign}>next <img src= {ArrowRight} alt="" /></a>

            </div>
            <div className="form-container sign-in">
                <div className="log">
                     <form >
               <h1>Sign In</h1>
                <div className = "social-icons">
                    <a href="#" className = "icon"><i className = "fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className = "icon"><i className = "fa-brands fa-facebook-f"></i></a>
                    <a href="#" className = "icon"><i className = "fa-brands fa-github"></i></a>
                    <a href="#" className = "icon"><i className = "fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button>Log In</button>
                </form>
                </div>
               
            </div>
            
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Fill the Following fields</p>
                        <button className="hidden" onClick = {AuthToggle}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Suk</h1>
                        <h5>Discover More, Shop Smarter</h5>
                        <p>Register Here!</p>
                        <button className="hidden" onClick = {AuthToggle}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;