import "./login.css"

const Login = () => {
    return (
        <div className="login" id = "login">
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
        </div>
    )
}

export default Login;