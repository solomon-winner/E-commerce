import { useDispatch, useSelector } from "react-redux"
import "./Authentication.css"
import { DisplayActions } from "../../Store/DisplaySlice"

const Login = () => {
    const active = useSelector((state) => state.Display.isAuthToggled)
    const dispatch = useDispatch()
    const AuthToggle = (e) => {
        e.preventDefault()
        dispatch(DisplayActions.AuthToggler())
    }
    return (
        <div className="wrapper">

        
        <div className= {active ? "Authentication active": "Authentication"} id = "Authentication">
            <div className="form-container sign-up">
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
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
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
                <button>Sign In</button>
                </form>
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
                        <p>Discover More, Shop Smarter</p>
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