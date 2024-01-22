import "./login.css"

const Login = () => {
    return (
        <div className="Authentication" id = "Authentication">
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
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Fill the Following fields</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend</h1>
                        <p>Register Here!</p>
                        <button className="hidden" id="register">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;