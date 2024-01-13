import "./sponsers.css"
import Asus from "../../assets/img/brands/asus.png"
import Dng from "../../assets/img/brands/dng.png"
import Hurley from "../../assets/img/brands/hurley.png"
import Oppo from "../../assets/img/brands/oppo.png"
import Samsung from "../../assets/img/brands/samsung.png"
import Zara from "../../assets/img/brands/zara.png"

const Sponsers = () => {
    return (
        <div className ="sponsers">
        <div className ="container">
            <div className ="wrapper flexitem">
                <div className ="item">
                    <a href="#">
                        <img src = {Asus} alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src = {Dng} alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src = {Hurley} alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src = {Oppo} alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src = {Samsung} alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/dng.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Sponsers;