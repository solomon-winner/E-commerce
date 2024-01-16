import "./Brutal.css"
import Banner2 from "../../assets/img/banner/banner2.jpg"
import Banner1 from "../../assets/img/banner/banner1.jpg"
import Category from "../Categories/Category"

const Brutal = () => {
    return (
        <div className ="brutals">
                <div className ="container">
                    <div className ="wrapper">
                        <div className ="column">
                            <div className ="brutal flexwrap">
                                <div className ="row">
                                    <div className ="item">
                                        <div className ="image">
                                            <img src= {Banner1} alt=""/>
                                        </div>
                                        <div className ="text-content flexcol">
                                            <h4>Brutal sale!</h4>
                                            <h3><span>Get The Deal in Here</span><br/>Living Room Chair</h3>

                                            <a href="#" className ="primary-button">Shop Now!</a>
                                        </div>
                                        <a href="#" className  = "over-link"></a>
                                    </div>
                                </div>

                                <div className ="row">
                                    <div className ="item get-gray">
                                        <div className ="image">
                                            <img src= {Banner2} alt=""/>
                                        </div>
                                        <div className  = "text-content flexcol">
                                            <h4>Brutal sale!</h4>
                                            <h3><span>Get The Deal in Here</span><br/>Living Room Chair</h3>

                                            <a href="#" className ="primary-button">Shop Now!</a>
                                        </div>
                                        <a href="#" className  = "over-link"></a>
                                    </div>
                                </div>

                                
                            </div>

                             {/* product- categories  */}
                             <Category/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Brutal;