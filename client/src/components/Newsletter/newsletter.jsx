import "./newsletter.css"

const Newsletter = () => {
    return (
        <div class="newsletter">
                <div class="container">
                    <div class="wrapper">
                        <div class="box">
                            <div class="content">
                                <h3>Subscribe to our Newsletter</h3>
                                <p>Get E-mail updates about our latest shop and <strong>Special Offers!</strong></p>
                            </div>
                            <form action="" class="search">
                                <span class="icon-large"><i class="ri-mai-line"></i></span>
                                <input type="mail" placeholder="Your Email Addres" required/>
                                <button type = "submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Newsletter;