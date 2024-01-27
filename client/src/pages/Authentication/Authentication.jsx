import { useDispatch, useSelector } from "react-redux"
import "./Authentication.css"
import { DisplayActions } from "../../Store/DisplaySlice"
import ArrowRight from "../../assets/icons/arrow-right-long-solid.svg"
import ArrowLeft from "../../assets/icons/arrow-left-long-solid.svg"
import { AuthActions } from "../../Store/AuthSlice"
import { useState } from "react"
import { Request } from "../../Request"

const Login = () => {
    const active = useSelector((state) => state.Display.isAuthToggled) 
    const displayer = useSelector((state) => state.Display.signNo)
    const signData = useSelector((state) => state.Authentication.signUp)
   const isSignUp = useSelector((state) => state.Authentication.isSignedUp)
    const [inputs, setInputs] = useState({
        Name: "",
        Nitche: "",
        Bank: "",
        Bankaccount: "",
        Password: "",
        Email: "",
        Country: "",
        City: "",
        subCity: "",
        street: "",
});
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
    const handleChange = (e) => {
        setInputs((prev) => ({...prev,[e.target.name]: e.target.value}))
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AuthActions.handleChange(inputs))
        setInputs({
            Name: "",
            Nitche: "",
            Bank: "",
            Bankaccount: "",
            Password: "",
            Email: "",
            Country: "",
            City: "",
            subCity: "",
            street: "",
    })
        if (isSignUp) 
        sign(signData);
        dispatch(DisplayActions.AuthToggler())

    }
const sign = async(signData) => {
    console.log("this is from the Authentication " + signData)
                const res = await Request.post("/auth/register",signData)
                // dispatch(AuthActions.register(res.data));
                console.log("this is from the Authentication " + res.data)
            }
    return (
        <div className="wrapper">
             <div className= {active ? "Authentication active": "Authentication"} id = "Authentication">
            <div className="form-container sign-up">
                <div className={displayer === 0? "sign-form first-form": "not"}>
                     <form>
                    <h1>Create Account</h1>
                    <div className="socia-icons">
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                        <a href="#" className="icon"></a>
                    </div>
                    <span>Or use Your Email for Registration</span>

                    <input type="text" placeholder="Name" name="Name" onChange={handleChange}/>
                    <input type="email" placeholder="Email"name="Email" onChange={handleChange}/>
                    <input type="password" placeholder="password" name="Password" onChange={handleChange}/>
                </form>
                </div>
                <div className={displayer === 1? "sign-form second-form": "not"}>
                    <h3>What is Your Nitche</h3>
                <form>
                    <div className="radio">
                        <label>
                        <input type="radio" name="Nitche" value="Buyer" onChange={handleChange}/> Buyer
                    </label>
                    <label>
                        <input type="radio" name="Nitche" value="Seller" onChange={handleChange}/> Seller
                    </label>
                    <label>
                        <input type="radio" name="Nitche" value="Both" onChange={handleChange}/> Both
                    </label>
                    </div>
                    <br />
                    <h3>Payment Information</h3>
                    <input type="text" placeholder="Name of the bank" name="Bank" onChange={handleChange}/>
                    <input type="text" placeholder = "Account Number" name="Bankaccount" onChange={handleChange}/>
                    <br />
                </form>
                
                </div>
                <div className= {displayer === 2? "sign-form third-form": "not"}>
                <h3>Your Location</h3>
                    <input type="text" placeholder="Country" name = "Country" onChange={handleChange}/>
                    <input type="text" placeholder = "City" name = "City" onChange={handleChange}/>
                    <input type="text" placeholder = "Subcity" name = "subCity" onChange={handleChange}/>
                    <input type="text" placeholder="street" name="street" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
                { displayer > 0 && <a href="#" className="left-arrow" onClick={minuSign}><img src= {ArrowLeft} alt="" /> prev</a>}
               {displayer < 2 && <a href="#" className="right-arrow" onClick={AddSign}>next <img src= {ArrowRight} alt="" /></a>}
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